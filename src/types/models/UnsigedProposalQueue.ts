// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type UnSigedProposalQueueProps = Omit<UnSigedProposalQueue, NonNullable<FunctionPropertyNames<UnSigedProposalQueue>>>;

export class UnSigedProposalQueue implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public blockId?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save UnSigedProposalQueue entity without an ID");
        await store.set('UnSigedProposalQueue', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove UnSigedProposalQueue entity without an ID");
        await store.remove('UnSigedProposalQueue', id.toString());
    }

    static async get(id:string): Promise<UnSigedProposalQueue | undefined>{
        assert((id !== null && id !== undefined), "Cannot get UnSigedProposalQueue entity without an ID");
        const record = await store.get('UnSigedProposalQueue', id.toString());
        if (record){
            return UnSigedProposalQueue.create(record as UnSigedProposalQueueProps);
        }else{
            return;
        }
    }


    static async getByBlockId(blockId: string): Promise<UnSigedProposalQueue[] | undefined>{
      
      const records = await store.getByField('UnSigedProposalQueue', 'blockId', blockId);
      return records.map(record => UnSigedProposalQueue.create(record as UnSigedProposalQueueProps));
      
    }


    static create(record: UnSigedProposalQueueProps): UnSigedProposalQueue {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new UnSigedProposalQueue(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
