import { BLOCK_TIME } from '../constants';

export function getDateAfterNumOfBlocks(start: Date, numOfBlocks: number) {
  return new Date(start.getTime() + numOfBlocks * BLOCK_TIME * 1000);
}
