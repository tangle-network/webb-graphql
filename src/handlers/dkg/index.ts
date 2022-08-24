import { SubstrateEvent } from "@subql/types"
import { DKGSections } from "./type"

export function dkgEventHandler(event: SubstrateEvent) {
  const section = event.event.section as DKGSections
}
