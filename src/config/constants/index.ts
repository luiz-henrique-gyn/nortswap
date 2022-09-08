import { ChainId, JSBI, Percent, Token } from '@pancakeswap/sdk'
import { mainnetTokens, testnetTokens } from './tokens'

export const ROUTER_ADDRESS = '0x10ED43C718714eb63d5aA57B78B54704E256024E'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.MAINNET]: [
    mainnetTokens.wbnb,
    mainnetTokens.cake,
    mainnetTokens.busd,
    mainnetTokens.usdt,
    mainnetTokens.btcb,
    mainnetTokens.ust,
    mainnetTokens.eth,
    mainnetTokens.usdc,
  ],
  [ChainId.TESTNET]: [testnetTokens.wbnb, testnetTokens.cake, testnetTokens.busd],
}

/**
 * Addittional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.MAINNET]: [mainnetTokens.nt, mainnetTokens.busd, mainnetTokens.cake],
  [ChainId.TESTNET]: [testnetTokens.wbnb, testnetTokens.cake, testnetTokens.busd],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.MAINNET]: [mainnetTokens.wbnb, mainnetTokens.dai, mainnetTokens.busd, mainnetTokens.usdt],
  [ChainId.TESTNET]: [testnetTokens.wbnb, testnetTokens.cake, testnetTokens.busd],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [mainnetTokens.cake, mainnetTokens.wbnb],
    [mainnetTokens.busd, mainnetTokens.usdt],
    [mainnetTokens.dai, mainnetTokens.usdt],
  ],
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%
// nt token max sell amount - whale prevent
export const MAX_NT: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(14))
export const MAX_NT_EXACT = 10000
// used to ensure the user doesn't send so much BNB so they end up with <.01
export const MIN_BNB: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 BNB
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000))

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = [
  '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
  '0xf46a40f9ffa85d1e266422caed85dd29021ba862',
  '0x411c262F481AFC1a56f0DAE3730121c053126294',
  '0x1f7b952d70d2d923194f56f730bc5439a61fb9fb',
  '0x6dc1bd41a3f6f65386920ce6bc1edf3e03d418ff',
  '0x54459b1ea65a16b9233f086ad47067ee1ab0b63a',
  '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
  '0x901bb9583b24D97e995513C6778dc6888AB6870e',
  '0xA7e5d5A720f06526557c513402f2e6B5fA20b008',
  '0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C',
  '0xd4a12e3bce63a65cf3f1c62bde6fbdaa7820a55e',
  '0xc269f906b451058048724b00e54bddf160084fe6',
  '0xc35d05138a65ed1d17338042a52423b7e68627e0',
  '0xc48e05967cbf7e9a6f3c7233d7b0103f59c23056',
  '0x5e42a60ed803b09b0c7047d573f7531ca5efd768',
  '0xcb8dc19142097b154f1a33105e3eb95c68a40524',
  '0x54e1a87ef2152243aea4cb45669d2319e1d9976a',
  '0xaac84e81e0623a9848c8d4212c4be5a1d0aaf159',
  '0x0906e0998ca6156bd864ce7d482cc8dd9349d602',
  '0x98ce3a5bfdbbd973890bb0e8598dffb9c91fa0e2',
  '0xf2adfd9230c0d245aa266c6f63cee71ec216b72c',
  '0x53933bd5bc0e8170abfc6e0491d7e17daddf856b',
  '0xf1790cd536198d599026b2c27868cd6bdf4d2358',
  '0x674fe0ced81b84dedb36d168dcd3e4bbdc122630',
  '0x9660febb18417070d195ec3e1fc0c7ecdf332b19',
  '0xa095cc3afeeb0592051b78f7c5903395af2c5fe9',
  '0xb345f2a90e3a7535953fff7b75f60c80ae0f2507',
  '0x02a6453b8723484fc2e2b0dc2ce35e7643cd45fa',
  '0xc7166cd879528708bf1b913a9ddfa985df8b4f68',
  '0xef7a1cf8a12737d426a3ffd5db7a5607efb507ab',
  '0x42098fee1440e81d42430f4c9d074866774d224b',
  '0x43a2071a03464ec7f335ef5032c888c6b3470d6b',
  '0x098564d660058472674a0c2c00302d42f5d51273',
  '0xac1cfe7e35df31c19e639e340373231ea49fc9d8',
  '0xef39da11018ee277a31891d61170c9f210aa338e',
  '0x5ab1cac35acba6a21bb1c53b511c63fe938af93e',
  '0x5befdffcb45764fa7c240f7ebcdaabf159b93d5a',
  '0xbe9843e351051a18078fbe2b14c1cc055fd7c794',
  '0xa8c71bac5f3db223f49f2ff1a2fe22e86238aa95',
  '0x14df2f041b7e81719cfcccc511a26d7ea8644675',
  '0x365192b96c9d9868a9a2e3cb731cb8bdc1f2ab36',
  '0x24c69347a476a57536faddb522f6097a017c8499',
  '0xbc9ebbf0b10c579ef1825c3ae76eef36071e6e87',
  '0x527feccf5755cdce116fc02d82108518ad1bcc13',
  '0xac508f9dc3fd5e7020cf84f98b117728d113ed68',
  '0x9b11d5fbdbe4a8e75c6981a25f708aa3f02a351a',
  '0x7af0798be6699f9f1ea9aa698717151a53079717',
  '0x7239f327290b01787ecdfb3d3b1eb77189f21ff2',
  '0x227178aeac6fb4e915fcd2837ebce01c01af1f86',
  '0x5e7fe6f05930b0fcbcbe29a772758599ab33a93a',
  '0xaa54a26224fab8f9a01e4858120b9ebe10307aed',
  '0xb1f571ffa8f9ac6a880acc3c4f141a13cbcdf2d5',
  '0x622f5c7f7af8e9e11975c5bec051f0313652d4ec',
  '0xd85e53ea1b96a51775e0d915510f5b3dea35839f',
  '0xa19694efe19c4bc5dde02dba367704d5647daa73',
  '0xdcdc6035a13d6cdb00cb402a7ca014c695c5e360',
  '0x41b4d161e2cf28063d0baae2cffa4c8ed73f4ad3',
  '0x23362be6d06db7af1955401c8efe1c60387ec39a',
  '0x33ce3035a78c84f3902087fd5451fdc3f2d2f702',
  '0xe6ce4bfaf04aff8ea4b2004c3c3d62cbfcadeb4a',
  '0xa904eec708404fb0d011e7cfe9af2fe8564c606e',
  '0x38a93b3c63640259359065d03ee0f06d03cdcdf1',
  '0xf5c5dd4747e7580e97f48c65cc1376aa93eac7b2',
  '0x7844402472ece1b806051b2256af1227c8f740ec',
  '0x64d3e5c0656d2e52ae2a335468d09a984c36c562',
  '0xbad8f9630d1d047707d27e6c5c98de1806223054',
  '0x8171a99f48cf6ac10b4927bd04a01c88000722e0',
  '0x2ad849bd911ceb2fad8df6b108ba7175bd1598a3',
  '0x8d6908ecb35c34dcd1df55468ce6614d21a21841',
  '0xc4a5044ec61391a79b0e1ae3c977792b9f4176a0',
  '0x8122d66012ae2e70312d887fcd9ccf3927985dde',
  '0x52e5800da0d6d15324345651ef66d673ca8ca484',
  '0xf2302c6fb5f28b449d1494881239fa4c6deafbf1',
  '0xefbcf1e6ec6df8d59ac924b09cd7ad639c96d241',
  '0xfdc1ceb448438b4c56754528ddff3e5864e035d9',
  '0x23e461f03590089fef0d4c287cc96feddd1c3c3c',
  '0x2c60aae30ecb71275817b6bdfe4504bd991155a5',
  '0x3cd6680447567847bbf927b4eaf5e8194bea2b62',
  '0x3323ede9dd53b70e58f0e34223b1ddf8f73e11b8',
  '0xb471d7df21cf299c85cf319166a76e57dac6d918',
  '0x50f7a9fe03a0ea4cd0aacf5bf85e8c7a3e8ecd6e',
  '01f7b952d70d2d923194f56f730bc5439a61fb9fb',
  '0xbe34a7f3bca21245c711e42b8bce2b9097d8b437',
  '0x2db6fd7954a6a6a6e0043996139cffd77196d86f',
  '0x9336de18710e16a8577635dd4ca996db9d7371b7',
  '0x3a2965fbf732e3c0fd7e6fc8716a60e69e37931f',
  '0x98463b43a27ff09ea635b0e58e4685679fd6de6f',
  '0x7804072c5d74a2fc5692bb569905e92ba9cd40d4',
  '0x97b8d122ab3e917da8823ca6ef0ce83a2bbb55e8',
  '0xadb403c63118ae1bd4a28627c2efd29694705792',
  '0xe36b69cbee13a9ac7408d2f1a02bc520ddb1de70',
  '0xc54c26b5f5397ce2e464d0ffc066e3896aab2223',
  '0xd9813b8417e82f79d5f9bbcf6c25fe51c4dd0a14',
  '0xdb8506b39a95b1a8db3255d7a0e5ad8128df7440',
  '0x1222cd3e36837dd18dd8dff146f32bbaa7ef069d',
  '0xce80f484a9cdc9b8c9cca5b232d2dd92386bb845',
]

export { default as farmsConfig } from './farms'
export { default as poolsConfig } from './pools'
export { default as ifosConfig } from './ifo'
