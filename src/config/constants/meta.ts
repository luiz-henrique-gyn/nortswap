import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'NortSwap',
  description:
    'The most popular AMM on BSC by user count! Earn NT through yield farming, then stake it in NT Pools to earn more tokens! NFTs, and more, on a platform you can trust.',
  image: 'https://nortswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('NortSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('NortSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('NortSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('NortSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('NortSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('NortSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('NortSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('NortSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('NortSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('NortSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('NortSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('NortSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('NortSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('NortSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('NortSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('NortSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('NortSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('NortSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('NortSwap Info & Analytics')}`,
        description: 'View statistics for NortSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('NortSwap Info & Analytics')}`,
        description: 'View statistics for NortSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('NortSwap Info & Analytics')}`,
        description: 'View statistics for NortSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('NortSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('NortSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('NortSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('NortSwap')}`,
      }
    default:
      return null
  }
}
