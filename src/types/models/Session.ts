// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type SessionProps = Omit<Session, NonNullable<FunctionPropertyNames<Session>>>;

export class Session implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public index: number;

    public keygenThresholdId: string;

    public proposerThresholdId: string;

    public signatureThresholdId: string;

    public authoritiesId: string[];

    public bestAuthorizesId: string[];

    public publicKeyId?: string;

    public nextPublicKeyId?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Session entity without an ID");
        await store.set('Session', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Session entity without an ID");
        await store.remove('Session', id.toString());
    }

    static async get(id:string): Promise<Session | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Session entity without an ID");
        const record = await store.get('Session', id.toString());
        if (record){
            return Session.create(record as SessionProps);
        }else{
            return;
        }
    }


    static async getByKeygenThresholdId(keygenThresholdId: string): Promise<Session[] | undefined>{
      
      const records = await store.getByField('Session', 'keygenThresholdId', keygenThresholdId);
      return records.map(record => Session.create(record as SessionProps));
      
    }

    static async getByProposerThresholdId(proposerThresholdId: string): Promise<Session[] | undefined>{
      
      const records = await store.getByField('Session', 'proposerThresholdId', proposerThresholdId);
      return records.map(record => Session.create(record as SessionProps));
      
    }

    static async getBySignatureThresholdId(signatureThresholdId: string): Promise<Session[] | undefined>{
      
      const records = await store.getByField('Session', 'signatureThresholdId', signatureThresholdId);
      return records.map(record => Session.create(record as SessionProps));
      
    }

    static async getByAuthoritiesId(authoritiesId: string): Promise<Session[] | undefined>{
      
      const records = await store.getByField('Session', 'authoritiesId', authoritiesId);
      return records.map(record => Session.create(record as SessionProps));
      
    }

    static async getByBestAuthorizesId(bestAuthorizesId: string): Promise<Session[] | undefined>{
      
      const records = await store.getByField('Session', 'bestAuthorizesId', bestAuthorizesId);
      return records.map(record => Session.create(record as SessionProps));
      
    }

    static async getByPublicKeyId(publicKeyId: string): Promise<Session[] | undefined>{
      
      const records = await store.getByField('Session', 'publicKeyId', publicKeyId);
      return records.map(record => Session.create(record as SessionProps));
      
    }

    static async getByNextPublicKeyId(nextPublicKeyId: string): Promise<Session[] | undefined>{
      
      const records = await store.getByField('Session', 'nextPublicKeyId', nextPublicKeyId);
      return records.map(record => Session.create(record as SessionProps));
      
    }


    static create(record: SessionProps): Session {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new Session(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
