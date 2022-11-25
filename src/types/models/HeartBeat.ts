// Auto-generated , DO NOT EDIT
import { Entity, FunctionPropertyNames } from '@subql/types';
import assert from 'assert';

type HeartBeatProps = Omit<HeartBeat, NonNullable<FunctionPropertyNames<HeartBeat>>>;

export class HeartBeat implements Entity {
  constructor(id: string) {
    this.id = id;
  }

  public id: string;

  public blockNumber: bigint;

  public sessionId: string;

  public accountId: string;

  async save(): Promise<void> {
    let id = this.id;
    assert(id !== null, 'Cannot save HeartBeat entity without an ID');
    await store.set('HeartBeat', id.toString(), this);
  }
  static async remove(id: string): Promise<void> {
    assert(id !== null, 'Cannot remove HeartBeat entity without an ID');
    await store.remove('HeartBeat', id.toString());
  }

  static async get(id: string): Promise<HeartBeat | undefined> {
    assert(id !== null && id !== undefined, 'Cannot get HeartBeat entity without an ID');
    const record = await store.get('HeartBeat', id.toString());
    if (record) {
      return HeartBeat.create(record as HeartBeatProps);
    } else {
      return;
    }
  }

  static async getBySessionId(sessionId: string): Promise<HeartBeat[] | undefined> {
    const records = await store.getByField('HeartBeat', 'sessionId', sessionId);
    return records.map((record) => HeartBeat.create(record as HeartBeatProps));
  }

  static async getByAccountId(accountId: string): Promise<HeartBeat[] | undefined> {
    const records = await store.getByField('HeartBeat', 'accountId', accountId);
    return records.map((record) => HeartBeat.create(record as HeartBeatProps));
  }

  static create(record: HeartBeatProps): HeartBeat {
    assert(typeof record.id === 'string', 'id must be provided');
    let entity = new HeartBeat(record.id);
    Object.assign(entity, record);
    return entity;
  }
}
