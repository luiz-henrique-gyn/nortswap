import { useWeb3React } from '@web3-react/core'
import { useCallback, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { isAddress } from 'ethers/lib/utils'
import useParsedQueryString from 'hooks/useParsedQueryString'

const useReferral = () => {
  const { account } = useWeb3React()
  const [referralAddress, setAddress] = useState<string>('0x0000000000000000000000000000000000000000')
  const parsedQs = useParsedQueryString()
  const setReferralAddress = useCallback(
    (address: string) => {
      if (account) {
        const getReferral = Cookies.get(`referral_${account}`)
        if (!getReferral || !isAddress(getReferral)) {
          Cookies.set(`referral_${account}`, address, { domain: 'nortswap.finance', secure: true, expires: 999 })
          setAddress(address)
        }
      }
    },
    [account],
  )
  useEffect(() => {
    const getReferral = Cookies.get(`referral_${account}`)
    if (getReferral && isAddress(getReferral)) {
      setAddress(getReferral)
    } else if (isAddress(parsedQs.i as string) && parsedQs.i !== account) {
      setAddress(parsedQs.i as string)
      setReferralAddress(parsedQs.i as string)
    }
  }, [account, parsedQs.i, setReferralAddress])

  return { setReferralAddress, referralAddress }
}

export default useReferral
