# Tangle SubQL

This project utilizes [SubQuery](https://academy.subquery.network/) to index data on the [**Tangle Network**](http://tangle.tools/). The indexed data encompasses a wide range of transactions occurring on the network, including:

- Restaking operations
- Liquid staking activities
- Interactions with blueprint services
- ...

By indexing these transactions, this project provides a comprehensive view of the network's activity, enabling efficient querying and analysis of the Tangle Network's operational data.

## Prerequisites

First, before you begin starting the project, make sure you have installed the required supporting software applications. These are:

- [NodeJS](https://nodejs.org/en/): A modern (e.g. the LTS version) installation of NodeJS.
- [Docker](https://www.docker.com/): The project will use Docker to run a local version of the SubQuery's node.

Don't forget to install dependencies with `yarn install` on the root of the repo!

## Editing your SubQuery project

You can edit the project by changing the following files:

- The project manifest in `project.yaml` defines the key project configuration and mapping handler filters
- The GraphQL Schema (`schema.graphql`) defines the shape of the resulting data that you are using SubQuery to index
- The Mapping functions in `src/mappings/` directory are typescript functions that handle transformation logic

## Run your project

_If you get stuck, find out how to get help below._

Fist, copy (and edit if needed) the environment variable file.

```shell
cp packages/tangle-subql/.env.example packages/tangle-subql/.env
```

The simplest way to run your project is by running `yarn dev:tangle-subql` or `npm run-script dev:tangle-subql`. This does all of the following:

1.  Codegen - Generates types from the GraphQL schema definition and contract ABIs and saves them in the `/src/types` directory. This must be done after each change to the `schema.graphql` file or the contract ABIs
2.  Build - Builds and packages the SubQuery project into the `/dist` directory
3.  `docker-compose pull && docker-compose up` - Runs a Docker container with an indexer, PostgeSQL DB, and a query service. This requires [Docker to be installed](https://docs.docker.com/engine/install) and running locally. The configuration for this container is set from your `docker-compose.yml`

You can observe the three services start, and once all are running (it may take a few minutes on your first start), please open your browser and head to [http://localhost:3000](http://localhost:3000) - you should see a GraphQL playground showing with the schemas ready to query. [Read the docs for more information](https://academy.subquery.network/run_publish/run.html) or [explore the possible service configuration for running SubQuery](https://academy.subquery.network/run_publish/references.html).

## Query your project

For this project, you can try to query with the following GraphQL code to get a taste of how it works.

```graphql
{
  query {
    transfers {
      nodes {
        id
        amount
        blockNumber
        date
        from {
          id
        }
        to {
          id
        }
      }
    }
  }
}
```

You can explore the different possible queries and entities to help you with GraphQL using the documentation draw on the right.

## Need help?

If you need help or you want to additional information please:

- Refer to the [Tangle Network Official Documentation](https://docs.tangle.tools/) or [Webb Official Documentation](https://docs.webb.tools/).
- If you have feedback on how to improve the dApp interface or you have a specific question? Check out the [Tangle dApp Feedback Discussion](https://github.com/webb-tools/feedback/discussions/categories/tangle-dapp) or [Webb dApp Feedback Discussion](https://github.com/webb-tools/feedback/discussions/categories/webb-dapp-feedback).
- If you found a bug please [open an issue](https://github.com/webb-tools/webb-dapp/issues/new/choose) or [join our Discord](https://discord.gg/jUDeFpggrR) server to report it.

---

**Follow us at**
[![Follow Tangle on twitter](https://img.shields.io/twitter/follow/tangle_network.svg?style=social)](https://twitter.com/intent/follow?screen_name=tangle_network)
[![Follow Webb on twitter](https://img.shields.io/twitter/follow/webbprotocol.svg?style=social)](https://twitter.com/intent/follow?screen_name=webbprotocol)
[![Follow Webb on LinkedIn](https://img.shields.io/badge/LinkedIn-webbprotocol-blue?style=flat&logo=linkedin&logoColor=b0c0c0&labelColor=363D44)](https://www.linkedin.com/company/webb-protocol/)

---

**Share** the project link with your network on social media.

<a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//github.com/webb-tools/webb-dapp" target="_blank">
  <img src="https://img.shields.io/twitter/url?label=LinkedIn&logo=LinkedIn&style=social&url=https%3A%2F%2Fgithub.com%2Fwebb-tools%2Fwebb-dapp" alt="Share on LinkedIn"/>
</a>
<a href="https://twitter.com/intent/tweet?text=%F0%9F%9A%80%20Explore%20%60webb-tools/webb-dapp%60%20Monorepo%20on%20Github%3A%20your%20%23zeroKnowledgeApp%20in%20%23blockchain.%20Secure%2c%20efficient%20%23crypto%20interactions%20await!%0A%0ADive%20in%20%E2%9E%A1%EF%B8%8F%20https%3A//github.com/webb-tools/webb-dapp%20%23webbEcosystem" target="_blank">
  <img src="https://img.shields.io/twitter/url?label=Twitter&logo=Twitter&style=social&url=https%3A%2F%2Fgithub.com%2Fwebb-tools%2Fwebb-dapp" alt="Shared on Twitter"/>
</a>
<a href="https://t.me/share/url?text=%F0%9F%9A%80%20Explore%20%60webb-tools/webb-dapp%60%20Monorepo%20on%20Github%3A%20your%20%23zeroKnowledgeApp%20in%20%23blockchain.%20Secure%2c%20efficient%20%23crypto%20interactions%20await!%0A%0ADive%20in%20%E2%9E%A1%EF%B8%8F%20https%3A//github.com/webb-tools/webb-dapp%20%23webbEcosystem&url=https%3A%2F%2Fgithub.com%2Fwebb-tools%2Fwebb-dapp" target="_blank">
  <img src="https://img.shields.io/twitter/url?label=Telegram&logo=Telegram&style=social&url=https%3A%2F%2Fgithub.com%2Fawebb-tools%webb-dapp" alt="Share on Telegram"/>
</a>
