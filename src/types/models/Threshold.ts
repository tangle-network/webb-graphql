// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';



import {
    ThresholdVariant,
} from '../enums'


type ThresholdProps = Omit<Threshold, NonNullable<FunctionPropertyNames<Threshold>>>;

export class Threshold implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public next: number;

    public current: number;

    public pending: number;

    public sessionId: string;

    public variant: ThresholdVariant;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Threshold entity without an ID");
        await store.set('Threshold', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Threshold entity without an ID");
        await store.remove('Threshold', id.toString());
    }

    static async get(id:string): Promise<Threshold | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Threshold entity without an ID");
        const record = await store.get('Threshold', id.toString());
        if (record){
            return Threshold.create(record as ThresholdProps);
        }else{
            return;
        }
    }


    static async getBySessionId(sessionId: string): Promise<Threshold[] | undefined>{
      
      const records = await store.getByField('Threshold', 'sessionId', sessionId);
      return records.map(record => Threshold.create(record as ThresholdProps));
      
    }


    static create(record: ThresholdProps): Threshold {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new Threshold(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
