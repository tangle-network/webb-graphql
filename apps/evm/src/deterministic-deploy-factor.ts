import { Deploy as DeployEvent } from "../generated/DeterministicDeployFactor/DeterministicDeployFactor"
import { Deploy } from "../generated/schema"

export function handleDeploy(event: DeployEvent): void {
  let entity = new Deploy(
    event.transaction.hash.concatI32(event.logIndex.toI32()).toHexString()
  )
  entity.addr = event.params.addr

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
