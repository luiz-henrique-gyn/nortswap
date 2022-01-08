import React from 'react'
import styled from 'styled-components'
import { Text } from '@allnext/uikit'
import { DeserializedPool } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import BaseCell, { CellContent } from './BaseCell'

interface LockupCellProps {
  pool: DeserializedPool
}

const StyledCell = styled(BaseCell)`
  flex: 1 0 50px;
  ${({ theme }) => theme.mediaQueries.md} {
    flex: 0 0 120px;
  }
`

const LockupCell: React.FC<LockupCellProps> = ({ pool }) => {
  const { t } = useTranslation()
  const { lockupPeriod } = pool

  return (
    <StyledCell role="cell">
      <CellContent>
        <Text fontSize="12px" color="textSubtle" textAlign="left">
          {t('Lockup')}
        </Text>
        <Text fontSize="16px" textAlign="left">
          {lockupPeriod}
        </Text>
      </CellContent>
    </StyledCell>
  )
}

export default LockupCell
