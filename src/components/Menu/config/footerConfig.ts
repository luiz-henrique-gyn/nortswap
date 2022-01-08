import { FooterLinkType } from '@allnext/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.nortswap.finance/contact-us',
      },
      {
        label: t('Brand'),
        href: 'https://docs.nortswap.finance/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/nortswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.nortswap.finance/contact-us/telegram',
      },
      {
        label: t('Nort Token'),
        href: 'https://docs.nortswap.finance/tokenomics/nort',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.nortswap.finance/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.nortswap.finance/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.nortswap.finance/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/allnext',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.nortswap.finance',
      },
      {
        label: t('Audits'),
        href: 'https://docs.nortswap.finance/help/faq',
      },
    ],
  },
]
