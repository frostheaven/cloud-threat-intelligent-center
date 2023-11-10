import { APIrequest } from '@/utils/axios/index'
//伪造数据用
export function getDataAPI() {
  return APIrequest({
    url: '/HighRisk/page',
    method: 'get',
    params: {
      page: 1,
      pageSize: 5
    }
  })
}
