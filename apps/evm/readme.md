<div align="center">
<a href="https://www.webb.tools/">

![Webb Logo](../../assets/webb_banner_light.png#gh-light-mode-only)
![Webb Logo](../../assets/webb_banner_dark.png#gh-dark-mode-only)
</a>

</div>

# Webb Sub Graph

<p align="left">
    <strong>🚀 <a target="_blank" href="https://thegraph.com/">Thegraph</a> Subgraph implementation for the Webb protocol using 🚀</strong> 
    <br />
</p> 

[![License Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square)](https://opensource.org/licenses/Apache-2.0)
[![Twitter](https://img.shields.io/twitter/follow/webbprotocol.svg?style=flat-square&label=Twitter&color=1DA1F2)](https://twitter.com/webbprotocol)
[![Telegram](https://img.shields.io/badge/Telegram-gray?logo=telegram)](https://t.me/webbprotocol)
[![Discord](https://img.shields.io/discord/833784453251596298.svg?style=flat-square&label=Discord&logo=discord)](https://discord.gg/cv8EfJu3Tn)

<h2 id="start"> Getting Started  🎉 </h2>

TODO
## Prerequisites

This repository makes use of yarn, Docker, nodejs, and requires version node v16. To install node.js binaries, installers, and source tarballs, please visit https://nodejs.org/en/download/.

Once node.js is installed you may proceed to install [`yarn`](https://classic.yarnpkg.com/en/docs/install):

```bash
npm install --global yarn
```

Great! Now your **Node** environment is ready! 🚀🚀

To install Docker for various machine setups please visit the [Official Docker Documentation](https://docs.docker.com/engine/install/) for instructions. 🐳

If you are not making use of the Docker setup you will need to install the SubQuery Node CLI:

```bash
# NPM
$ npm install -g @graphprotocol/graph-cli

# Yarn
$ yarn global add @graphprotocol/graph-cli
```

Great! Now your environment is ready! 🚀🚀

## Quickstart ⚡

You can run a local SubQuery node with incredible ease and speed with Docker.

Install dependencies:

```bash
 yarn install
```

### Using evm local-net

Running local evm net via `protocol-solidity`

Run the local evm graph node using docker

```
$ git clone https://github.com/AhmedKorim/graph-node

$ git checkout ahmed/local-evm-graph-node
```
**Note** if you are running the graph-node on macos make sure to do this change in the docker-compose
comment out the extra hosts for `graph-node` service.
```yml
13 ..
14 #    extra_hosts:
15 #      - host.docker.internal:host-gateway
16 ..
```

Interact with the vAnchor subgraph via npm/yarn scripts

```bash

# Create the local subgraph on the running local evm graph-node
$ yarn create-local
# Deploy the subgraph
$ yarn deploy-local
# To re deploy the graph removal is required
# yarn remove-local

```

### Existing Deployments

You can query the existing deployed SubQuery instance at [GraphQL Playground](https://subquery-dev.webb.tools/graphql). This instance is deployed against the the [Arana Alpha Testnet](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fstats-dev.api.webb.tools%2Fpublic-ws#/explorer).

<h2 id="license"> License </h2>

Licensed under <a href="LICENSE">Apache 2.0 license</a>.

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in this crate by you, as defined in the Apache 2.0 license, shall be licensed as above, without any additional terms or conditions.
