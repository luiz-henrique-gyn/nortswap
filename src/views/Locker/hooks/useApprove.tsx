import React, { useCallback, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Contract, ethers } from 'ethers'
// import { useAppDispatch } from 'state'
import { useTranslation } from 'contexts/Localization'
import { useERC20, useLockerContract } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import useLastUpdated from 'hooks/useLastUpdated'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
import { ToastDescriptionWithTx } from 'components/Toast'

export const useApproveLocker = (amount: number, tokenContract: Contract) => {
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { toastSuccess, toastError } = useToast()
  const { callWithGasPrice } = useCallWithGasPrice()
  const { t } = useTranslation()
  // const dispatch = useAppDispatch()
  const lockerContract = useLockerContract()
  // const { account } = useWeb3React()

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const tx = await callWithGasPrice(tokenContract, 'approve', [lockerContract.address, ethers.constants.MaxUint256])
      const receipt = await tx.wait()

      // dispatch(updateUserAllowance(sousId, account))
      if (receipt.status) {
        toastSuccess(
          t('Contract Enabled'),
          <ToastDescriptionWithTx txHash={receipt.transactionHash}>
            {t('You can now lock %symbol% !', { symbol: tokenContract.symbol })}
          </ToastDescriptionWithTx>,
        )
        setRequestedApproval(false)
      } else {
        // user rejected tx or didn't go thru
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
        setRequestedApproval(false)
      }
    } catch (e) {
      console.error(e)
      toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
    }
  }, [callWithGasPrice, lockerContract.address, t, toastError, toastSuccess, tokenContract])

  return { handleApprove, requestedApproval }
}

export const useCheckLockerApprovalStatus = (tokenAddress: string) => {
  const [isLockerApproved, setIsLockerApproved] = useState(false)
  const { account } = useWeb3React()
  const lockerContract = useLockerContract()
  const { lastUpdated, setLastUpdated } = useLastUpdated()
  const tokenContract = useERC20(tokenAddress)
  useEffect(() => {
    const checkApprovalStatus = async () => {
      try {
        const currentAllowance = await tokenContract.allowance(account, lockerContract.address)
        setIsLockerApproved(currentAllowance.gt(0))
      } catch (error) {
        setIsLockerApproved(false)
      }
    }

    checkApprovalStatus()
  }, [account, tokenContract, lockerContract, lastUpdated])

  return { isLockerApproved, setLastUpdated }
}
