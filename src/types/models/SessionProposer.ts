// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type SessionProposerProps = Omit<SessionProposer, NonNullable<FunctionPropertyNames<SessionProposer>>>;

export class SessionProposer implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public sessionId: string;

    public proposerId: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save SessionProposer entity without an ID");
        await store.set('SessionProposer', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove SessionProposer entity without an ID");
        await store.remove('SessionProposer', id.toString());
    }

    static async get(id:string): Promise<SessionProposer | undefined>{
        assert((id !== null && id !== undefined), "Cannot get SessionProposer entity without an ID");
        const record = await store.get('SessionProposer', id.toString());
        if (record){
            return this.create(record as SessionProposerProps);
        }else{
            return;
        }
    }


    static async getBySessionId(sessionId: string): Promise<SessionProposer[] | undefined>{
      
      const records = await store.getByField('SessionProposer', 'sessionId', sessionId);
      return records.map(record => this.create(record as SessionProposerProps));
      
    }

    static async getByProposerId(proposerId: string): Promise<SessionProposer[] | undefined>{
      
      const records = await store.getByField('SessionProposer', 'proposerId', proposerId);
      return records.map(record => this.create(record as SessionProposerProps));
      
    }


    static create(record: SessionProposerProps): SessionProposer {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
