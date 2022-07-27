// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';

import {
    Timeline,
} from '../interfaces'




type ReferendumProps = Omit<Referendum, NonNullable<FunctionPropertyNames<Referendum>>>;

export class Referendum implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public refIndex: number;

    public threshold?: string;

    public timeline?: Timeline[];

    public executed?: boolean;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Referendum entity without an ID");
        await store.set('Referendum', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Referendum entity without an ID");
        await store.remove('Referendum', id.toString());
    }

    static async get(id:string): Promise<Referendum | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Referendum entity without an ID");
        const record = await store.get('Referendum', id.toString());
        if (record){
            return Referendum.create(record as ReferendumProps);
        }else{
            return;
        }
    }


    static async getByRefIndex(refIndex: number): Promise<Referendum | undefined>{
      
      const record = await store.getOneByField('Referendum', 'refIndex', refIndex);
      if (record){
          return Referendum.create(record as ReferendumProps);
      }else{
          return;
      }
      
    }


    static create(record: ReferendumProps): Referendum {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new Referendum(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
