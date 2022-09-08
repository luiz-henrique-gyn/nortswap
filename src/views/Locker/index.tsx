import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { AutoRenewIcon, Box, Button, Card, CardBody, CardHeader, Flex, Heading, Input, Text } from '@allnext/uikit'
import { useWeb3React } from '@web3-react/core'
import isEmpty from 'lodash/isEmpty'
import { useInitialBlock } from 'state/block/hooks'
import { useTranslation } from 'contexts/Localization'
import Container from 'components/Layout/Container'
import { DatePicker, TimePicker } from 'components/DatePicker'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { PageMeta } from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import { getLockerAddress } from 'utils/addressHelpers'
import ApprovalAction from './components/ApprovalAction'
import { useCheckLockerApprovalStatus } from './hooks/useApprove'
import Layout from './components/Layout'
import { getFormErrors } from './helpers'
import { FormErrors, SecondaryLabel } from './styles'

import { FormState } from './types'

const Locker = () => {
  const [state, setState] = useState<FormState>({
    amount: 0,
    address: '',
    endDate: null,
    endTime: null,
    tokenAddress: '',
    withdrawer: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [fieldsState, setFieldsState] = useState<{ [key: string]: boolean }>({})
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const initialBlock = useInitialBlock()
  // const { push } = useHistory()
  // const { library } = useWeb3Provider()
  // const { toastSuccess, toastError } = useToast()
  const { endDate, endTime, amount, address, tokenAddress, withdrawer } = state
  const formErrors = getFormErrors(state, t)

  const { isLockerApproved, setLastUpdated } = useCheckLockerApprovalStatus(tokenAddress)
  const needsApproval = !isLockerApproved

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    setLastUpdated()
    try {
      setIsLoading(true)
      // const proposal = JSON.stringify({
      //   ...generatePayloadData(),
      //   type: SnapshotCommand.PROPOSAL,
      //   payload: {
      //     end: combineDateAndTime(endDate, endTime),
      //     metadata: generateMetaData(),
      //     type: 'single-choice',
      //   },
      // })

      // const sig = await signMessage(library, account, proposal)

      // if (sig) {
      //   const msg: Message = { address: account, msg: proposal, sig }

      //   // Save proposal to snapshot
      //   const data = await sendSnapshotData(msg)

      //   // Redirect user to newly created proposal page
      //   push(`/voting/proposal/${data.ipfsHash}`)

      //   toastSuccess(t('Proposal created!'))
      // } else {
      //   toastError(t('Error'), t('Unable to sign payload'))
      // }
    } catch (error: any) {
      // toastError(t('Error'), error?.message || error?.error)
      console.error(error)
      setIsLoading(false)
    }
  }

  const updateValue = (key: string, value: string | Date) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }))

    // Keep track of what fields the user has attempted to edit
    setFieldsState((prevFieldsState) => ({
      ...prevFieldsState,
      [key]: true,
    }))
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = evt.currentTarget
    updateValue(inputName, value)
  }

  const handleDateChange = (key: string) => (value: Date) => {
    updateValue(key, value)
  }

  useEffect(() => {
    if (initialBlock > 0) {
      setState((prevState) => ({
        ...prevState,
        snapshot: initialBlock,
      }))
    }
  }, [initialBlock, setState])

  return (
    <>
      <PageHeader>
        <Flex justifyContent="space-between" flexDirection={['column', null, null, 'row']}>
          <Flex flex="1" flexDirection="column" mr={['8px', 0]}>
            <Heading as="h1" scale="xxl" color="secondary" mb="24px">
              {t('Locker')}
            </Heading>
            <Heading scale="md" color="text">
              {t('Use the locker to prove to investors you have locked liquidity or Token.')}
            </Heading>
          </Flex>
        </Flex>
      </PageHeader>
      <Container py="40px">
        <PageMeta />
        <form onSubmit={handleSubmit}>
          <Layout>
            <Box>
              <Card mb="24px">
                <CardHeader>
                  <Heading as="h3" scale="md">
                    {t('Search Lockers')}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Box mb="24px">
                    <Input
                      id="address"
                      placeholder="Search for address"
                      name="address"
                      value={address}
                      scale="lg"
                      onChange={handleChange}
                    />
                    {formErrors.name && fieldsState.name && <FormErrors errors={formErrors.name} />}
                    <Button
                      type="button"
                      width="100%"
                      isLoading={isLoading}
                      endIcon={isLoading ? <AutoRenewIcon spin color="currentColor" /> : null}
                      mt="16px"
                    >
                      {t('Search')}
                    </Button>
                  </Box>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading as="h3" scale="md">
                    {t('Create Lock')}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Box mb="24px">
                    <SecondaryLabel>
                      {t('Enter the pair address or Token address you want to lock liquidity')}
                    </SecondaryLabel>
                    <Input
                      id="tokenAddress"
                      name="tokenAddress"
                      value={tokenAddress}
                      scale="lg"
                      onChange={handleChange}
                      required
                    />
                    {formErrors.tokenAddress && fieldsState.tokenAddress && (
                      <FormErrors errors={formErrors.tokenAddress} />
                    )}
                  </Box>
                  <Box mb="24px">
                    <SecondaryLabel>{t('Amount')}</SecondaryLabel>
                    <Input id="amount" name="amount" value={amount} scale="lg" onChange={handleChange} required />
                    {formErrors.amount && fieldsState.amount && <FormErrors errors={formErrors.amount} />}
                  </Box>
                  <Box mb="24px">
                    <SecondaryLabel>{t('Unlock Date')}</SecondaryLabel>
                    <DatePicker
                      name="endDate"
                      onChange={handleDateChange('endDate')}
                      selected={endDate}
                      placeholderText="YYYY/MM/DD"
                    />
                    {formErrors.endDate && fieldsState.endDate && <FormErrors errors={formErrors.endDate} />}
                  </Box>
                  <Box mb="24px">
                    <SecondaryLabel>{t('Unlock Time')}</SecondaryLabel>
                    <TimePicker
                      name="endTime"
                      onChange={handleDateChange('endTime')}
                      selected={endTime}
                      placeholderText="00:00"
                    />
                    {formErrors.endTime && fieldsState.endTime && <FormErrors errors={formErrors.endTime} />}
                  </Box>
                  <Box mb="24px">
                    <SecondaryLabel>{t('Withdrawer')}</SecondaryLabel>
                    <Input
                      id="withdrawer"
                      name="withdrawer"
                      value={withdrawer}
                      scale="lg"
                      onChange={handleChange}
                      required
                    />
                    {formErrors.withdrawer && fieldsState.withdrawer && <FormErrors errors={formErrors.withdrawer} />}
                  </Box>
                  {account ? (
                    <Flex>
                      {needsApproval && <ApprovalAction amount={amount} lockingTokenAddress={tokenAddress} />}

                      <Button
                        type="submit"
                        width="100%"
                        isLoading={isLoading}
                        endIcon={isLoading ? <AutoRenewIcon spin color="currentColor" /> : null}
                        disabled={!isEmpty(formErrors)}
                        mb="16px"
                      >
                        {t('Lock')}
                      </Button>
                    </Flex>
                  ) : (
                    <ConnectWalletButton width="100%" type="button" />
                  )}
                </CardBody>
              </Card>
            </Box>
            <Box>
              <Heading>{t('How to use')}</Heading>
              <Text>
                -&nbsp;
                {t(
                  'Input your token or liquidity pair address, amount of tokens to lock, withdrawer address and when tokens will become unlocked',
                )}
              </Text>
              <Text>- {t('Click on "Approve" to allow the contract to transfer your tokens')}</Text>
              <Text>- {t('Click on "Deposit" to lock your tokens into locker contract')}</Text>
              <Heading mt="24px">{t('Fees')}</Heading>
              <Text>- {t('0.05 BNB to lock (used to BUY and BURN 🔥 $NT)')}</Text>
              <Heading mt="24px">{t('Considerations')}</Heading>
              <Text>- {t('You will not be able to withdraw your tokens before the unlock time')}</Text>
              <Text>
                - {t('Locker contract address:')} {getLockerAddress()}
              </Text>
            </Box>
          </Layout>
        </form>
      </Container>
    </>
  )
}

export default Locker
