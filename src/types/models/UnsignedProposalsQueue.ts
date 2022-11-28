// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type UnsignedProposalsQueueProps = Omit<UnsignedProposalsQueue, NonNullable<FunctionPropertyNames<UnsignedProposalsQueue>>>;

export class UnsignedProposalsQueue implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public blockId: string;

    public blockNumber: number;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save UnsignedProposalsQueue entity without an ID");
        await store.set('UnsignedProposalsQueue', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove UnsignedProposalsQueue entity without an ID");
        await store.remove('UnsignedProposalsQueue', id.toString());
    }

    static async get(id:string): Promise<UnsignedProposalsQueue | undefined>{
        assert((id !== null && id !== undefined), "Cannot get UnsignedProposalsQueue entity without an ID");
        const record = await store.get('UnsignedProposalsQueue', id.toString());
        if (record){
            return this.create(record as UnsignedProposalsQueueProps);
        }else{
            return;
        }
    }


    static async getByBlockId(blockId: string): Promise<UnsignedProposalsQueue[] | undefined>{
      
      const records = await store.getByField('UnsignedProposalsQueue', 'blockId', blockId);
      return records.map(record => this.create(record as UnsignedProposalsQueueProps));
      
    }


    static create(record: UnsignedProposalsQueueProps): UnsignedProposalsQueue {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
