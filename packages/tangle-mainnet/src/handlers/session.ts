import { ensureBlock } from './block';
import { Session, SessionValidator, Validator } from '../types';
import { u32 } from '@polkadot/types-codec';
import { ensureIdentity } from './identity';
import { increaseSourceSession } from './source';

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
  let validator = await Validator.get(id);
  if (!validator) {
    await ensureIdentity(id);
    validator = new Validator(id);
    validator.authorityId = authorityId;
    validator.identityId = id;
    validator.uptime = DEFAULT_UPTIME;
    await validator.save();
  }
}

async function ensureSessionValidator(sessionId: string, input: any, blockNumber: number) {
  const id = `${sessionId}-${input.identityId}`;
  const sessionValidator = new SessionValidator(id);
  await ensureValidator(input.identityId, input.authorityId);
  sessionValidator.sessionId = sessionId;
  sessionValidator.validatorId = input.identityId;
  sessionValidator.uptime = sessionValidator.uptime || input.uptime || DEFAULT_UPTIME;
  sessionValidator.blockNumber = BigInt(blockNumber);
  await sessionValidator.save();
  return sessionValidator;
}

export async function updateSessionValidatorUptime(
  sessionId: string,
  identityId: string,
  authorityId: string,
  uptimeValue: number
) {
  const id = `${sessionId}-${identityId}`;
  const sessionValidator = await SessionValidator.get(id);

  if (!sessionValidator) {
    await ensureSessionValidator(
      sessionId,
      {
        identityId,
        authorityId,
        uptime: uptimeValue,
      },
      0
    );
  } else {
    logger.info(`Updating uptime`);
    sessionValidator.uptime = uptimeValue;
    await sessionValidator.save();
  }
}

export async function getCurrentSessionId(): Promise<string> {
  return ((await api.query.session.currentIndex()) as unknown as u32).toString();
}
