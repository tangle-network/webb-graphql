// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';



import {
    ProposalType,
} from '../enums'


type ProposalItemProps = Omit<ProposalItem, NonNullable<FunctionPropertyNames<ProposalItem>>>;

export class ProposalItem implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public proposalId: string;

    public type: ProposalType;

    public data: string;

    public signature?: string;

    public removed?: boolean;

    public blockId?: string;

    public unsignedQueueId?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save ProposalItem entity without an ID");
        await store.set('ProposalItem', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove ProposalItem entity without an ID");
        await store.remove('ProposalItem', id.toString());
    }

    static async get(id:string): Promise<ProposalItem | undefined>{
        assert((id !== null && id !== undefined), "Cannot get ProposalItem entity without an ID");
        const record = await store.get('ProposalItem', id.toString());
        if (record){
            return ProposalItem.create(record as ProposalItemProps);
        }else{
            return;
        }
    }


    static async getByProposalId(proposalId: string): Promise<ProposalItem[] | undefined>{
      
      const records = await store.getByField('ProposalItem', 'proposalId', proposalId);
      return records.map(record => ProposalItem.create(record as ProposalItemProps));
      
    }

    static async getByBlockId(blockId: string): Promise<ProposalItem[] | undefined>{
      
      const records = await store.getByField('ProposalItem', 'blockId', blockId);
      return records.map(record => ProposalItem.create(record as ProposalItemProps));
      
    }

    static async getByUnsignedQueueId(unsignedQueueId: string): Promise<ProposalItem[] | undefined>{
      
      const records = await store.getByField('ProposalItem', 'unsignedQueueId', unsignedQueueId);
      return records.map(record => ProposalItem.create(record as ProposalItemProps));
      
    }


    static create(record: ProposalItemProps): ProposalItem {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new ProposalItem(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
