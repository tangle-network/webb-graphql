// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type AuthoriesProps = Omit<Authories, NonNullable<FunctionPropertyNames<Authories>>>;

export class Authories implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public currentAuthorities?: string[];

    public pendingAuthorities?: string[];

    public nextAuthorities?: string[];

    public blockId?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Authories entity without an ID");
        await store.set('Authories', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Authories entity without an ID");
        await store.remove('Authories', id.toString());
    }

    static async get(id:string): Promise<Authories | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Authories entity without an ID");
        const record = await store.get('Authories', id.toString());
        if (record){
            return Authories.create(record as AuthoriesProps);
        }else{
            return;
        }
    }


    static async getByBlockId(blockId: string): Promise<Authories[] | undefined>{
      
      const records = await store.getByField('Authories', 'blockId', blockId);
      return records.map(record => Authories.create(record as AuthoriesProps));
      
    }


    static create(record: AuthoriesProps): Authories {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new Authories(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
