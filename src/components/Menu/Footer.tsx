import React from 'react'
import styled from 'styled-components'
import { Flex, Button } from '@allnext/uikit'
import { useTranslation } from 'contexts/Localization'

const Wrapper = styled.div<{ $isSide: boolean }>`
  width: 100%;
  height: ${({ $isSide }) => ($isSide ? '100%' : 'auto')};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 16px;
  padding-right: ${({ $isSide }) => ($isSide ? '32px' : '0px')};
  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: space-between;
    flex-direction: ${({ $isSide }) => ($isSide ? 'column' : 'row')};
  }
`

const BubbleWrapper = styled(Flex)`
  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
    transition: background-color 0.2s, opacity 0.2s;
  }
  &:hover {
    svg {
      opacity: 0.65;
    }
  }
  &:active {
    svg {
      opacity: 0.85;
    }
  }
`

type FooterVariant = 'default' | 'side'

const Footer: React.FC<{ variant?: FooterVariant }> = ({ variant = 'default' }) => {
  const { t } = useTranslation()
  const isSide = variant === 'side'
  return (
    <Wrapper $isSide={isSide}>
      {isSide && <Flex flexGrow={1} />}
      <Flex
        flexGrow={isSide ? 0 : 1}
        alignItems="center"
        width={['100%', '100%', '100%', isSide ? '100%' : 'auto']}
        justifyContent={['center', 'center', 'center', 'flex-end']}
        mb="24px"
      >
        <BubbleWrapper>
          <Button
            id="clickExchangeHelp"
            as="a"
            external
            href="https://docs.nortswap.finance/products/exchange"
            variant="subtle"
          >
            {t('Need help ?')}
          </Button>
        </BubbleWrapper>
      </Flex>
    </Wrapper>
  )
}

export default Footer
