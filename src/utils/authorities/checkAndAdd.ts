import { AuthoritiesProps, lastAuthorities } from '.';
import { Authorities, Block } from '../../types';
import { isEqual } from '../isEqual';
import { getCurrentAuthorities } from './getCurrent';

/**
 * Fetch and check current metric data, then save if the current data
 * is new, otherwise it will ignore the metric.
 * @param block Saved block to reference when save new metric
 * @returns `true` if new metric is saved, otherwise `false`
 */
export const checkAndAddAuthorities = async (block: Block): Promise<boolean> => {
  const currentAuthorities = await getCurrentAuthorities();
  currentAuthorities.blockId = block.id;

  // Ignore if current and last threshold are the same
  if (lastAuthorities.value && isEqual(currentAuthorities, lastAuthorities.value)) {
    return false;
  }

  await addAuthorities(currentAuthorities);

  return true;
};

/**
 * Save new metric to database
 * @param authorities represent the current `authorities` object to save
 */
async function addAuthorities(authorities: Omit<AuthoritiesProps, 'id'>) {
  const recordId = lastAuthorities.value ? parseInt(lastAuthorities.value.id) + 1 : 1;
  const data = new Authorities(recordId.toString());

  data.current = authorities.current;
  data.next = authorities.next;
  data.blockId = authorities.blockId;

  await data.save();
  lastAuthorities.value = data;
}
