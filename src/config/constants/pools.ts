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
  // {
  //   sousId: 247,
  //   stakingToken: serializedTokens.ntbnb,
  //   earningToken: serializedTokens.nt,
  //   contractAddress: {
  //     56: '0x1F8233Ea0a59f7EfF3304147F1d96A7d73AFC7E9',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.06',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
]

export default pools
