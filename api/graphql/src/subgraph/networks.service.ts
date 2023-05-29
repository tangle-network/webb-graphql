import { Injectable } from '@nestjs/common';
import * as process from 'process';
import { join } from 'path';
import * as fs from 'fs';

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

  getSubgraphConfig(name: string) {
    const network = this.networks.find(
      (n) => n.chainName.toLowerCase() === name.toLowerCase(),
    );
    if (network) {
      return {
        uri: network.subgraphUri,
      };
    }
    throw new Error(`no network ${name}`);
  }
}
