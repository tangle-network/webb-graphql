// Auto-generated , DO NOT EDIT
import { Entity, FunctionPropertyNames } from '@subql/types';
import assert from 'assert';

type ProposerThresholdProps = Omit<ProposerThreshold, NonNullable<FunctionPropertyNames<ProposerThreshold>>>;

export class ProposerThreshold implements Entity {
  constructor(id: string) {
    this.id = id;
  }

  public id: string;

  public value?: number;

  public blockId: string;

  async save(): Promise<void> {
    let id = this.id;
    assert(id !== null, 'Cannot save ProposerThreshold entity without an ID');
    await store.set('ProposerThreshold', id.toString(), this);
  }
  static async remove(id: string): Promise<void> {
    assert(id !== null, 'Cannot remove ProposerThreshold entity without an ID');
    await store.remove('ProposerThreshold', id.toString());
  }

  static async get(id: string): Promise<ProposerThreshold | undefined> {
    assert(id !== null && id !== undefined, 'Cannot get ProposerThreshold entity without an ID');
    const record = await store.get('ProposerThreshold', id.toString());
    if (record) {
      return ProposerThreshold.create(record as ProposerThresholdProps);
    } else {
      return;
    }
  }

  static async getByBlockId(blockId: string): Promise<ProposerThreshold[] | undefined> {
    const records = await store.getByField('ProposerThreshold', 'blockId', blockId);
    return records.map((record) => ProposerThreshold.create(record as ProposerThresholdProps));
  }

  static create(record: ProposerThresholdProps): ProposerThreshold {
    assert(typeof record.id === 'string', 'id must be provided');
    let entity = new ProposerThreshold(record.id);
    Object.assign(entity, record);
    return entity;
  }
}
