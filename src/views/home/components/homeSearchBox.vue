<template>
  <div class="serach-box">
    <div class="location">
      <div class="city" @click="getCity">
        点击切换城市:<span>{{ currentCity.cityName }}</span>
      </div>
      <div class="my-position" @click="getPosition">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <div class="range" @click="changeShow">
      <div class="start item">
        <p>入住</p>
        <span class="date">{{ startDateStr }}</span>
      </div>
      <div class="stay item">共{{ stayCount }}晚</div>
      <div class="end item">
        <p>离店</p>
        <span class="date">{{ endDateStr }}</span>
      </div>
    </div>
    <van-calendar
      v-model:show="show"
      @confirm="onConfirm"
      type="range"
      color="#ff9854"
    />
    <div class="ren">
      <div>价格不限</div>
      <div class="right">人数不限</div>
    </div>
    <div class="guanjian">关键字/位置/酒店名</div>

    <div class="hot-suggest">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <div class="search-btn">
      <button class="btn" @click="searchBtnClick">开始搜索</button>
    </div>
  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { formatMounthDate, stayDay } from '@/utils/formatDate'
import useHomeStore from '@/stores/modules/home'
import useMainStore from '@/stores/modules/main'
const router = useRouter()

// defineProps({
//   hotSuggests: {
//     type: Array,
//     default: () => [],
//   },
// })

const getCity = () => {
  router.push('/city')
}
const getPosition = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      // console.log(res)
    },
    (err) => {
      console.log(err)
    }
  )
}
const cityStore = useCityStore()

const { currentCity } = storeToRefs(cityStore)

const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)

const startDateStr = computed(() => formatMounthDate(startDate.value))
const endDateStr = computed(() => formatMounthDate(endDate.value))

const stayCount = ref(stayDay(startDate.value, endDate.value))

const show = ref(false) // 显示日期选择器 开始天的选择器和结束天的选择器
const changeShow = () => (show.value = !show.value) // 选择开始天的选择器和结束天的选

const onConfirm = (value) => {
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  mainStore.startDate = selectStartDate
  mainStore.endDate = selectEndDate
  stayCount.value = stayDay(selectStartDate, selectEndDate) // 天数, 默认7天, 可选参数2天或
  changeShow()
}

//从home仓库拿数据
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)

// 点击搜索按钮，跳转到搜索页，携带参数。
const searchBtnClick = () => {
  router.push({
    path: '/search',
    query: {
      cityName: currentCity.value.cityName,
      startDate: startDate.value,
      endDate: endDate.value,
      stayCount: stayCount.value,
    },
  })
}
</script>

<style lang="less" scoped>
.location {
  height: 46px;
  line-height: 46px;
  display: flex;
  justify-content: space-between;
  .city {
    flex: 1;
    padding-left: 30px;
    color: #333;
    span {
      font-weight: 700;
      color: #333;
      font-size: 16px;
    }
  }
  .my-position {
    width: 100px;
    display: flex;
    align-items: center;
    color: #666;
    img {
      width: 16px;
    }
  }
}
.range {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px;

  p {
    margin: 8px 0;
    color: #787878;
  }
  .date {
    color: #333;
    font-size: 18px;
  }
}
.ren {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  color: #acacac;
  font-size: 12px;
  .right {
    padding-right: 30px;
  }
}
.guanjian {
  color: #adadad;
  font-size: 14px;
  padding: 18px 30px 2px 30px;
}
.hot-suggest {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px 30px;
  .item {
    margin: 0 10px 10px 0;
    padding: 3px 5px;
    border-radius: 6px;
  }
}
.search-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  .btn {
    width: 90%;
    height: 40px;
    border-radius: 20px;
    background: var(--theme-linear-color);
    color: #fff;
    font-size: 16px;
    border: none;
    box-shadow: 2px 2px 5px #ccc;
  }
}
</style>
