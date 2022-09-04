import { defineStore } from 'pinia'
import { getAllCity } from '@/service/index.js'
const useCityStore = defineStore('city', {
  state() {
    return {
      getCity: {},
      onlyCity:{
        cityName:'广东'
      }
    }
  },
  actions: {
    async fetchAllCityData() {
      const res = await getAllCity()
      this.getCity = res.data
    },
  },
  getters: {},
})
export default useCityStore 