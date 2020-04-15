import request from '@/utils/request'
const baseURL = 'http://localhost:6332'

export function fetchList() {
  return request({
    url: `${baseURL}/api/Transfer/GetTransferList`,
    method: 'get'
  })
}
