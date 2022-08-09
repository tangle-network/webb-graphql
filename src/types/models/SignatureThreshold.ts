// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type SignatureThresholdProps = Omit<SignatureThreshold, NonNullable<FunctionPropertyNames<SignatureThreshold>>>;

export class SignatureThreshold implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public current?: number;

    public pending?: number;

    public next?: number;

    public blockId?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save SignatureThreshold entity without an ID");
        await store.set('SignatureThreshold', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove SignatureThreshold entity without an ID");
        await store.remove('SignatureThreshold', id.toString());
    }

    static async get(id:string): Promise<SignatureThreshold | undefined>{
        assert((id !== null && id !== undefined), "Cannot get SignatureThreshold entity without an ID");
        const record = await store.get('SignatureThreshold', id.toString());
        if (record){
            return SignatureThreshold.create(record as SignatureThresholdProps);
        }else{
            return;
        }
    }


    static async getByBlockId(blockId: string): Promise<SignatureThreshold[] | undefined>{
      
      const records = await store.getByField('SignatureThreshold', 'blockId', blockId);
      return records.map(record => SignatureThreshold.create(record as SignatureThresholdProps));
      
    }


    static create(record: SignatureThresholdProps): SignatureThreshold {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new SignatureThreshold(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
