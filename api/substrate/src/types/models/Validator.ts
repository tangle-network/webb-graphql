// Auto-generated , DO NOT EDIT
import { Entity, FunctionPropertyNames } from '@subql/types';
import assert from 'assert';

export type ValidatorProps = Omit<Validator, NonNullable<FunctionPropertyNames<Validator>>>;

export class Validator implements Entity {
  constructor(id: string) {
    this.id = id;
  }

  public id: string;

  public accountId: string;

  public authorityId: string;

  async save(): Promise<void> {
    let id = this.id;
    assert(id !== null, 'Cannot save Validator entity without an ID');
    await store.set('Validator', id.toString(), this);
  }
  static async remove(id: string): Promise<void> {
    assert(id !== null, 'Cannot remove Validator entity without an ID');
    await store.remove('Validator', id.toString());
  }

  static async get(id: string): Promise<Validator | undefined> {
    assert(id !== null && id !== undefined, 'Cannot get Validator entity without an ID');
    const record = await store.get('Validator', id.toString());
    if (record) {
      return this.create(record as ValidatorProps);
    } else {
      return;
    }
  }

  static async getByAccountId(accountId: string): Promise<Validator[] | undefined> {
    const records = await store.getByField('Validator', 'accountId', accountId);
    return records.map((record) => this.create(record as ValidatorProps));
  }

  static async getByAuthorityId(authorityId: string): Promise<Validator | undefined> {
    const record = await store.getOneByField('Validator', 'authorityId', authorityId);
    if (record) {
      return this.create(record as ValidatorProps);
    } else {
      return;
    }
  }

  static create(record: ValidatorProps): Validator {
    assert(typeof record.id === 'string', 'id must be provided');
    let entity = new this(record.id);
    Object.assign(entity, record);
    return entity;
  }
}
