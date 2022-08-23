import { FunctionPropertyNames } from "@subql/types"
import { Authorities } from "../../types"

export type AuthoritiesProps = Omit<
  Authorities,
  NonNullable<FunctionPropertyNames<Authorities>>
>

/**
 * The last object to compare with current object,
 * it will ignore the current object if 2 objects are same
 * otherwise it will save the current object to database (prevent data duplication)
 */
export const lastAuthorities: { value: null | Authorities } = {
  value: null,
}

export * from "./checkAndAdd"
