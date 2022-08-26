import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { updateUserStakedBalance, updateUserBalance, updateUserEarnedRewardsBalance } from 'state/actions'
import { stakeFarm } from 'utils/calls'
import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL, DEFAULT_GAS_LIMIT } from 'config'
import { BIG_TEN } from 'utils/bigNumber'
import { useMasterchef, useNortVaultContract, useSousChef } from 'hooks/useContract'
import getGasPrice from 'utils/getGasPrice'
import { Contract, ethers } from 'ethers'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

interface SousStake {
  (sousChefContract: Contract, amount: string, decimals: number, indicationAddress: string | boolean): Promise<any>
}

const sousStake: SousStake = async (sousChefContract, amount, decimals = 18, indicationAddress) => {
  const gasPrice = getGasPrice()
  const iAddress = indicationAddress || ethers.constants.AddressZero
  const tx = await sousChefContract.deposit(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString(), iAddress, {
    ...options,
    gasPrice,
  })

  const receipt = await tx.wait()
  return receipt.status
}

const sousStakeBnb = async (sousChefContract, amount) => {
  const gasPrice = getGasPrice()
  const tx = await sousChefContract.deposit(new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString(), {
    ...options,
    gasPrice,
  })
  const receipt = await tx.wait()
  return receipt.status
}

const useStakePool = (sousId: number, isUsingBnb = false) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()
  const nortVaultContract = useNortVaultContract(sousId)
  const sousChefContract = useSousChef(sousId)

  const handleStake = useCallback(
    async (amount: string, decimals: number, indicationAddress?: string | boolean) => {
      if (sousId === 0) {
        await stakeFarm(masterChefContract, 0, amount)
      } else if (isUsingBnb) {
        await sousStakeBnb(nortVaultContract, amount)
      } else if (sousId < 300) {
        await sousStake(nortVaultContract, amount, decimals, indicationAddress)
      } else if (sousId > 300) {
        await sousStakeBnb(sousChefContract, amount)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
      dispatch(updateUserEarnedRewardsBalance(sousId, account))
    },
    [account, dispatch, isUsingBnb, masterChefContract, nortVaultContract, sousId, sousChefContract],
  )

  return { onStake: handleStake }
}

export default useStakePool
