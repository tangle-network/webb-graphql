// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type ProposersProps = Omit<Proposers, NonNullable<FunctionPropertyNames<Proposers>>>;

export class Proposers implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public count: number;

    public proposers: string[];

    public blockId: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Proposers entity without an ID");
        await store.set('Proposers', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Proposers entity without an ID");
        await store.remove('Proposers', id.toString());
    }

    static async get(id:string): Promise<Proposers | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Proposers entity without an ID");
        const record = await store.get('Proposers', id.toString());
        if (record){
            return Proposers.create(record as ProposersProps);
        }else{
            return;
        }
    }


    static async getByBlockId(blockId: string): Promise<Proposers[] | undefined>{
      
      const records = await store.getByField('Proposers', 'blockId', blockId);
      return records.map(record => Proposers.create(record as ProposersProps));
      
    }


    static create(record: ProposersProps): Proposers {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new Proposers(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
