import { Dispatch } from '@reduxjs/toolkit'
import { connectorLocalStorageKey } from '@allnext/uikit'
import { profileClear } from '../state/profile'
import { resetUserNftState } from '../state/nftMarket/reducer'
import { connectorsByName } from './web3React'
import { clearAllTransactions } from '../state/transactions/actions'

export const clearUserStates = (dispatch: Dispatch<any>, chainId: number) => {
  dispatch(profileClear())
  dispatch(resetUserNftState())
  // This localStorage key is set by @web3-react/walletconnect-connector
  if (window.localStorage.getItem('walletconnect')) {
    connectorsByName.walletconnect.close()
    connectorsByName.walletconnect.walletConnectProvider = null
  }
  window.localStorage.removeItem(connectorLocalStorageKey)
  if (chainId) {
    dispatch(clearAllTransactions({ chainId }))
  }
}
