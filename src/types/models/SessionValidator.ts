// Auto-generated , DO NOT EDIT
import { Entity, FunctionPropertyNames } from '@subql/types';
import assert from 'assert';

type SessionValidatorProps = Omit<SessionValidator, NonNullable<FunctionPropertyNames<SessionValidator>>>;

export class SessionValidator implements Entity {
  constructor(id: string) {
    this.id = id;
  }

  public id: string;

  public sessionId: string;

  public validatorId: string;

  public isBest: boolean;

  public isNext: boolean;

  public isNextBest: boolean;

  public bestOrder: number;

  public nextBestOrder: number;

  public reputation: number;

  public uptime: number;

  public blockNumber: bigint;

  async save(): Promise<void> {
    let id = this.id;
    assert(id !== null, 'Cannot save SessionValidator entity without an ID');
    await store.set('SessionValidator', id.toString(), this);
  }
  static async remove(id: string): Promise<void> {
    assert(id !== null, 'Cannot remove SessionValidator entity without an ID');
    await store.remove('SessionValidator', id.toString());
  }

  static async get(id: string): Promise<SessionValidator | undefined> {
    assert(id !== null && id !== undefined, 'Cannot get SessionValidator entity without an ID');
    const record = await store.get('SessionValidator', id.toString());
    if (record) {
      return SessionValidator.create(record as SessionValidatorProps);
    } else {
      return;
    }
  }

  static async getBySessionId(sessionId: string): Promise<SessionValidator[] | undefined> {
    const records = await store.getByField('SessionValidator', 'sessionId', sessionId);
    return records.map((record) => SessionValidator.create(record as SessionValidatorProps));
  }

  static async getByValidatorId(validatorId: string): Promise<SessionValidator[] | undefined> {
    const records = await store.getByField('SessionValidator', 'validatorId', validatorId);
    return records.map((record) => SessionValidator.create(record as SessionValidatorProps));
  }

  static create(record: SessionValidatorProps): SessionValidator {
    assert(typeof record.id === 'string', 'id must be provided');
    let entity = new SessionValidator(record.id);
    Object.assign(entity, record);
    return entity;
  }
}
