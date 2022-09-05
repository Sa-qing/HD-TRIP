import HYRequest from '@/service/request/index.js'

// 获取城市
export const  getAllCity =()=> HYRequest.get({ url:'/city/all' })