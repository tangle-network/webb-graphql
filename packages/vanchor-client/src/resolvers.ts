import { Resolvers } from '../.graphclient'
import { SubgaraphNames } from '../config'

export const resolvers: Resolvers = {
    ShieldedTransaction: {
        chainName: (root, args, context, info) => context.chainName || SubgaraphNames[0], // The value we provide in the config
    },
}