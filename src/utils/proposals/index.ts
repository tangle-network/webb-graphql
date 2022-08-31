import { ProposalItem } from "../../types"
import { FunctionPropertyNames } from "@subql/types"

export type ProposalItemProps = Omit<
  ProposalItem,
  NonNullable<FunctionPropertyNames<ProposalItem>>
>
