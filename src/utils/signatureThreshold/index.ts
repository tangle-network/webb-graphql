import { FunctionPropertyNames } from "@subql/types"
import { SignatureThreshold } from "../../types"

export type SignatureThresholdProps = Omit<
  SignatureThreshold,
  NonNullable<FunctionPropertyNames<SignatureThreshold>>
>

/**
 * The last object to compare with current object,
 * it will ignore the current object if 2 objects are same
 * otherwise it will save the current object to database (prevent data duplication)
 */
export const lastSignatureThreshold: { value: null | SignatureThreshold } = {
  value: null,
}

export * from "./checkAndAdd"
