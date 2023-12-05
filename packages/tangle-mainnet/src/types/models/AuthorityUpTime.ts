// Auto-generated , DO NOT EDIT
import { Entity, FunctionPropertyNames } from '@subql/types';
import assert from 'assert';

export type AuthorityUpTimeProps = Omit<AuthorityUpTime, NonNullable<FunctionPropertyNames<AuthorityUpTime>> | '_name'>;

export class AuthorityUpTime implements Entity {
  constructor(id: string) {
    this.id = id;
  }

  public id: string;

  public authorityId: string;

  public uptime: number;

  public blockNumber: number;

  public sessionNumber: number;

  public totalHeartbeats: number;

  get _name(): string {
    return 'AuthorityUpTime';
  }

  async save(): Promise<void> {
    let id = this.id;
    assert(id !== null, 'Cannot save AuthorityUpTime entity without an ID');
    await store.set('AuthorityUpTime', id.toString(), this);
  }
  static async remove(id: string): Promise<void> {
    assert(id !== null, 'Cannot remove AuthorityUpTime entity without an ID');
    await store.remove('AuthorityUpTime', id.toString());
  }

  static async get(id: string): Promise<AuthorityUpTime | undefined> {
    assert(id !== null && id !== undefined, 'Cannot get AuthorityUpTime entity without an ID');
    const record = await store.get('AuthorityUpTime', id.toString());
    if (record) {
      return this.create(record as AuthorityUpTimeProps);
    } else {
      return;
    }
  }

  static create(record: AuthorityUpTimeProps): AuthorityUpTime {
    assert(typeof record.id === 'string', 'id must be provided');
    let entity = new this(record.id);
    Object.assign(entity, record);
    return entity;
  }
}
