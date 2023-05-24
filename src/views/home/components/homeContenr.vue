<template>
  <div class="content">
    <h2 class="title">热门精选</h2>

    <div class="list">
      <template v-for="item in houseList" :key="item.data.houseId">
        <home-item-type9
          v-if="item.discoveryContentType === 9"
          :itemData="item.data"
        ></home-item-type9>
        <home-item-type3
          v-else-if="item.discoveryContentType === 3"
          :itemData="item.data"
        ></home-item-type3>
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia'
import HomeItemType9 from '@/components/home-item/home-item-type9.vue'
import HomeItemType3 from '@/components/home-item/home-item-type3.vue'

const homeStore = useHomeStore()
const { houseList } = storeToRefs(homeStore)

const btnMore = () => {
  console.log('加载更多')

  homeStore.fetchHouseList()
}
</script>

<style lang="less" scoped>
.content {
  padding: 10px;
  .title {
    font-size: 18px;
    font-weight: bold;
    padding: 10px 15px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
