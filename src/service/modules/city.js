import HYRequest from '@/service/request/index.js'

export const  getAllCity =()=> HYRequest.get({ url:'/city/all' })