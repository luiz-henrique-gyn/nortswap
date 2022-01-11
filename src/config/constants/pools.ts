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
      56: '0x27b39666D1af8A5E0E14Bc8CA35ACa83a1710132',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    indicationTokenPerBlock: '0.02',
    lockupPeriod: '1 YEAR',
    tokenPerBlock: '0.08',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
