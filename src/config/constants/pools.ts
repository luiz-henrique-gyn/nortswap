import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  // {
  //   sousId: 7,
  //   stakingToken: serializedTokens.nt,
  //   earningToken: serializedTokens.nt,
  //   contractAddress: {
  //     97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
  //     56: '0xD5C19dA8D6dF62649034d2ca73ABCf746F524428',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.5',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
  {
    sousId: 243,
    stakingToken: serializedTokens.nt,
    earningToken: serializedTokens.nt,
    contractAddress: {
      56: '0xFacee30064Ff858b91DD277Ff09edC56376a32aD',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.04',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 245,
    stakingToken: serializedTokens.nt,
    earningToken: serializedTokens.nt,
    contractAddress: {
      56: '0x73F8993448f8a7a482e1A62deD08CeBa54C56DeA',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    indicationTokenPerBlock: '0.02',
    lockupPeriod: '1 YEAR',
    tokenPerBlock: '0.06',
    sortOrder: 1,
    isFinished: true,
    isVault: true,
  },
  {
    sousId: 246,
    stakingToken: serializedTokens.nt,
    earningToken: serializedTokens.nt,
    contractAddress: {
      56: '0x5982309CDcdC84e728D0CF5FaF991c06208c147d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    indicationTokenPerBlock: '0.0002',
    lockupPeriod: '1 YEAR',
    tokenPerBlock: '0.06',
    sortOrder: 1,
    isFinished: false,
    isVault: true,
  },
  {
    sousId: 247,
    stakingToken: serializedTokens['cake-lp'],
    earningToken: serializedTokens.nt,
    contractAddress: {
      56: '0x311251741Ae63a8Fda31AD968e0577BDAc64394A',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.02',
    sortOrder: 1,
    isFinished: false,
    isFarm: true,
  },
  {
    sousId: 301,
    stakingToken: serializedTokens.nt,
    earningToken: serializedTokens.nt,
    contractAddress: {
      56: '0xDefDfFae4ba7879312a21eD7bE7B8De722992EE2',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    lockupPeriod: '5 YEAR',
    indicationTokenPerBlock: '0',
    tokenPerBlock: '0.009',
    sortOrder: 1,
    isFinished: false,
    isVault: true,
  },
]

export default pools
