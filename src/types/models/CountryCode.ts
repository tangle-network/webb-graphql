// Auto-generated , DO NOT EDIT
import { Entity, FunctionPropertyNames } from '@subql/types';
import assert from 'assert';

type CountryCodeProps = Omit<CountryCode, NonNullable<FunctionPropertyNames<CountryCode>>>;

export class CountryCode implements Entity {
  constructor(id: string) {
    this.id = id;
  }

  public id: string;

  public code: string;

  async save(): Promise<void> {
    let id = this.id;
    assert(id !== null, 'Cannot save CountryCode entity without an ID');
    await store.set('CountryCode', id.toString(), this);
  }
  static async remove(id: string): Promise<void> {
    assert(id !== null, 'Cannot remove CountryCode entity without an ID');
    await store.remove('CountryCode', id.toString());
  }

  static async get(id: string): Promise<CountryCode | undefined> {
    assert(id !== null && id !== undefined, 'Cannot get CountryCode entity without an ID');
    const record = await store.get('CountryCode', id.toString());
    if (record) {
      return CountryCode.create(record as CountryCodeProps);
    } else {
      return;
    }
  }

  static async getByCode(code: string): Promise<CountryCode[] | undefined> {
    const records = await store.getByField('CountryCode', 'code', code);
    return records.map((record) => CountryCode.create(record as CountryCodeProps));
  }

  static create(record: CountryCodeProps): CountryCode {
    assert(typeof record.id === 'string', 'id must be provided');
    let entity = new CountryCode(record.id);
    Object.assign(entity, record);
    return entity;
  }
}
