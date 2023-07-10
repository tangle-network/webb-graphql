import {
    Wrapping as WrappingEvent,
} from "../generated/vanchor/FungibleTokenWrapper";
import { log } from "@graphprotocol/graph-ts";

export function handleWrapping(event: WrappingEvent): void {
    log.info("Wrapping event", []);
}
