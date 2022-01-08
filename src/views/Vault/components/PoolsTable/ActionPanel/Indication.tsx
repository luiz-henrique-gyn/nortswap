import React from 'react'
import { Text } from '@allnext/uikit'
import { useTranslation } from 'contexts/Localization'
import useParsedQueryString from 'hooks/useParsedQueryString'
import styled from 'styled-components'
import truncateHash from 'utils/truncateHash'
import { isAddress } from 'ethers/lib/utils'

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
  const parsedQs = useParsedQueryString()
  if (!parsedQs.i) return <></>
  const isValid = isAddress(parsedQs.i as string)
  return (
    <Container>
      <Text fontSize="12px" bold color="secondary" as="span" textTransform="uppercase">
        {t('Indicator Address')}:
      </Text>
      {isValid && (
        <Text fontSize="12px" bold color="primary" as="p" textTransform="uppercase" ml="12px">
          {truncateHash(parsedQs.i as string)}
        </Text>
      )}
      {!isValid && (
        <Text fontSize="12px" bold color="primary" as="p" textTransform="uppercase" ml="12px">
          {t('Invalid Address')}
        </Text>
      )}
    </Container>
  )
}

export default Indication
