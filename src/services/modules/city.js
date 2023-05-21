import HYRequest from '../request'

export function getCity() {
  return HYRequest.get({ url: '/city/all' })
}
