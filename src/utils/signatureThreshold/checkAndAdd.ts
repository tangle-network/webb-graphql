import {
  lastSignatureThreshold as lastThreshold,
  SignatureThresholdProps,
} from "."
import { Block, SignatureThreshold } from "../../types"
import { isEqual } from "../isEqual"
import { getCurrentSignatureThreshold } from "./getCurrent"

/**
 * Fetch and check current metric data, then save if the current data
 * is new, otherwise it will ignore the metric.
 * @param block Saved block to reference when save new metric
 * @returns `true` if new metric is saved, otherwise `false`
 */
export const checkAndAddSignatureThreshold = async (
  block: Block
): Promise<boolean> => {
  const currentThreshold = await getCurrentSignatureThreshold()
  currentThreshold.blockId = block.id

  // Ignore if current and last threshold are the same
  if (lastThreshold.value && isEqual(currentThreshold, lastThreshold.value)) {
    return false
  }

  await addThreshold(currentThreshold)

  return true
}

/**
 * Save new metric to database
 * @param threshold represent the current `authorities` object to save
 */
async function addThreshold(threshold: Omit<SignatureThresholdProps, "id">) {
  const recordId = lastThreshold.value ? lastThreshold.value.id + 1 : 1
  const data = new SignatureThreshold(recordId.toString())

  data.current = threshold.current
  data.pending = threshold.pending
  data.next = threshold.next
  data.blockId = threshold.blockId

  await data.save()
  lastThreshold.value = data
}
