import { Injectable, OnModuleDestroy } from '@nestjs/common';
import * as process from 'process';
import { join } from 'path';
import * as fs from 'fs';
import { Subgraph } from './v-anchor.service';
import { ethers } from 'ethers';
import { formatUnits } from 'ethers';
type ConfigNetworkEntry = {
  subgraphUri: string;
  chainName: string;
  rpc: string;
};

@Injectable()
export class NetworksService implements OnModuleDestroy {
  private readonly config: {
    networks: ConfigNetworkEntry[];
  };

  private providerMap: Record<string, ethers.JsonRpcProvider> = {};

  constructor() {
    const configPath = join(process.cwd(), 'networks.json');
    const config = fs.readFileSync(configPath).toString();

    this.config = JSON.parse(config);
  }

  onModuleDestroy() {
    Object.values(this.providerMap).forEach((e) => {
      e.destroy();
    });
    this.providerMap = {};
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

  private getProvider(networkName: string): ethers.JsonRpcProvider {
    const network = this.networks.find((n) => n.chainName === networkName);
    if (!network) {
      throw new Error(`no network found for ${name}`);
    }
    if (this.providerMap[networkName]) {
      return this.providerMap[networkName];
    }

    const provider = new ethers.JsonRpcProvider(network.rpc);
    this.providerMap[networkName] = provider;
    return provider;
  }
  async getNativeBalance(name: string, address: string): Promise<string> {
    const provider = this.getProvider(name);
    const balance = await provider.getBalance(address);
    return formatUnits(balance);
  }
}
