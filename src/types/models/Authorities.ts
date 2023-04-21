// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type AuthoritiesProps = Omit<Authorities, NonNullable<FunctionPropertyNames<Authorities>>| '_name'>;

export class Authorities implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public current?: string[];

    public next?: string[];

    public blockId: string;


    get _name(): string {
        return 'Authorities';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Authorities entity without an ID");
        await store.set('Authorities', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Authorities entity without an ID");
        await store.remove('Authorities', id.toString());
    }

    static async get(id:string): Promise<Authorities | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Authorities entity without an ID");
        const record = await store.get('Authorities', id.toString());
        if (record){
            return this.create(record as AuthoritiesProps);
        }else{
            return;
        }
    }


    static async getByBlockId(blockId: string): Promise<Authorities[] | undefined>{
      
      const records = await store.getByField('Authorities', 'blockId', blockId);
      return records.map(record => this.create(record as AuthoritiesProps));
      
    }


    static create(record: AuthoritiesProps): Authorities {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
