import { FunctionPropertyNames } from "@subql/types"
import { KeygenThreshold } from "../../types"

export type KeygenThresholdProps = Omit<
  KeygenThreshold,
  NonNullable<FunctionPropertyNames<KeygenThreshold>>
>

/**
 * The last object to compare with current object,
 * it will ignore the current object if 2 objects are same
 * otherwise it will save the current object to database (prevent data duplication)
 */
export const lastKeygenThreshold: { value: null | KeygenThreshold } = {
  value: null,
}

export * from "./checkAndAdd"
