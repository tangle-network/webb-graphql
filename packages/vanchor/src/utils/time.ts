import { BigInt } from '@graphprotocol/graph-ts';

export interface IntervalType {
  startInterval: i32;
  endInterval: i32;
}

const MINUTES_15 = 15;
const MINUTES_IN_HOUR: i32 = 60;
const HOURS_IN_DAY: i32 = 24;

export const getStartInterval = (time: BigInt, slidingWindow: i32): i32 => {
  const timeInSec: i32 = time.toI32();
  const interval: i32 = slidingWindow * 60;
  const startInterval: i32 = (Math.floor(timeInSec / interval) *
    interval) as i32;
  return startInterval;
};

export const getEndInterval = (time: BigInt, slidingWindow: i32): i32 => {
  const interval: i32 = slidingWindow * 60;
  const startInterval: i32 = getStartInterval(time, slidingWindow);
  const endInterval: i32 = startInterval + interval;
  return endInterval;
};

export const getStartInterval15Mins = (time: BigInt): i32 => {
  return getStartInterval(time, MINUTES_15);
};

export const getEndInterval15Mins = (time: BigInt): i32 => {
  return getEndInterval(time, MINUTES_15);
};

export const getStartIntervalDay = (time: BigInt): i32 => {
  return getStartInterval(time, MINUTES_IN_HOUR * HOURS_IN_DAY);
};

export const getEndIntervalDay = (time: BigInt): i32 => {
  return getEndInterval(time, MINUTES_IN_HOUR * HOURS_IN_DAY);
};
