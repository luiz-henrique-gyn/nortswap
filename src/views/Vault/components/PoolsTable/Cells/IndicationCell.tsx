import React from 'react'
import styled from 'styled-components'
import { Text } from '@allnext/uikit'
import { DeserializedPool } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import BaseCell, { CellContent } from './BaseCell'

interface IndicationCellProps {
  pool: DeserializedPool
}

const StyledCell = styled(BaseCell)`
  flex: 1 0 50px;
  ${({ theme }) => theme.mediaQueries.md} {
    flex: 0 0 120px;
  }
`

const IndicationCell: React.FC<IndicationCellProps> = ({ pool }) => {
  const { t } = useTranslation()
  const { indicationTokenPerBlock } = pool

  return (
    <StyledCell role="cell">
      <CellContent>
        <Text fontSize="12px" color="textSubtle" textAlign="left">
          {t('Ind.Reward')}
        </Text>
        <Text fontSize="16px" textAlign="left">
          {indicationTokenPerBlock}/block
        </Text>
      </CellContent>
    </StyledCell>
  )
}

export default IndicationCell
