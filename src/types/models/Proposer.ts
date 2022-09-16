// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type ProposerProps = Omit<Proposer, NonNullable<FunctionPropertyNames<Proposer>>>;

export class Proposer implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public accountId: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Proposer entity without an ID");
        await store.set('Proposer', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Proposer entity without an ID");
        await store.remove('Proposer', id.toString());
    }

    static async get(id:string): Promise<Proposer | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Proposer entity without an ID");
        const record = await store.get('Proposer', id.toString());
        if (record){
            return Proposer.create(record as ProposerProps);
        }else{
            return;
        }
    }


    static async getByAccountId(accountId: string): Promise<Proposer[] | undefined>{
      
      const records = await store.getByField('Proposer', 'accountId', accountId);
      return records.map(record => Proposer.create(record as ProposerProps));
      
    }


    static create(record: ProposerProps): Proposer {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new Proposer(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
