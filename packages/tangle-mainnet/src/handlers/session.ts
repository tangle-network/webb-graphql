import { ensureBlock } from './block';
import { Session, SessionValidator, Validator } from '../types';
import { u32 } from '@polkadot/types-codec';
import { ensureAccount } from './account';
import { increaseSourceSession } from './source';

const UPTIME_DIVIDER = 10_000;
const DEFAULT_UPTIME = 1_000_000;

/**
 * Check if the session is in the DB, if not create it
 * */
export const ensureSession = async (sessionNumber: string, block: string) => {
  await ensureBlock(block);
  const session = await Session.get(sessionNumber);
  if (session) {
    return session;
  }
  ensureSessionValidators(sessionNumber, block);
  const newSession = Session.create({
    blockId: block,
    blockNumber: Number(block),
    id: sessionNumber,
  });
  await Promise.all([increaseSourceSession('0'), newSession.save()]);
  return newSession;
};

/**
 * Check if the session validators are in the DB, if not create them
 */
export async function ensureSessionValidators(sessionId: string, blockId: string) {
  const validators = await api.query.session.validators();

  const sessionValidators = await Promise.all(
    validators.map((validatorId, index) => {
      return createOrUpdateSessionValidator(
        sessionId,
        {
          accountId: validatorId,
          authorityId: validatorsAuthoritiesIds[index],
          uptime: validatorsUptimesValues[index],
        },
        Number(blockId)
      );
    })
  );
  const sessionValidatorsIds = sessionValidators.map((sv) => sv.id);
}

/**
 * Round the block number to a session id
 * a session is from block 0 to block $SessionHeight - 1
 *
 * */
export async function nextSessionId(blockId: string): Promise<{ sessionNumber: string; sessionBlock: string }> {
  const currentSessionIndex = (await api.query.session.currentIndex()) as unknown as u32;

  return {
    sessionNumber: (Number(currentSessionIndex.toString()) + 1).toString(),
    sessionBlock: blockId,
  };
}

export async function currentSessionId(blockId: string): Promise<{ sessionNumber: string; sessionBlock: string }> {
  const currentSessionIndex = (await api.query.session.currentIndex()) as unknown as u32;

  return {
    sessionNumber: currentSessionIndex.toString(),
    sessionBlock: blockId,
  };
}

async function ensureValidator(id: string, authorityId: string) {
  const validator = await Validator.get(id);
  if (validator) {
    return validator;
  }
  await ensureAccount(id);
  const newValidator = Validator.create({
    id,
    authorityId,
    accountId: id,
    // Divid by 10_000 to get the percentage
    uptime: DEFAULT_UPTIME,
  });
  await newValidator.save();
  return newValidator;
}

async function createOrUpdateSessionValidator(sessionId: string, input: any, blockNumber: number) {
  const id = `${sessionId}-${input.accountId}`;
  const sessionValidator = new SessionValidator(id);
  await ensureValidator(input.accountId, input.authorityId);
  sessionValidator.sessionId = sessionId;
  sessionValidator.validatorId = input.accountId;
  sessionValidator.uptime = sessionValidator.uptime || input.uptime || DEFAULT_UPTIME;
  sessionValidator.blockNumber = BigInt(blockNumber);
  await sessionValidator.save();
  return sessionValidator;
}
export async function setSessionValidatorUptime(sessionId: string, accountId: string, uptimeValue: number) {
  const id = `${sessionId}-${accountId}`;
  logger.info(`Updating uptime`);
  const sessionValidator = await SessionValidator.get(id);
  if (sessionValidator) {
    sessionValidator.uptime = uptimeValue;
    return sessionValidator.save();
  }
  return createOrUpdateSessionValidator(
    sessionId,
    {
      accountId,
      authorityId: '',
      uptime: uptimeValue,
    },
    0
  );
}
