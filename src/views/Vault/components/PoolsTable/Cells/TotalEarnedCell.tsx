import React from 'react'
import styled from 'styled-components'
import { HelpIcon, Text, useTooltip } from '@allnext/uikit'
import { DeserializedPool } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import { getFullDisplayBalance } from 'utils/formatBalance'
import BaseCell, { CellContent } from './BaseCell'

interface TotalEarnedCellProps {
  pool: DeserializedPool
}

const StyledCell = styled(BaseCell)`
  flex: 1 0 50px;
  display: flex;
  flex-direction: row;
  ${({ theme }) => theme.mediaQueries.md} {
    flex: 0 0 120px;
  }
`
const TotalEarnedCell: React.FC<TotalEarnedCellProps> = ({ pool }) => {
  const { t } = useTranslation()
  const earnedRewardsTooltipText = t('Total of rewards harvested to your wallet')
  const {
    targetRef: tagTargetRef,
    tooltip: tagTooltip,
    tooltipVisible: tagTooltipVisible,
  } = useTooltip(earnedRewardsTooltipText, {
    placement: 'bottom-start',
  })
  const {
    userData: { earnedRewards },
    earningToken,
  } = pool
  const formattedBalance = getFullDisplayBalance(earnedRewards, earningToken.decimals, 2)
  return (
    <StyledCell role="cell">
      <CellContent>
        <Text fontSize="12px" color="textSubtle" textAlign="left" verticalAlign="middle">
          {t('Total Earned')}
        </Text>
        <Text fontSize="16px" textAlign="left">
          {earnedRewards.gt(0) ? formattedBalance : 0}
        </Text>
      </CellContent>
      {tagTooltipVisible && tagTooltip}
      <span ref={tagTargetRef}>
        <HelpIcon ml="4px" width="20px" height="20px" color="textSubtle" />
      </span>
    </StyledCell>
  )
}

export default TotalEarnedCell
