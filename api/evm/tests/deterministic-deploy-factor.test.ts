import { afterAll, assert, beforeAll, clearStore, describe, test } from 'matchstick-as/assembly/index';
import { Address } from '@graphprotocol/graph-ts';
import { Deploy } from '../generated/schema';
import { handleDeploy } from '../src/deterministic-deploy-factor';
import { createDeployEvent } from './deterministic-deploy-factor-utils';

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe('Describe entity assertions', () => {
  beforeAll(() => {
    let addr = Address.fromString('0x0000000000000000000000000000000000000001');
    let newDeployEvent = createDeployEvent(addr);
    handleDeploy(newDeployEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test('Deploy created and stored', () => {
    assert.entityCount('Deploy', 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      'Deploy',
      '0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1',
      'addr',
      '0x0000000000000000000000000000000000000001'
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
