<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
  </div>
  <HomeSearchBox></HomeSearchBox>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home'
import HomeNavBar from './components/homeNavBar.vue'
import HomeSearchBox from './components/homeSearchBox.vue'
// import HYRequest from '@/services/request/index'

// const hotSuggests = ref([])

// HYRequest.get({
//   url: '/home/hotSuggests',
// }).then((res) => (hotSuggests.value = res.data))

//发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggests()
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>
