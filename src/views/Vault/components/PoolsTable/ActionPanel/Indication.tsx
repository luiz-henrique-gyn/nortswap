import React from 'react'
import { Text } from '@allnext/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import truncateHash from 'utils/truncateHash'
import useReferral from 'views/Vault/hooks/useReferral'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 0;
    height: auto;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    margin-left: 32px;
    margin-right: 0;
  }
`

const Indication: React.FunctionComponent = () => {
  const { t } = useTranslation()
  const { referralAddress } = useReferral()
  return (
    <Container>
      <Text fontSize="12px" bold color="secondary" as="span" textTransform="uppercase">
        {t('Indicator Address')}:
      </Text>
      {referralAddress && (
        <Text fontSize="12px" bold color="primary" as="p" textTransform="uppercase" ml="12px">
          {truncateHash(referralAddress)}
        </Text>
      )}
    </Container>
  )
}

export default Indication
