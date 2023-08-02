<div align="center">
<a href="https://www.webb.tools/">
    
![Webb Logo](../../assets/webb_banner_light.png#gh-light-mode-only)
![Webb Logo](../..//assets/webb_banner_dark.png#gh-dark-mode-only)
  </a>
  </div>
<h1 align="left"> 🛰️ 🕸️ Webb VAnchor 🕸️ 🛰️ </h1>
<p align="left">
    <strong>🚀 Webb GraphQL API </strong>
</p>

<div align="left" >

[![CI](https://github.com/webb-tools/orbit/actions/workflows/ci.yml/badge.svg)](https://github.com/webb-tools/web-graphql/actions/workflows/ci.yml)
[![License Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square)](https://opensource.org/licenses/Apache-2.0)
[![Twitter](https://img.shields.io/twitter/follow/webbprotocol.svg?style=flat-square&label=Twitter&color=1DA1F2)](https://twitter.com/webbprotocol)
[![Telegram](https://img.shields.io/badge/Telegram-gray?logo=telegram)](https://t.me/webbprotocol)
[![Discord](https://img.shields.io/discord/833784453251596298.svg?style=flat-square&label=Discord&logo=discord)](https://discord.gg/cv8EfJu3Tn)

</div>

<h1 id="usage"> Usage </h1>

<h2 id="prerequisites"> Prerequisites </h2>

- Docker: https://docs.docker.com/get-docker/
- Nodejs: https://nodejs.org/en/download/
- Yarn: https://classic.yarnpkg.com/en/docs/install

<h2 style="border-bottom:none"> Quick Start ⚡ </h2>

- Please edit chain RPC info in `./configs/chains.prod.toml`. Please make sure you're using the correct RPC info for each chain.
- Please make sure you have correct contract address for vAnchor and FungibleTokenContracts in `./networks/live.json` for each of those chains.

```bash
yarn install
yarn redeploy-all-orbit
```

Graph explorer URL for all chains will be printed on your console. You can use those URL's to explore the graph.

<h2 id="contribute"> Development </h2>

1. To start develop this project, run the Orbit first by following the [instruction](https://github.com/webb-tools/orbit#-quick-start--) in Orbit repo.

2. Update these environment variables in `.env` file after copying from `.env.example` file.

```bash
export ATHENA_CHAIN_ID=5002
export HERMES_CHAIN_ID=5001
export DEMETER_CHAIN_ID=5003
export ATHENA_CHAIN_PORT=5002
export HERMES_CHAIN_PORT=5001
export DEMETER_CHAIN_PORT=5003
```

3. Still on Orbit repo, change directory to `deploy` and run `yarn install` to install all dependencies.

4. Make a new deployment by the following command.

```bash
yarn deploy --deployWeth --allowWrappingNativeToken
```

5. Run the deposit script to generate some transactions for testing.

```bash
yarn deposit --contractAddress <DEPLOYED_ANCHOR_ADDRESS>
```

6. Go back to this repo and make sure you have correct chain RPC info in `./configs/chains.toml` and correct contract address for vAnchor and FungibleTokenContracts in `./networks/local.json` for each of those chains.

7. Run the following command to start the graph node.

```bash
yarn redeploy-all-local
```

<h2 id="useful-commands"> Useful Commands </h2>

- Sometimes, when restart the graph node, you might need to clear the graph node data. You can do so by running the following command.

```bash
yarn clean
```

- To stop the graph node, run the following command.

```bash
docker compose -f <DOCKER_COMPOSE_FILE> down -v
```

- Follow the docker compose logs after starting the graph node.

```bash
docker compose -f <DOCKER_COMPOSE_FILE> logs -f
```

<h2 id="contribute"> Contributing </h2>

Interested in contributing to the Webb? Thank you so much for your interest! We are always appreciative for contributions from the open-source community!

If you have a contribution in mind, please check out our [Contribution Guide](./.github/CONTRIBUTING.md) for information on how to do so. We are excited for your first contribution!

<h2 id="license"> License </h2>

Licensed under <a href="LICENSE">Apache 2.0 license</a>.

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in this crate by you, as defined in the Apache 2.0 license, shall be licensed as above, without any additional terms or conditions.
