import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
} from 'matchstick-as/assembly/index';
import { BigInt, Bytes, Address } from '@graphprotocol/graph-ts';
import { EdgeAddition } from '../generated/schema';
import { EdgeAddition as EdgeAdditionEvent } from '../generated/vanchor/vanchor';
import { handleEdgeAddition } from '../src/vanchor';
import { createEdgeAdditionEvent } from './vanchor-utils';

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe('Describe entity assertions', () => {
  beforeAll(() => {
    let chainID = BigInt.fromI32(234);
    let latestLeafIndex = BigInt.fromI32(234);
    let merkleRoot = BigInt.fromI32(234);
    let newEdgeAdditionEvent = createEdgeAdditionEvent(
      chainID,
      latestLeafIndex,
      merkleRoot
    );
    handleEdgeAddition(newEdgeAdditionEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test('EdgeAddition created and stored', () => {
    assert.entityCount('EdgeAddition', 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      'EdgeAddition',
      '0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1',
      'chainID',
      '234'
    );
    assert.fieldEquals(
      'EdgeAddition',
      '0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1',
      'latestLeafIndex',
      '234'
    );
    assert.fieldEquals(
      'EdgeAddition',
      '0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1',
      'merkleRoot',
      '234'
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
