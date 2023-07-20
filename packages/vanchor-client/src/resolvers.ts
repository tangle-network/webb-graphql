import { Resolvers } from '../.graphclient'
import { SubgraphUrl } from './config'

export const resolvers: Resolvers = {
    ShieldedTransaction: {
        subgraphUrl: (root, args, context, info) => context.subgraphUrl || SubgraphUrl.vAnchorAthenaLocal, // The value we provide in the config
    },
}