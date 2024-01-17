import { SubstrateBlock } from '@subql/types';
import { Block } from '../types';

export async function ensureBlock(blockNumber: string) {
  let data = await Block.get(blockNumber);
  if (!data) {
    data = new Block(blockNumber);
    data.number = BigInt(blockNumber);
    await data.save();
  }
  return data;
}

export async function createBlock(block: SubstrateBlock) {
  logger.info(`Creating block blockHash = ${block.hash} , blockNumber = ${block.block.header.number}`);
  const data = await ensureBlock(block.block.header.number.toString());

  data.hash = block.block.hash?.toString();
  data.timestamp = block.timestamp;
  data.parentHash = block.block.header.parentHash?.toString();
  data.specVersion = block.specVersion?.toString();
  data.stateRoot = block.block.header.stateRoot?.toString();
  data.extrinsicsRoot = block.block.header.extrinsicsRoot?.toString();

  await data.save();
  return data;
}
