import { defineStore } from 'pinia'
import { getCity } from '@/services/modules/city'
const useCityStore = defineStore('city', {
  state() {
    return {
      allCitys: {},
      currentCity: {
        cityName: '北京',
      },
    }
  },
  actions: {
    async fetchAllCitysData() {
      const res = await getCity()
      this.allCitys = res.data
      console.log(res.data)
    },
  },
})

export default useCityStore
