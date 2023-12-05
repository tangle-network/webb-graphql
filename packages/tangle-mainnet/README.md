<div align="center">
<a href="https://www.webb.tools/">

![Webb Logo](./assets/webb_banner_light.png#gh-light-mode-only)
![Webb Logo](./assets/webb_banner_dark.png#gh-dark-mode-only)
</a>

</div>

# Webb SubQuery

<p align="left">
    <strong>🚀 SubQuery implementation for the Tangle Network 🚀</strong>
    <br />
</p>

[![License Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square)](https://opensource.org/licenses/Apache-2.0)
[![Twitter](https://img.shields.io/twitter/follow/webbprotocol.svg?style=flat-square&label=Twitter&color=1DA1F2)](https://twitter.com/webbprotocol)
[![Telegram](https://img.shields.io/badge/Telegram-gray?logo=telegram)](https://t.me/webbprotocol)
[![Discord](https://img.shields.io/discord/833784453251596298.svg?style=flat-square&label=Discord&logo=discord)](https://discord.gg/cv8EfJu3Tn)

<h2 id="start"> Getting Started  🎉 </h2>

Tangle Network is an DKG protocol that governs zk applications in a decentralized manner. This Subgraph ingests the data of the protocol and chain.

A [SubQuery](https://subquery.network/) package defines which data The SubQuery node will index data from the Substrate blockchain, store it, and make the data available in a graphQL API.

For additional information, please refer to the [Webb Official Documentation](https://docs.webb.tools/v1/getting-started/overview/) 📝. Have feedback on how to improve the webb-subql subgraph? Or have a specific question to ask? Checkout the [Webb Dapp Feedback Discussion](https://github.com/webb-tools/feedback/discussions/categories/webb-dapp-feedback) 💬.

## Prerequisites

This repository makes use of yarn, Docker, nodejs, and requires version node v16. To install node.js binaries, installers, and source tarballs, please visit https://nodejs.org/en/download/.

Once node.js is installed you may proceed to install [`yarn`](https://classic.yarnpkg.com/en/docs/install):

```bash
npm install --global yarn
```

Great! Now your **Node** environment is ready! 🚀🚀

To install Docker for various machine setups please visit the [Official Docker Documentation](https://docs.docker.com/engine/install/) for instructions. 🐳

If you are not making use of the Docker setup you will need to install the SubQuery Node CLI:

```
npm install -g @subql/node
```

Great! Now your environment is ready! 🚀🚀

## Quickstart ⚡

You can run a local SubQuery node with incredible ease and speed with Docker.

Install dependencies:

```
yarn install
```

Generate the project types:

```
yarn codegen
```

Build the project:

```
yarn build
```

Start the Docker container:

```
yarn start:docker
```

You should see you the following services starting up in the Docker container:

- postgres
- subquery-node
- graphql-engine

Once initialized the container will begin syncing and ingesting the data of the archive node.

You can now visit `localhost:3000` to view the graphQL playground and make queries to fetch data. For example,

```graphql
query {
  blocks(first: 10, orderBy: NUMBER_ASC) {
    nodes {
      id
      number
      hash
      timestamp
      parentHash
      specVersion
      stateRoot
      extrinsicsRoot
    }
  }
}
```

Great! You have officially setup, started, and queried data from the Tangle Standalone testnet using SubQuery!! 🚀🚀

## Development

### Running Tangle Node Locally

During the development process you may want to run your own local Tangle Network to test. To do so you first need to follow the [prerequisites](https://github.com/webb-tools/tangle#prerequisites) and [installation](https://github.com/webb-tools/tangle#installation-) instructions outlined on the Tangle repo.

You may also make use of the scripts to automate the setup further. Please refer to the `scripts` directory.

Once completed, to start the local test network run:

```shell
RUST_LOG=dkg=trace ./target/release/tangle-standalone --base-path /tmp/standalone/alice --alice   --pruning=archive --rpc-cors=all &
RUST_LOG=dkg=trace ./target/release/tangle-standalone --base-path /tmp/standalone/bob --bob --pruning=archive --rpc-cors=all &
RUST_LOG=dkg=trace ./target/release/tangle-standalone --base-path /tmp/standalone/charlie --charlie --pruning=archive --rpc-cors=all
```

**Note:** Notice the usage of `--pruning=archive` flag this is required in order for SubQuery node to index all the chains data.

Check the connection by using the [Polkadot UI app](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer).

Great! You have officially setup, and started a 3 node local test network!

#### Troubleshooting

If you get the error when starting the nodes, please make sure to remove the existing blockchain data using:

```shell
rm -rf /tmp/standalone/alice/chains/local_testnet/db/full/ &
rm -rf /tmp/standalone/bob/chains/local_testnet/db/full/ &
rm -rf /tmp/standalone/charlie/chains/local_testnet/db/full/
```

### Running SubQuery with Local Network

Now that you have your local testnet running we need to setup, and start a SubQuery node. We are going to follow the same steps mentioned in the Quickstart but before we do, we are going to update the `project.yaml` file to reflect the local networks `chainID` and `endpoint`. You will need update these fields under the `network` section.

To find the chainId of your local network, navigate to [Polkadot UI app](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer), > `Settings` > `Metadata`. The value you need is labelled `Genesis Hash`. Copy that value and update the `project.yaml` file. Next update the endpoint
to either your local Docker container or local machine.

```
network:
  # Use Tangle network endpoint for Arana Alpha testnet see: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fstats-dev.api.webb.tools%2Fpublic-ws#/settings/metadata
  chainId: "0x18c48b6ec39f7f3384c3b003853c40dd6f9b1501929889ae8429b9a259e7e74a"

  # using testnet archive node endpoint
  endpoint: "wss://stats-dev.api.webb.tools/public-ws"

  # if you are using docker, uncomment the below line
  # endpoint: "ws://host.docker.internal:9944"

  # if you are not using Docker and want to run locally, uncomment the below line
  # endpoint: "ws://127.0.0.1:9944"
```

Once updated proceed to start the SubQuery node:

Install dependencies:

```
yarn install
```

Generate the project types:

```
yarn codegen
```

Build the project:

```
yarn build
```

Start the Docker container:

```
yarn start:docker
```

Great! You have officially setup, and started your local SubQuery environment with a local test network.

#### Without Docker

If you do not wish to utilize Docker, you may proceed to follow these steps [here](https://academy.subquery.network/run_publish/run.html#running-an-indexer-subql-node).

If you do not use `Docker`, and want to start the graphQL playground you have to run the [Query Service](https://academy.subquery.network/run_publish/run.html#running-a-query-service-subql-query) via `subql-query` to have the playground running. Then you can open the playground at `localhost:3000` and use the below `graphql` query to test.

```graphql
query {
  blocks(first: 10, orderBy: NUMBER_ASC) {
    nodes {
      id
      number
      hash
      timestamp
      parentHash
      specVersion
      stateRoot
      extrinsicsRoot
    }
  }
}
```

### Tips for development:

Sometimes, when you make changes to the code, make sure to run `yarn build` to re-build the project, then your change will be applied in the Docker container. Otherwise, you won't get the latest changes.

If you get errors regarding the `Postgres` service in the Docker container, remove the `.data` folder or you can try to add the `--force-clean` in the `command` section of the `subquery-node` service in [`docker-compose`](https://github.com/webb-tools/webb-subql/blob/2f0f019436c1b1f95f1a00ab25f97b13d355d996/docker-compose.yml#L33) file.

## Deployment

You can deploy your SubQuery project to the decentralized network with the following steps:

1. Create a new SubQuery project
2. Run:
   - `yarn install`
   - `yarn codegen`
   - `yarn build`
3. Get a refresh token from the SubQuery project UI - see detail instructions [here](https://academy.subquery.network/run_publish/publish.html#prepare-your-subql-access-token).
4. Publish the project and copy the CID

```
subql publish
```

This will return the IPFS CID

```
Uploading SupQuery project to IPFS
SubQuery Project uploaded to IPFS: QmZ3q7YZSmhwBiot4PQCK3c7Z6HkteswN2Py58gkkZ8kNd  //CID
```

5. Copy the CID and input it in the managed project UI - see detail instructions [here](https://academy.subquery.network/run_publish/publish.html#deploy-your-subquery-project-in-the-managed-service).
6. Provide the archive node endpoint from the `project.yml` and click deploy

### Existing Deployments

You can query the existing deployed SubQuery instance at [GraphQL Playground](https://subquery-dev.webb.tools/graphql). This instance is deployed against the the [Arana Alpha Testnet](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fstats-dev.api.webb.tools%2Fpublic-ws#/explorer).

<h2 id="license"> License </h2>

Licensed under <a href="LICENSE">Apache 2.0 license</a>.

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in this crate by you, as defined in the Apache 2.0 license, shall be licensed as above, without any additional terms or conditions.
