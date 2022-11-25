import { KeygenThresholdProps, lastKeygenThreshold as lastThreshold } from '.';
import { Block, KeygenThreshold } from '../../types';
import { isEqual } from '../isEqual';
import { getCurrentKeygenThreshold } from './getCurrent';

/**
 * Fetch and check current metric data, then save if the current data
 * is new, otherwise it will ignore the metric.
 * @param block Saved block to reference when save new metric
 * @returns `true` if new metric is saved, otherwise `false`
 */
export const checkAndAddKeygenThreshold = async (block: Block): Promise<boolean> => {
  const currentThreshold = await getCurrentKeygenThreshold();
  currentThreshold.blockId = block.id;

  // Ignore if current and last threshold are the same
  if (lastThreshold.value && isEqual(currentThreshold, lastThreshold.value)) {
    return false;
  }

  await addThreshold(currentThreshold);

  return true;
};

/**
 * Save new metric to database
 * @param threshold represent the current `threshold` object to save
 */
async function addThreshold(threshold: Omit<KeygenThresholdProps, 'id'>) {
  const recordId = lastThreshold.value ? lastThreshold.value.id + 1 : 1;
  const data = new KeygenThreshold(recordId.toString());

  data.current = threshold.current;
  data.pending = threshold.pending;
  data.next = threshold.next;
  data.blockId = threshold.blockId;

  await data.save();
  lastThreshold.value = data;
}
