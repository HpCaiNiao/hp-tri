<template>
  <div class="city">
    <div class="top">
      <van-search
        v-model="searchValue"
        placeholder="请输入您的城市/区域"
        shape="round"
        show-action
        @cancel="cancelClick"
      />
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key, index) in allCitys" :key="index">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(va, ke, index) in allCitys" :key="index">
        <CityGroup v-show="tabActive === ke" :cityData="va"></CityGroup>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs, computed } from 'vue'
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city'
import CityGroup from './city-group/cityGroup.vue'

const searchValue = ref('')
const router = useRouter()
const cancelClick = () => {
  router.back()
}

const tabActive = ref(0)
// const AllCity = ref({})
// getCity().then((res) => (AllCity.value = res.data))

const cityStore = useCityStore()
cityStore.fetchAllCitysData()
const { allCitys } = toRefs(cityStore)

//获取当前选择的所有内容，本身不是响应式，需要加如computed计算属性中，有变动自动刷新
const currentGrop = computed(() => {
  return allCitys.value[tabActive.value]
})
</script>

<style lang="less" scoped>
.city {
  --van-tabs-line-height: 32px;
  .top {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 86px);
    overflow-y: auto;
  }
}
</style>
