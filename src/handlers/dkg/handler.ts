import { DKGMethod, KeygenThresholdArgs, SignatureThresholdArgs } from "."
import { ModuleHandlerArgs } from ".."
import { createKeygenThreshold } from "./keygenThreshold"
import { createSignatureThreshold } from "./signatureThreshold"

export async function dkgHandler({ call, extrinsic }: ModuleHandlerArgs) {
  logger.info("dkgHandler " + JSON.stringify({ call, extrinsic }, null, 2))
  logger.debug("dkgHandler " + JSON.stringify({ call, extrinsic }, null, 2))
  switch (call.method as DKGMethod) {
    case DKGMethod.SIGNATURE_THRESHOLD: {
      const args: SignatureThresholdArgs = call.args
      await createSignatureThreshold(extrinsic, args)
      break
    }

    case DKGMethod.KEYGEN_THRESHOLD: {
      const args: KeygenThresholdArgs = call.args
      await createKeygenThreshold(extrinsic, args)
      break
    }

    default:
      break
  }
}
