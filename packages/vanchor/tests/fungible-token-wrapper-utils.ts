import { newMockEvent } from 'matchstick-as';
import { ethereum, Address, BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  Approval,
  HandlerUpdated,
  Paused,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Transfer,
  Unpaused,
} from '../generated/FungibleTokenWrapper/FungibleTokenWrapper';

export function createApprovalEvent(owner: Address, spender: Address, value: BigInt): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent());

  approvalEvent.parameters = new Array();

  approvalEvent.parameters.push(new ethereum.EventParam('owner', ethereum.Value.fromAddress(owner)));
  approvalEvent.parameters.push(new ethereum.EventParam('spender', ethereum.Value.fromAddress(spender)));
  approvalEvent.parameters.push(new ethereum.EventParam('value', ethereum.Value.fromUnsignedBigInt(value)));

  return approvalEvent;
}

export function createHandlerUpdatedEvent(_handler: Address): HandlerUpdated {
  let handlerUpdatedEvent = changetype<HandlerUpdated>(newMockEvent());

  handlerUpdatedEvent.parameters = new Array();

  handlerUpdatedEvent.parameters.push(new ethereum.EventParam('_handler', ethereum.Value.fromAddress(_handler)));

  return handlerUpdatedEvent;
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent());

  pausedEvent.parameters = new Array();

  pausedEvent.parameters.push(new ethereum.EventParam('account', ethereum.Value.fromAddress(account)));

  return pausedEvent;
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent());

  roleAdminChangedEvent.parameters = new Array();

  roleAdminChangedEvent.parameters.push(new ethereum.EventParam('role', ethereum.Value.fromFixedBytes(role)));
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam('previousAdminRole', ethereum.Value.fromFixedBytes(previousAdminRole))
  );
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam('newAdminRole', ethereum.Value.fromFixedBytes(newAdminRole))
  );

  return roleAdminChangedEvent;
}

export function createRoleGrantedEvent(role: Bytes, account: Address, sender: Address): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent());

  roleGrantedEvent.parameters = new Array();

  roleGrantedEvent.parameters.push(new ethereum.EventParam('role', ethereum.Value.fromFixedBytes(role)));
  roleGrantedEvent.parameters.push(new ethereum.EventParam('account', ethereum.Value.fromAddress(account)));
  roleGrantedEvent.parameters.push(new ethereum.EventParam('sender', ethereum.Value.fromAddress(sender)));

  return roleGrantedEvent;
}

export function createRoleRevokedEvent(role: Bytes, account: Address, sender: Address): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent());

  roleRevokedEvent.parameters = new Array();

  roleRevokedEvent.parameters.push(new ethereum.EventParam('role', ethereum.Value.fromFixedBytes(role)));
  roleRevokedEvent.parameters.push(new ethereum.EventParam('account', ethereum.Value.fromAddress(account)));
  roleRevokedEvent.parameters.push(new ethereum.EventParam('sender', ethereum.Value.fromAddress(sender)));

  return roleRevokedEvent;
}

export function createTransferEvent(from: Address, to: Address, value: BigInt): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent());

  transferEvent.parameters = new Array();

  transferEvent.parameters.push(new ethereum.EventParam('from', ethereum.Value.fromAddress(from)));
  transferEvent.parameters.push(new ethereum.EventParam('to', ethereum.Value.fromAddress(to)));
  transferEvent.parameters.push(new ethereum.EventParam('value', ethereum.Value.fromUnsignedBigInt(value)));

  return transferEvent;
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent());

  unpausedEvent.parameters = new Array();

  unpausedEvent.parameters.push(new ethereum.EventParam('account', ethereum.Value.fromAddress(account)));

  return unpausedEvent;
}
