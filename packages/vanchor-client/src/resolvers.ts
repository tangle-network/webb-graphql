import { Resolvers } from '../.graphclient'

export const resolvers: Resolvers = {
    ShieldedTransaction: {
        chainName: (root, args, context, info) => context.chainName || 'athena', // The value we provide in the config
    },
}