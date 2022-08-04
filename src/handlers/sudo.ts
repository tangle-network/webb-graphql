import { SubstrateExtrinsic } from "@subql/types"
import { getInsideCalls } from "../utils"
import { dkgHandler } from "./dkg/handler"
import { createExtrinsic } from "./extrinsic"

export async function createSudoCall(extrinsic: SubstrateExtrinsic) {
  await createExtrinsic(extrinsic)

  const insideCalls = getInsideCalls(extrinsic)

  await Promise.all(
    insideCalls.map(async (call) => {
      switch (call.module) {
        case "dkg": {
          await dkgHandler({ call, extrinsic })
          break
        }

        default:
          break
      }
    })
  )
}
