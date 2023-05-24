<template>
  <div class="house-item-t9">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="" />
      </div>
      <div class="infos">
        <div class="summy">{{ itemData.summaryText }}</div>
        <div class="house-name">{{ itemData.houseName }}</div>
        <div class="price">
          <van-rate
            :model-value="Number(itemData.commentScore)"
            size="14"
            color="#fff"
            allow-half
          ></van-rate>
          <span class="price-num">{{ '￥' + itemData.finalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style lang="less" scoped>
.house-item-t9 {
  width: 50%;
  .item-inner {
    margin: 6px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    .cover {
      img {
        width: 100%;
      }
    }
    .infos {
      position: absolute;
      bottom: 0;
      color: white;
      background: #0000003f;
      .summy {
        font-size: 12px;
        padding: 6px 10px;
      }
      .house-name {
        font-size: 14px;
        margin: 8px 10px;
        // 文本最多显示三行
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        margin-bottom: 6px;
        .price-num {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
