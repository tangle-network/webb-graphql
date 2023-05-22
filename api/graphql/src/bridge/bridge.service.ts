import {ConsoleLogger, Injectable} from '@nestjs/common';
import { Bridge } from '../../gql/graphql';
import {VAnchorService} from "../subgraph/v-anchor.service";

@Injectable()
export class BridgeService {
  private logger =new ConsoleLogger('BridgeService')
  constructor(private readonly vAnchorService:VAnchorService) {
  }
  async  getBridges(): Promise<Bridge> {
    const vAnchors = await this.vAnchorService.fetchAnchors();
    this.logger.log('vAnchors' , JSON.stringify(vAnchors , null ,2))
    return  vAnchors as any;
  }
}
