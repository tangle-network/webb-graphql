import {
    Wrapping as WrappingEvent,
    Unwrapping as UnwrappingEvent,
} from "../generated/vanchor/FungibleTokenWrapper";
import { Bytes, ethereum, log } from "@graphprotocol/graph-ts";
import { recordTotalFees } from "./wrappingFees";
import { recordFeeFor15MinsInterval } from "./wrappingFees/15MinsInterval";
import { getTxnInputDataToDecode } from "./utils/token";

export function handleWrapping(event: WrappingEvent): void {

    if (event.params !== null) {

        const vAnchorAddress = event.params.recipient;
        const tokenAddress = event.params.tokenAddress;
        const feeAmount = event.params.wrappingFee;
        // TODO - MAke sure this is a vAnchor address, otherwise skip.
        // Record Wrapping Fees
        recordTotalFees(vAnchorAddress, tokenAddress, feeAmount);
        recordFeeFor15MinsInterval(vAnchorAddress, tokenAddress, feeAmount, event.block.timestamp);
    }
}


export function handleUnwrapping(event: UnwrappingEvent): void {
    log.info("Unwrapping event", []);
}
