import { MenuItemsType, DropdownMenuItemType } from '@allnext/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Stacking'),
    href: '/pools',
    icon: 'Earn',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Vaults'),
    href: '/vault',
    icon: 'Wallet',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Locker'),
    href: '/locker',
    icon: 'Timer',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Services'),
    href: `#`,
    icon: 'Nft',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: '',
    href: '#',
    icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: t('Docs'),
        href: 'https://docs.nortswap.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
