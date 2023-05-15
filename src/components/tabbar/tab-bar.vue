<template>
  <div class="tabbar">
    <!-- <template v-for="(item, index) in tabbarData" :key="index">
      <div
        class="tab-bar-item"
        :class="{ active: currentIndex === index }"
        @click="itemClick(index, item)"
      >
        <img
          v-if="currentIndex !== index"
          :src="getAssetUrl(item.imgs)"
          alt=""
        />
        <img v-else :src="getAssetUrl(item.imgsActive)" alt="" />
        <span>{{ item.text }}</span>
      </div>
    </template> -->
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

// .tabbar {
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 50px;
//   display: flex;
//   border-top: 1px solid #f3f3f3;
//   .tab-bar-item {
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     &.active {
//       color: var(--primary-color);
//     }
//     span {
//       font-size: 12px;
//     }
//     img {
//       width: 36px;
//     }
//   }
// }
</style>
