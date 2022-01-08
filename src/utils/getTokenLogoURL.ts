const getTokenLogoURL = (address: string) =>
  address !== '0xA752dF1dE29CdDbA6f1142db2a75d407092CCE4b'
    ? `https://assets.trustwalletapp.com/blockchains/smartchain/assets/${address}/logo.png`
    : 'https://www.bscscan.com/token/images/nort%20_32.png'

export default getTokenLogoURL
