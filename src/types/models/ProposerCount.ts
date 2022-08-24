// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type ProposerCountProps = Omit<ProposerCount, NonNullable<FunctionPropertyNames<ProposerCount>>>;

export class ProposerCount implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public value?: number;

    public blockId?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save ProposerCount entity without an ID");
        await store.set('ProposerCount', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove ProposerCount entity without an ID");
        await store.remove('ProposerCount', id.toString());
    }

    static async get(id:string): Promise<ProposerCount | undefined>{
        assert((id !== null && id !== undefined), "Cannot get ProposerCount entity without an ID");
        const record = await store.get('ProposerCount', id.toString());
        if (record){
            return ProposerCount.create(record as ProposerCountProps);
        }else{
            return;
        }
    }


    static async getByBlockId(blockId: string): Promise<ProposerCount[] | undefined>{
      
      const records = await store.getByField('ProposerCount', 'blockId', blockId);
      return records.map(record => ProposerCount.create(record as ProposerCountProps));
      
    }


    static create(record: ProposerCountProps): ProposerCount {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new ProposerCount(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
