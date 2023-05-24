import { defineStore } from 'pinia'
import HYRequest from '@/services/request/index'
import {
  getHomeCategories,
  getHomeHotSuggests,
  getHomeHouseList,
} from '@/services'

const useHomeStore = defineStore('home', {
  state() {
    return {
      hotSuggests: [],
      categories: [],

      nowPage: 1,
      houseList: [],
    }
  },
  actions: {
    async fetchHotSuggests() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategories() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouseList() {
      const res = await getHomeHouseList(this.nowPage)
      this.houseList.push(...res.data)
      this.nowPage++
    },
  },
})

export default useHomeStore
