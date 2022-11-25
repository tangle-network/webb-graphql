import { SubstrateEvent } from '@subql/types';

export type EventMetaData = {
  idx: number;
  blockNumber: string;
};

export class EventDecoder<T extends Record<string, any>> {
  private readonly _data: unknown;
  private readonly _key: unknown;
  readonly blockNumber: string;
  readonly id: number;
  constructor(public readonly event: SubstrateEvent) {
    this._data = event.event.data as unknown;
    this._key = event.event.method.toString() as unknown;
    this.blockNumber = event.block.block.header.number.toString();
    this.id = event.idx;
  }

  public is<Key extends keyof T>(key: Key): boolean {
    return this._key !== key;
  }

  public as<Key extends keyof T>(key: Key): T[Key] {
    if (this._key !== key) {
      throw new Error(`Event key ${this._key} does not match ${key as string}`);
    }
    return this._data as T[Key];
  }
  get metaData(): EventMetaData {
    return {
      idx: this.id,
      blockNumber: this.blockNumber,
    };
  }
}
