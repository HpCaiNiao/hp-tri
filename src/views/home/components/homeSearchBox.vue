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
        <span class="date">{{ startDate }}</span>
      </div>
      <div class="stay item">共{{ stayCount }}晚</div>
      <div class="end item">
        <p>离店</p>
        <span class="date">{{ endDate }}</span>
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
  </div>
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
</template>

<script setup>
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { formatMounthDate, stayDay } from '@/utils/formatDate'
import useHomeStore from '@/stores/modules/home'
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
      console.log(res)
    },
    (err) => {
      console.log(err)
    }
  )
}
const cityStore = useCityStore()

const { currentCity } = storeToRefs(cityStore)

const nowDate = new Date()
const newDate = new Date().setDate(nowDate.getDate() + 1)
const startDate = ref(formatMounthDate(new Date()))
const endDate = ref(formatMounthDate(newDate))
const stayCount = ref(stayDay(nowDate, newDate)) // 天数, 默认7天, 可选参数2天或

const show = ref(false) // 显示日期选择器 开始天的选择器和结束天的选择器
const changeShow = () => (show.value = !show.value) // 选择开始天的选择器和结束天的选

const onConfirm = (value) => {
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  startDate.value = formatMounthDate(selectStartDate)
  endDate.value = formatMounthDate(selectEndDate)
  stayCount.value = stayDay(selectStartDate, selectEndDate) // 天数, 默认7天, 可选参数2天或
  changeShow()
}

//从home仓库拿数据
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)
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
  padding: 18px 30px;
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
</style>
