// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type PublicKeyProps = Omit<PublicKey, NonNullable<FunctionPropertyNames<PublicKey>>>;

export class PublicKey implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public compressed?: string;

    public uncompressed?: string;

    public blockId?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save PublicKey entity without an ID");
        await store.set('PublicKey', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove PublicKey entity without an ID");
        await store.remove('PublicKey', id.toString());
    }

    static async get(id:string): Promise<PublicKey | undefined>{
        assert((id !== null && id !== undefined), "Cannot get PublicKey entity without an ID");
        const record = await store.get('PublicKey', id.toString());
        if (record){
            return PublicKey.create(record as PublicKeyProps);
        }else{
            return;
        }
    }


    static async getByBlockId(blockId: string): Promise<PublicKey[] | undefined>{
      
      const records = await store.getByField('PublicKey', 'blockId', blockId);
      return records.map(record => PublicKey.create(record as PublicKeyProps));
      
    }


    static create(record: PublicKeyProps): PublicKey {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new PublicKey(record.id);
        Object.assign(entity,record);
        return entity;
    }
}