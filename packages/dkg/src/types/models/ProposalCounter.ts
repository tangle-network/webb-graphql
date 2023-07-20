// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';

import {
    ProposalTypeCount,

    ProposalStatusCount,
} from '../interfaces'




export type ProposalCounterProps = Omit<ProposalCounter, NonNullable<FunctionPropertyNames<ProposalCounter>>| '_name'>;

export class ProposalCounter implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public signedProposalsCount: number;

    public unSignedProposalsCount: number;

    public signedProposalsMap?: ProposalTypeCount[];

    public unSignedProposalsMap?: ProposalTypeCount[];

    public statusMap?: ProposalStatusCount[];

    public blockNumber: number;

    public blockId: string;


    get _name(): string {
        return 'ProposalCounter';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save ProposalCounter entity without an ID");
        await store.set('ProposalCounter', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove ProposalCounter entity without an ID");
        await store.remove('ProposalCounter', id.toString());
    }

    static async get(id:string): Promise<ProposalCounter | undefined>{
        assert((id !== null && id !== undefined), "Cannot get ProposalCounter entity without an ID");
        const record = await store.get('ProposalCounter', id.toString());
        if (record){
            return this.create(record as ProposalCounterProps);
        }else{
            return;
        }
    }


    static async getByBlockId(blockId: string): Promise<ProposalCounter[] | undefined>{
      
      const records = await store.getByField('ProposalCounter', 'blockId', blockId);
      return records.map(record => this.create(record as ProposalCounterProps));
      
    }


    static create(record: ProposalCounterProps): ProposalCounter {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
