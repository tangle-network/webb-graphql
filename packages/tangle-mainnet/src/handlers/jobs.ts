import { SubstrateEvent } from '@subql/types';

import { ValidatorRewardLog } from '../types';
import { ensureBlock } from './block';

export async function createValidatorRewardLog(event: SubstrateEvent) {
  const block = await ensureBlock(event.block.block.header.number.toString());
  const index = event.idx;
  const recordId = `${block.id}-${index}`;
  const validatorReward = new ValidatorRewardLog(recordId);

  if (validatorReward) return;

  validatorReward.accountId = event.event.data[0].toString();
  validatorReward.reward = BigInt(event.event.data[1].toString());
  validatorReward.blockNumber = block.number;
  await validatorReward.save();
}
