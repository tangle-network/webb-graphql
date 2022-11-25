// Auto-generated , DO NOT EDIT
import { Entity, FunctionPropertyNames } from '@subql/types';
import assert from 'assert';

type UnsignedProposalsQueueItemProps = Omit<
  UnsignedProposalsQueueItem,
  NonNullable<FunctionPropertyNames<UnsignedProposalsQueueItem>>
>;

export class UnsignedProposalsQueueItem implements Entity {
  constructor(id: string) {
    this.id = id;
  }

  public id: string;

  public proposalId: string;

  public queueId: string;

  public blockNumber: number;

  async save(): Promise<void> {
    let id = this.id;
    assert(id !== null, 'Cannot save UnsignedProposalsQueueItem entity without an ID');
    await store.set('UnsignedProposalsQueueItem', id.toString(), this);
  }
  static async remove(id: string): Promise<void> {
    assert(id !== null, 'Cannot remove UnsignedProposalsQueueItem entity without an ID');
    await store.remove('UnsignedProposalsQueueItem', id.toString());
  }

  static async get(id: string): Promise<UnsignedProposalsQueueItem | undefined> {
    assert(id !== null && id !== undefined, 'Cannot get UnsignedProposalsQueueItem entity without an ID');
    const record = await store.get('UnsignedProposalsQueueItem', id.toString());
    if (record) {
      return UnsignedProposalsQueueItem.create(record as UnsignedProposalsQueueItemProps);
    } else {
      return;
    }
  }

  static async getByProposalId(proposalId: string): Promise<UnsignedProposalsQueueItem[] | undefined> {
    const records = await store.getByField('UnsignedProposalsQueueItem', 'proposalId', proposalId);
    return records.map((record) => UnsignedProposalsQueueItem.create(record as UnsignedProposalsQueueItemProps));
  }

  static async getByQueueId(queueId: string): Promise<UnsignedProposalsQueueItem[] | undefined> {
    const records = await store.getByField('UnsignedProposalsQueueItem', 'queueId', queueId);
    return records.map((record) => UnsignedProposalsQueueItem.create(record as UnsignedProposalsQueueItemProps));
  }

  static create(record: UnsignedProposalsQueueItemProps): UnsignedProposalsQueueItem {
    assert(typeof record.id === 'string', 'id must be provided');
    let entity = new UnsignedProposalsQueueItem(record.id);
    Object.assign(entity, record);
    return entity;
  }
}
