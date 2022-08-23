<h1 align="center">Webb SubQuery 🕸️ </h1>
<div align="center">
<a href="https://www.webb.tools/">
    <img alt="Webb Logo" src="./assets/webb-icon.svg" width="15%" height="30%" />
  </a>
  </div>
<p align="center">
    <strong>🚀 Webb SubQuery API</strong>
    <br />
    <sub> ⚠️ Beta Software ⚠️ </sub>
</p>

<div align="center" >

[![License Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square)](https://opensource.org/licenses/Apache-2.0)
[![Twitter](https://img.shields.io/twitter/follow/webbprotocol.svg?style=flat-square&label=Twitter&color=1DA1F2)](https://twitter.com/webbprotocol)
[![Telegram](https://img.shields.io/badge/Telegram-gray?logo=telegram)](https://t.me/webbprotocol)
[![Discord](https://img.shields.io/discord/833784453251596298.svg?style=flat-square&label=Discord&logo=discord)](https://discord.gg/cv8EfJu3Tn)

</div>

A SubQuery package defines which data The SubQuery will index from the Substrate blockchain, and how it will store it.

## Prerequisites

- [Node](https://nodejs.org/en/): A modern (e.g. the LTS version) installation of Node.
- [Docker](https://www.docker.com/)
- SubQuery Node (not required if you use `Docker`): `npm install -g @subql/node`

## Steps to start the project

**Note**: You have to run [Egg-net](https://github.com/webb-tools/egg-net) locally:

### Prepare [Egg-net](https://github.com/webb-tools/egg-net) locally

- Prepare the [prerequisites](https://github.com/webb-tools/egg-net#prerequisites) environment for Egg-net.
- Install and build the Egg-net (follow the instructions [here](https://github.com/webb-tools/egg-net#installation-)).
- Setup running 3 nodes with `--pruning=archive`

```shell
RUST_LOG=dkg=trace ./target/release/egg-standalone-node  --base-path /tmp/standalone/alice --alice   --pruning=archive --rpc-cors=all &
RUST_LOG=dkg=trace ./target/release/egg-standalone-node  --base-path /tmp/standalone/bob --bob --pruning=archive --rpc-cors=all &
RUST_LOG=dkg=trace ./target/release/egg-standalone-node --base-path /tmp/standalone/charlie --charlie --pruning=archive --rpc-cors=all
```

- If you get the error when starting those nodes, please make sure to remove the existing blockchain data using:

```shell
rm -rf /tmp/standalone/alice/chains/local_testnet/db/full/ &
rm -rf /tmp/standalone/bob/chains/local_testnet/db/full/ &
rm -rf /tmp/standalone/charlie/chains/local_testnet/db/full/ &
```

- Check the connection by using the [Polkadot UI app](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer).

### Setup [SubQuery](https://subquery.network/)

Then, install project dependencies and build the project:

- Run `yarn install` to install dependencies.
- Run `yarn codegen` to generate the project types.
- Run `yarn build` to build the project.

Then you can try one of the below approaches to start indexing:

- Using `docker` (recommended): Run `yarn start:docker`
- Without `docker` (follow these steps [here](https://university.subquery.network/run_publish/run.html#running-an-indexer-subql-node))

Finally, you can get the index data by using:

- If you use `Docker`, open `localhost:3000` and use the below `graphql` query to test.
- If you do not use `Docker`, you have to run the [Query Service](https://academy.subquery.network/run_publish/run.html#running-a-query-service-subql-query) via `subql-query` to have the playground running. Then you can open the playground at `localhost:3000` and use the below `graphql` query to test.

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

## Tips for development:

- Sometimes, when you make changes to the code, make sure to run `yarn build` to re-build the project, then your change will be applied in `docker`. Otherwise, you won't get the latest changes.
- If you got errors about the `Postgres` service in `docker–compose`, try to remove the `.data` folder or you can try to add the `--force-clean` in the `command` section of the `subquery-node` service in [`docker-compose` file](https://github.com/webb-tools/webb-subql/blob/trung-tin/init-connection-with-eggnet/docker-compose.yml#L37).
