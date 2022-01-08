import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  // {
  //   sousId: 7,
  //   stakingToken: serializedTokens.nort,
  //   earningToken: serializedTokens.nort,
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
    stakingToken: serializedTokens.nort,
    earningToken: serializedTokens.nort,
    contractAddress: {
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 245,
    stakingToken: serializedTokens.nort,
    earningToken: serializedTokens.nort,
    contractAddress: {
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    indicationTokenPerBlock: '0.001',
    lockupPeriod: '1 YEAR',
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
