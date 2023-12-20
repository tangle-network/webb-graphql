import { ensureBlock } from './block';
import { Session, SessionValidator, Validator } from '../types';
import { u32 } from '@polkadot/types-codec';
import { ensureAccount } from './account';
import { increaseSourceSession } from './source';

// What is UPTIME_DIVIDER for?
const UPTIME_DIVIDER = 10_000;
const DEFAULT_UPTIME = 1_000_000;

/**
 * Check if the session is in the DB, if not create it
 **/
export const ensureSession = async (sessionNumber: string, blockNumber: string) => {
  const block = await ensureBlock(blockNumber);

  const session = await Session.get(sessionNumber);
  if (session) return session;

  const newSession = Session.create({
    id: sessionNumber,
    blockNumber: block.number,
    blockId: block.id,
  });

  await Promise.all([increaseSourceSession('0'), newSession.save()]);
  return newSession;
};

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
    // ?? Divide by 10_000 to get the percentage
    uptime: DEFAULT_UPTIME,
  });

  await newValidator.save();
  return newValidator;
}

// TODO: might need to add type for the input param after checking the other fields
async function ensureSessionValidator(sessionId: string, input: any, blockNumber: number) {
  const id = `${sessionId}-${input.accountId}`;
  const sessionValidator = new SessionValidator(id);
  await ensureValidator(input.accountId, input.authorityId);
  sessionValidator.sessionId = sessionId;
  sessionValidator.validatorId = input.accountId;
  // TODO: isBest
  // TODO: isNext
  // TODO: isNextBest
  // TODO: bestOrder
  // TODO: nextBestOrder
  // TODO: reputation
  sessionValidator.uptime = sessionValidator.uptime || input.uptime || DEFAULT_UPTIME;
  sessionValidator.blockNumber = BigInt(blockNumber);
  await sessionValidator.save();
  return sessionValidator;
}

export async function updateSessionValidatorUptime(sessionId: string, accountId: string, uptimeValue: number) {
  const id = `${sessionId}-${accountId}`;
  const sessionValidator = await SessionValidator.get(id);

  if (!sessionValidator) {
    await ensureSessionValidator(
      sessionId,
      {
        accountId,
        authorityId: '',
        uptime: uptimeValue,
      },
      0
    );
  }

  logger.info(`Updating uptime`);
  sessionValidator.uptime = uptimeValue;
  await sessionValidator.save();
}

export async function getCurrentSessionId(): Promise<string> {
  return ((await api.query.session.currentIndex()) as unknown as u32).toString();
}
