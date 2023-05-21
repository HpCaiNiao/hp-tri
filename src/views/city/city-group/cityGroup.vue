<template>
  <van-index-bar :index-list="indexList">
    <van-index-anchor index="热门城市" />
    <div class="hot-list">
      <template v-for="(hotcity, index) in cityData.hotCities" :key="index">
        <div class="hot-city" @click="cityClick(hotcity)">
          {{ hotcity.cityName }}
        </div>
      </template>
    </div>

    <template v-for="(item, index) in cityData.cities" :key="index">
      <van-index-anchor :index="item.group" />
      <template v-for="(city, indey) in item.cities" :key="indey">
        <van-cell :title="city.cityName" @click="cityClick(city)" />
      </template>
    </template>
  </van-index-bar>
</template>

<script setup>
import useCityStore from '@/stores/modules/city'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  cityData: {
    type: Object,
    default: () => ({}),
  },
})

// 遍历得到对应的字母导航
const indexList = computed(() => {
  let list = props.cityData.cities.map((item) => item.group)
  list.unshift('#')
  return list
})
const cityStore = useCityStore()
const router = useRouter()
const cityClick = (city) => {
  // console.log(city)
  cityStore.currentCity = city
  router.back()
}
</script>

<style lang="less" scoped>
.hot-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .hot-city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    background: #fff4ec;
    text-align: center;
    line-height: 28px;
    margin: 8px;
  }
}
</style>
