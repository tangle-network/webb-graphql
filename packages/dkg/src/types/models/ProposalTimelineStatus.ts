// Auto-generated , DO NOT EDIT
import { Entity, FunctionPropertyNames } from '@subql/types';
import assert from 'assert';

import { ProposalStatus } from '../enums';

export type ProposalTimelineStatusProps = Omit<
  ProposalTimelineStatus,
  NonNullable<FunctionPropertyNames<ProposalTimelineStatus>> | '_name'
>;

export class ProposalTimelineStatus implements Entity {
  constructor(id: string) {
    this.id = id;
  }

  public id: string;

  public status: ProposalStatus;

  public txHash?: string;

  public blockNumber: BigInt;

  public proposalItemId: string;

  public timestamp: Date;

  get _name(): string {
    return 'ProposalTimelineStatus';
  }

  async save(): Promise<void> {
    let id = this.id;
    assert(id !== null, 'Cannot save ProposalTimelineStatus entity without an ID');
    await store.set('ProposalTimelineStatus', id.toString(), this);
  }
  static async remove(id: string): Promise<void> {
    assert(id !== null, 'Cannot remove ProposalTimelineStatus entity without an ID');
    await store.remove('ProposalTimelineStatus', id.toString());
  }

  static async get(id: string): Promise<ProposalTimelineStatus | undefined> {
    assert(id !== null && id !== undefined, 'Cannot get ProposalTimelineStatus entity without an ID');
    const record = await store.get('ProposalTimelineStatus', id.toString());
    if (record) {
      return this.create(record as ProposalTimelineStatusProps);
    } else {
      return;
    }
  }

  static async getByProposalItemId(proposalItemId: string): Promise<ProposalTimelineStatus[] | undefined> {
    const records = await store.getByField('ProposalTimelineStatus', 'proposalItemId', proposalItemId);
    return records.map((record) => this.create(record as ProposalTimelineStatusProps));
  }

  static create(record: ProposalTimelineStatusProps): ProposalTimelineStatus {
    assert(typeof record.id === 'string', 'id must be provided');
    let entity = new this(record.id);
    Object.assign(entity, record);
    return entity;
  }
}
