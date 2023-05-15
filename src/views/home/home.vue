<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <div class="location">
      <div class="city">广东</div>
      <div class="my-position">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeNavBar from '@/views/home/components/homeNavBar.vue'
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
.location {
  height: 46px;
  line-height: 46px;
  display: flex;
  justify-content: space-between;
  .city {
    flex: 1;
    padding-left: 30px;
  }
  .my-position {
    width: 100px;
    display: flex;
    align-items: center;
    img {
      width: 16px;
    }
  }
}
</style>
