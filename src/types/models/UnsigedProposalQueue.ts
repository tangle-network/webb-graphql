// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type UnsigedProposalQueueProps = Omit<UnsigedProposalQueue, NonNullable<FunctionPropertyNames<UnsigedProposalQueue>>>;

export class UnsigedProposalQueue implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public proposalsId: string[];

    public blockId?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save UnsigedProposalQueue entity without an ID");
        await store.set('UnsigedProposalQueue', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove UnsigedProposalQueue entity without an ID");
        await store.remove('UnsigedProposalQueue', id.toString());
    }

    static async get(id:string): Promise<UnsigedProposalQueue | undefined>{
        assert((id !== null && id !== undefined), "Cannot get UnsigedProposalQueue entity without an ID");
        const record = await store.get('UnsigedProposalQueue', id.toString());
        if (record){
            return UnsigedProposalQueue.create(record as UnsigedProposalQueueProps);
        }else{
            return;
        }
    }


    static async getByProposalsId(proposalsId: string): Promise<UnsigedProposalQueue[] | undefined>{
      
      const records = await store.getByField('UnsigedProposalQueue', 'proposalsId', proposalsId);
      return records.map(record => UnsigedProposalQueue.create(record as UnsigedProposalQueueProps));
      
    }

    static async getByBlockId(blockId: string): Promise<UnsigedProposalQueue[] | undefined>{
      
      const records = await store.getByField('UnsigedProposalQueue', 'blockId', blockId);
      return records.map(record => UnsigedProposalQueue.create(record as UnsigedProposalQueueProps));
      
    }


    static create(record: UnsigedProposalQueueProps): UnsigedProposalQueue {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new UnsigedProposalQueue(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
