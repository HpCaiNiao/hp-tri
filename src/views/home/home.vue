<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <HomeSearchBox></HomeSearchBox>
    <HomeCategories></HomeCategories>
    <div v-show="isShowSearch" class="search-box">
      <SearchBar></SearchBar>
    </div>
    <HomeContenr></HomeContenr>
  </div>
</template>

<script setup>
import { watch, ref, computed } from 'vue'

import useHomeStore from '@/stores/modules/home'
import HomeNavBar from './components/homeNavBar.vue'
import useScroll from '@/hooks/useScroll'
import HomeSearchBox from './components/homeSearchBox.vue'
import HomeCategories from './components/homeCategories.vue'
import HomeContenr from './components/homeContenr.vue'
import SearchBar from '@/components/search-bar/search-bar.vue'

//发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
homeStore.fetchCategories()
homeStore.fetchHouseList()

//监听滚动事件
const { isScrollBottom, scrollTop } = useScroll()

watch(isScrollBottom, (newVal) => {
  if (newVal) {
    console.log(newVal)
    homeStore.fetchHouseList().then(() => {
      isScrollBottom.value = false
    })
  }
})

//监听搜索框显示或隐藏
// const isShowSearch = ref(false)
// watch(scrollTop, (newtop) => {
//   isShowSearch.value = newtop > 100
// })
//简化写法
const isShowSearch = computed(() => scrollTop.value > 420)
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
.search-box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  height: 45px;
  background: #f5f5f5;
  padding: 16px 16px 10px;
}
</style>
