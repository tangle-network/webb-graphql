export default {
  typesBundle: {
    spec: {
      arana: {
        rpc: {
          lt: {
            getNeighborEdges: {
              description: 'Query for the neighbor edges',
              params: [
                {
                  isOptional: false,
                  name: 'tree_id',
                  type: 'u32',
                },
                {
                  isOptional: true,
                  name: 'at',
                  type: 'Hash',
                },
              ],
              type: 'Vec<PalletLinkableTreeEdgeMetadata>',
            },
            getNeighborRoots: {
              description: 'Query for the neighbor roots',
              params: [
                {
                  isOptional: false,
                  name: 'tree_id',
                  type: 'u32',
                },
                {
                  isOptional: true,
                  name: 'at',
                  type: 'Hash',
                },
              ],
              type: 'Vec<[u8; 32]>',
            },
          },
          mt: {
            getLeaves: {
              description: 'Query for the tree leaves',
              params: [
                {
                  isOptional: false,
                  name: 'tree_id',
                  type: 'u32',
                },
                {
                  isOptional: false,
                  name: 'from',
                  type: 'u32',
                },
                {
                  isOptional: false,
                  name: 'to',
                  type: 'u32',
                },
                {
                  isOptional: true,
                  name: 'at',
                  type: 'Hash',
                },
              ],
              type: 'Vec<[u8; 32]>',
            },
          },
        },
      },
    },
  },
}
