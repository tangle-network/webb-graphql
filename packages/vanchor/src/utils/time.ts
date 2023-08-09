import { BigInt, Int8 } from '@graphprotocol/graph-ts';

export const getStartInterval = (time: BigInt, slidingWindow: i32): i32 => {
  const timeInSec: i32 = time.toI32();
  const interval: i32 = slidingWindow * 60; // 15 mins
  const startInterval: i32 = (Math.floor(timeInSec / interval) *
    interval) as i32;
  return startInterval;
};

export const getEndInterval = (time: BigInt, slidingWindow: i32): i32 => {
  const interval: i32 = slidingWindow * 60; // 15 mins
  const startInterval: i32 = getStartInterval(time, slidingWindow);
  const endInterval: i32 = startInterval + interval;
  return endInterval;
};
