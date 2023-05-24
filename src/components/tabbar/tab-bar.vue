<template>
  <div class="tabbar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetUrl(item.imgs)" />
            <img v-else :src="getAssetUrl(item.imgsActive)" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar.js'
import getAssetUrl from '@/utils/get_img_url'
import { ref } from 'vue'

const currentIndex = ref(0)
</script>

<style lang="less" scoped>
:deep(.van-tabbar-item__icon) {
  font-size: 32px;
}
.tabbar {
  img {
    height: 28px;
  }
}
</style>
