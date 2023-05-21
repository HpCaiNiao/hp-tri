import dayjs from 'dayjs'

export function formatMounthDate(date) {
  return dayjs(date).format('MM月DD日')
}

export function stayDay(startDate, endDate) {
  return dayjs(endDate).diff(startDate, 'day') //returns the number of days between two dates.
}
