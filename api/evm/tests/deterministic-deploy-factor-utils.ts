import { newMockEvent } from 'matchstick-as';
import { ethereum, Address } from '@graphprotocol/graph-ts';
import { Deploy } from '../generated/DeterministicDeployFactor/DeterministicDeployFactor';

export function createDeployEvent(addr: Address): Deploy {
  let deployEvent = changetype<Deploy>(newMockEvent());

  deployEvent.parameters = new Array();

  deployEvent.parameters.push(new ethereum.EventParam('addr', ethereum.Value.fromAddress(addr)));

  return deployEvent;
}
