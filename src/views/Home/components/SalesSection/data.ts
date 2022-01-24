import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.nortswap.finance/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'ntcoin3', alt: 'NORT token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'NortSwap makes it easy to make your crypto work for you. Call your friends and earn rewards!',
  reverse: true,
  primaryButton: {
    to: '/vaults',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.nortswap.finance/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [{ src: 'rocket', alt: 'Rocket nort token' }],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'NT makes our world go round.',
  bodyText:
    'Nort Token is at the heart of the NortSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even pay your haircut with it in South America using NortPay!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    text: 'Buy NT',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.nortswap.finance/tokenomics/cake',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/nort/',
    attributes: [{ src: 'ntcoin1', alt: 'Nort Token' }],
  },
}
