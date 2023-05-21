import { defineStore } from 'pinia'
import HYRequest from '@/services/request/index'
import { getHomeHotSuggests } from '@/services'

const useHomeStore = defineStore('home', {
  state() {
    return {
      hotSuggests: [],
      categories: [],
    }
  },
  actions: {
    async fetchHotSuggests() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
  },
})

export default useHomeStore
