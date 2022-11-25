// Auto-generated , DO NOT EDIT
import { Entity, FunctionPropertyNames } from '@subql/types';
import assert from 'assert';

import { HeartBeatCounter } from '../interfaces';

type SourceStateProps = Omit<SourceState, NonNullable<FunctionPropertyNames<SourceState>>>;

export class SourceState implements Entity {
  constructor(id: string) {
    this.id = id;
  }

  public id: string;

  public heartBeatCounters: HeartBeatCounter[];

  public numberOfSessions: number;

  async save(): Promise<void> {
    let id = this.id;
    assert(id !== null, 'Cannot save SourceState entity without an ID');
    await store.set('SourceState', id.toString(), this);
  }
  static async remove(id: string): Promise<void> {
    assert(id !== null, 'Cannot remove SourceState entity without an ID');
    await store.remove('SourceState', id.toString());
  }

  static async get(id: string): Promise<SourceState | undefined> {
    assert(id !== null && id !== undefined, 'Cannot get SourceState entity without an ID');
    const record = await store.get('SourceState', id.toString());
    if (record) {
      return SourceState.create(record as SourceStateProps);
    } else {
      return;
    }
  }

  static create(record: SourceStateProps): SourceState {
    assert(typeof record.id === 'string', 'id must be provided');
    let entity = new SourceState(record.id);
    Object.assign(entity, record);
    return entity;
  }
}
