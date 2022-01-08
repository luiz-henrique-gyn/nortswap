import { ContextApi } from 'contexts/Localization/types'
import { format, parseISO, isValid } from 'date-fns'
import { FormState } from './types'

export const combineDateAndTime = (date: Date, time: Date) => {
  if (!isValid(date) || !isValid(time)) {
    return null
  }

  const dateStr = format(date, 'yyyy-MM-dd')
  const timeStr = format(time, 'HH:mm:ss')

  return parseISO(`${dateStr}T${timeStr}`).getTime() / 1e3
}

export const getFormErrors = (formData: FormState, t: ContextApi['t']) => {
  const { tokenAddress, endDate, endTime, amount, withdrawer } = formData
  const errors: { [key: string]: string[] } = {}

  if (!tokenAddress) {
    errors.tokenAddress = [t('%field% is required', { field: 'Token or LP address' })]
  }

  if (!amount) {
    errors.amount = [t('%field% is required', { field: 'Amount' })]
  }

  if (!withdrawer) {
    errors.withdrawer = [t('%field% is required', { field: 'Withdrawer' })]
  }

  if (!isValid(endDate)) {
    errors.endDate = [t('Please select a valid date')]
  }

  if (!isValid(endTime)) {
    errors.endTime = [t('Please select a valid time')]
  }
  // @ts-ignore
  const startDateTimestamp = Math.floor(new Date().getTime() / 1000)
  const endDateTimestamp = combineDateAndTime(endDate, endTime)

  if (endDateTimestamp < startDateTimestamp) {
    errors.endDate = Array.isArray(errors.endDate)
      ? [...errors.endDate, t('End date must be after the start date')]
      : (errors.endDate = [t('End date must be after the start date')])
  }

  return errors
}
