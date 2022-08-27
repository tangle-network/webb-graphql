import { SubstrateEvent } from "@subql/types"

export class EventDecoder<T extends Record<string, any>> {
  private readonly _data: unknown
  private readonly _key: unknown

  constructor(public readonly event: SubstrateEvent) {
    this._data = event.event.data.toHuman() as unknown
    this._key = event.event.method.toString() as unknown
  }

  public is<Key extends keyof T>(key: Key): boolean {
    return this._key !== key
  }

  public as<Key extends keyof T>(key: Key): T[Key] {
    if (this._key !== key) {
      throw new Error(`Event key ${this._key} does not match ${key as string}`)
    }
    return this._data as T[Key]
  }
}
