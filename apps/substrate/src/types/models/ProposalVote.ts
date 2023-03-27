// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';



import {
    VoteType,
} from '../enums'


export type ProposalVoteProps = Omit<ProposalVote, NonNullable<FunctionPropertyNames<ProposalVote>>>;

export class ProposalVote implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public voteStatus: VoteType;

    public voterId: string;

    public proposalId: string;

    public blockNumber: bigint;

    public blockId: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save ProposalVote entity without an ID");
        await store.set('ProposalVote', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove ProposalVote entity without an ID");
        await store.remove('ProposalVote', id.toString());
    }

    static async get(id:string): Promise<ProposalVote | undefined>{
        assert((id !== null && id !== undefined), "Cannot get ProposalVote entity without an ID");
        const record = await store.get('ProposalVote', id.toString());
        if (record){
            return this.create(record as ProposalVoteProps);
        }else{
            return;
        }
    }


    static async getByVoterId(voterId: string): Promise<ProposalVote[] | undefined>{
      
      const records = await store.getByField('ProposalVote', 'voterId', voterId);
      return records.map(record => this.create(record as ProposalVoteProps));
      
    }

    static async getByProposalId(proposalId: string): Promise<ProposalVote[] | undefined>{
      
      const records = await store.getByField('ProposalVote', 'proposalId', proposalId);
      return records.map(record => this.create(record as ProposalVoteProps));
      
    }

    static async getByBlockId(blockId: string): Promise<ProposalVote[] | undefined>{
      
      const records = await store.getByField('ProposalVote', 'blockId', blockId);
      return records.map(record => this.create(record as ProposalVoteProps));
      
    }


    static create(record: ProposalVoteProps): ProposalVote {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
