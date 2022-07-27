// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type EventProps = Omit<Event, NonNullable<FunctionPropertyNames<Event>>>;

export class Event implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public index: number;

    public blockId?: string;

    public blockNumber: bigint;

    public timestamp?: Date;

    public section?: string;

    public method?: string;

    public docs?: string;

    public arguments?: string;

    public data?: string;

    public extrinsicId?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Event entity without an ID");
        await store.set('Event', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Event entity without an ID");
        await store.remove('Event', id.toString());
    }

    static async get(id:string): Promise<Event | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Event entity without an ID");
        const record = await store.get('Event', id.toString());
        if (record){
            return Event.create(record as EventProps);
        }else{
            return;
        }
    }


    static async getByBlockId(blockId: string): Promise<Event[] | undefined>{
      
      const records = await store.getByField('Event', 'blockId', blockId);
      return records.map(record => Event.create(record as EventProps));
      
    }

    static async getByBlockNumber(blockNumber: bigint): Promise<Event[] | undefined>{
      
      const records = await store.getByField('Event', 'blockNumber', blockNumber);
      return records.map(record => Event.create(record as EventProps));
      
    }

    static async getByExtrinsicId(extrinsicId: string): Promise<Event[] | undefined>{
      
      const records = await store.getByField('Event', 'extrinsicId', extrinsicId);
      return records.map(record => Event.create(record as EventProps));
      
    }


    static create(record: EventProps): Event {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new Event(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
