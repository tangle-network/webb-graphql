export interface VAnchorQueryData {
  vanchors: Vanchor[];
}

export interface Vanchor {
  id: string;
  chainId: string;
  typedChainId: string;
  contractAddress: string;
  token: string;
  volumeComposition: VolumeComposition[];
  numberOfDeposits: string;
  numberOfWithdraws: string;
  minDepositAmount: string;
  maxDepositAmount: string;
  averageDepositAmount: string;
}

export interface VolumeComposition {
  id: string;
  token: Token;
  finalValueLocked: string;
  valueLocked: string;
  totalFees: string;
  totalWrappingFees: string;
}

export interface Token {
  id: string;
  address: string;
}
