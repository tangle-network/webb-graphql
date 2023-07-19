<div align="center">
<a href="https://www.webb.tools/">
    
![Webb Logo](./assets/webb_banner_light.png#gh-light-mode-only)
![Webb Logo](./assets/webb_banner_dark.png#gh-dark-mode-only)
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

- Before you begin, please make sure you are running `packages/vanchor` project. You can find readme for that project [here](../vanchor/README.md).
- Please edit subgraph names in this file, if they are different in your local setup: [config.ts](./packages/vanchor-client/config.ts)

```bash
yarn install
yarn build
```

The project should build successfully. You can then use code in `packages/vanchor-client/src/index.ts` to query the subgraph.

<h2 id="contribute"> Contributing </h2>

Interested in contributing to the Webb? Thank you so much for your interest! We are always appreciative for contributions from the open-source community!

If you have a contribution in mind, please check out our [Contribution Guide](./.github/CONTRIBUTING.md) for information on how to do so. We are excited for your first contribution!

<h2 id="license"> License </h2>

Licensed under <a href="LICENSE">Apache 2.0 license</a>.

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in this crate by you, as defined in the Apache 2.0 license, shall be licensed as above, without any additional terms or conditions.
