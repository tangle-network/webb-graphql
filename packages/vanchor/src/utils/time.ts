import { BigInt, Int8 } from "@graphprotocol/graph-ts";


export const getStartAndEndIntrerval = (time: BigInt, slidingWindow: Int8) => {
    const timeInSec = time.toI32();
    const interval = slidingWindow * 60; // 15 mins
    const startInterval = (timeInSec / interval) * interval;
    const endInterval = startInterval + interval;
    return { startInterval, endInterval };
}