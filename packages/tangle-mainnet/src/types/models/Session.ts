// Auto-generated , DO NOT EDIT
import { Entity, FunctionPropertyNames } from '@subql/types';
import assert from 'assert';

export type SessionProps = Omit<Session, NonNullable<FunctionPropertyNames<Session>> | '_name'>;

export class Session implements Entity {
  constructor(id: string) {
    this.id = id;
  }

  public id: string;

  public blockNumber: number;

  public blockId: string;

  get _name(): string {
    return 'Session';
  }

  async save(): Promise<void> {
    let id = this.id;
    assert(id !== null, 'Cannot save Session entity without an ID');
    await store.set('Session', id.toString(), this);
  }
  static async remove(id: string): Promise<void> {
    assert(id !== null, 'Cannot remove Session entity without an ID');
    await store.remove('Session', id.toString());
  }

  static async get(id: string): Promise<Session | undefined> {
    assert(id !== null && id !== undefined, 'Cannot get Session entity without an ID');
    const record = await store.get('Session', id.toString());
    if (record) {
      return this.create(record as SessionProps);
    } else {
      return;
    }
  }

  static async getByBlockId(blockId: string): Promise<Session[] | undefined> {
    const records = await store.getByField('Session', 'blockId', blockId);
    return records.map((record) => this.create(record as SessionProps));
  }

  static create(record: SessionProps): Session {
    assert(typeof record.id === 'string', 'id must be provided');
    let entity = new this(record.id);
    Object.assign(entity, record);
    return entity;
  }
}
