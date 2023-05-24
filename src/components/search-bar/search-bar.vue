<template>
  <div class="search-bar">
    <div class="left">
      <div class="select-time">
        <div class="start">
          <span class="name">住</span>
          <span class="date">{{ startDateStr }}</span>
        </div>
        <div class="end">
          <span class="name">离</span>
          <span class="date">{{ endDateStr }}</span>
        </div>
        <div class="jiao"></div>
      </div>
    </div>
    <div class="center">
      <input type="text" placeholder="请输入城市/酒店" /><i>搜索</i>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import useMainStore from '@/stores/modules/main'
import { storeToRefs } from 'pinia'
import { formatMounthDate } from '@/utils/formatDate'

const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => {
  return formatMounthDate(startDate.value, 'MM.DD')
})
const endDateStr = computed(() => {
  return formatMounthDate(endDate.value, 'MM.DD')
})
</script>

<style lang="less" scoped>
.search-bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .left {
    background: #fff;
    margin-left: 12px;
    padding: 4px 10px 4px 10px;
    font-size: 14px;
    border-radius: 20px 0 0 20px;
    position: relative;
    .jiao {
      position: absolute;
      bottom: 4px;
      right: 2px;

      border: 3px solid #000;
      border-top-color: transparent;
      border-left-color: transparent;
    }
  }
  .center {
    width: 70%;
    position: relative;
    input {
      width: 100%;
      height: 40px;
      border-radius: 0 20px 20px 0;
      border: none;
      outline: none;
      padding: 0 10px;
    }
    i {
      position: absolute;
      right: 0;
      top: 12px;
    }
  }
}
</style>
