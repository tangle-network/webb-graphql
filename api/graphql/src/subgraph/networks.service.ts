import { Injectable } from '@nestjs/common';
import * as process from 'process';
import { join } from 'path';
import * as fs from 'fs';
import { Subgraph } from './v-anchor.service';

type ConfigNetworkEntry = {
  subgraphUri: string;
  chainName: string;
};

@Injectable()
export class NetworksService {
  private readonly config: {
    networks: ConfigNetworkEntry[];
  };

  constructor() {
    const configPath = join(process.cwd(), 'networks.json');
    const config = fs.readFileSync(configPath).toString();

    this.config = JSON.parse(config);
  }

  get networks(): ConfigNetworkEntry[] {
    return this.config.networks;
  }

  get subgraphs(): Subgraph[] {
    return this.networks.map((network) => ({
      uri: network.subgraphUri,
      network: network.chainName,
    }));
  }

  getSubgraphConfig(name: string): Subgraph {
    const network = this.networks.find(
      (n) => n.chainName.toLowerCase() === name.toLowerCase(),
    );
    if (network) {
      return {
        uri: network.subgraphUri,
        network: network.chainName,
      };
    }
    throw new Error(`no network ${name}`);
  }
}
