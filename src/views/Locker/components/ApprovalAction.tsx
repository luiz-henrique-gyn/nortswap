import React from 'react'
import { Button, AutoRenewIcon, Skeleton } from '@allnext/uikit'
import { useTranslation } from 'contexts/Localization'
import { useERC20 } from 'hooks/useContract'
import { useApproveLocker } from '../hooks/useApprove'

interface ApprovalActionProps {
  amount: number
  lockingTokenAddress: string
  isLoading?: boolean
}

const ApprovalAction: React.FC<ApprovalActionProps> = ({ amount, lockingTokenAddress, isLoading = false }) => {
  const { t } = useTranslation()
  const stakingTokenContract = useERC20(lockingTokenAddress || '')
  const { handleApprove, requestedApproval } = useApproveLocker(amount, stakingTokenContract)

  return (
    <>
      {isLoading ? (
        <Skeleton width="100%" height="52px" />
      ) : (
        <Button
          isLoading={requestedApproval}
          endIcon={requestedApproval ? <AutoRenewIcon spin color="currentColor" /> : null}
          disabled={requestedApproval}
          onClick={handleApprove}
          width="100%"
        >
          {t('Enable')}
        </Button>
      )}
    </>
  )
}

export default ApprovalAction
