// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type ExtrinsicProps = Omit<Extrinsic, NonNullable<FunctionPropertyNames<Extrinsic>>| '_name'>;

export class Extrinsic implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public hash: string;

    public blockId: string;

    public blockNumber: bigint;

    public isSigned?: boolean;

    public signerId?: string;

    public arguments?: string;

    public module?: string;

    public method?: string;

    public index: number;

    public isSuccess?: boolean;


    get _name(): string {
        return 'Extrinsic';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Extrinsic entity without an ID");
        await store.set('Extrinsic', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Extrinsic entity without an ID");
        await store.remove('Extrinsic', id.toString());
    }

    static async get(id:string): Promise<Extrinsic | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Extrinsic entity without an ID");
        const record = await store.get('Extrinsic', id.toString());
        if (record){
            return this.create(record as ExtrinsicProps);
        }else{
            return;
        }
    }


    static async getByBlockId(blockId: string): Promise<Extrinsic[] | undefined>{
      
      const records = await store.getByField('Extrinsic', 'blockId', blockId);
      return records.map(record => this.create(record as ExtrinsicProps));
      
    }

    static async getByBlockNumber(blockNumber: bigint): Promise<Extrinsic[] | undefined>{
      
      const records = await store.getByField('Extrinsic', 'blockNumber', blockNumber);
      return records.map(record => this.create(record as ExtrinsicProps));
      
    }

    static async getBySignerId(signerId: string): Promise<Extrinsic[] | undefined>{
      
      const records = await store.getByField('Extrinsic', 'signerId', signerId);
      return records.map(record => this.create(record as ExtrinsicProps));
      
    }


    static create(record: ExtrinsicProps): Extrinsic {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
