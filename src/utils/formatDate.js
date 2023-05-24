import dayjs from 'dayjs'

export function formatMounthDate(date, formatStr = 'MM月DD日') {
  return dayjs(date).format(formatStr)
}

export function stayDay(startDate, endDate) {
  return dayjs(endDate).diff(startDate, 'day') //returns the number of days between two dates.
}
