// Auto-generated , DO NOT EDIT
import { Entity, FunctionPropertyNames } from '@subql/types';
import assert from 'assert';

type KeygenThresholdProps = Omit<KeygenThreshold, NonNullable<FunctionPropertyNames<KeygenThreshold>>>;

export class KeygenThreshold implements Entity {
  constructor(id: string) {
    this.id = id;
  }

  public id: string;

  public current?: number;

  public pending?: number;

  public next?: number;

  public blockId: string;

  async save(): Promise<void> {
    let id = this.id;
    assert(id !== null, 'Cannot save KeygenThreshold entity without an ID');
    await store.set('KeygenThreshold', id.toString(), this);
  }
  static async remove(id: string): Promise<void> {
    assert(id !== null, 'Cannot remove KeygenThreshold entity without an ID');
    await store.remove('KeygenThreshold', id.toString());
  }

  static async get(id: string): Promise<KeygenThreshold | undefined> {
    assert(id !== null && id !== undefined, 'Cannot get KeygenThreshold entity without an ID');
    const record = await store.get('KeygenThreshold', id.toString());
    if (record) {
      return KeygenThreshold.create(record as KeygenThresholdProps);
    } else {
      return;
    }
  }

  static async getByBlockId(blockId: string): Promise<KeygenThreshold[] | undefined> {
    const records = await store.getByField('KeygenThreshold', 'blockId', blockId);
    return records.map((record) => KeygenThreshold.create(record as KeygenThresholdProps));
  }

  static create(record: KeygenThresholdProps): KeygenThreshold {
    assert(typeof record.id === 'string', 'id must be provided');
    let entity = new KeygenThreshold(record.id);
    Object.assign(entity, record);
    return entity;
  }
}
