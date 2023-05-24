<template>
  <div class="house-type3">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="" />
      </div>
      <div class="location">
        <img src="@/assets/img/home/location.png" alt="" />
        <span>{{ itemData.location }}</span>
      </div>
      <div class="infos">
        <div class="house-name">{{ itemData.houseName }}</div>
        <div class="summy">{{ itemData.summaryText }}</div>
        <div class="price">
          <span class="price-num">{{ '￥' + itemData.finalPrice }}</span>
          <span class="old-price">{{ '￥' + itemData.productPrice }}</span>
          <span class="prefe">{{ itemData?.priceTipBadge?.text }}</span>
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
.house-type3 {
  width: 50%;

  .item-inner {
    margin: 6px;
    .cover {
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .location {
      padding: 6px 0;
      img {
        width: 12px;
        height: 12px;
        margin-right: 5px;
        margin-top: 2px;
      }
      span {
        font-size: 12px;
        color: #666;
      }
    }
    .infos {
      .summy {
        font-size: 12px;
        color: #666;
      }
      .house-name {
        font-size: 14px;
        color: #333;
        margin-bottom: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .price {
        display: flex;
        align-items: center;
        margin-top: 6px;
        .price-num {
          font-size: 18px;
          color: var(--primary-color);
          margin-right: 6px;
        }
        .old-price {
          font-size: 12px;
          color: #999;
          text-decoration: line-through;
        }
        .prefe {
          background: #f77676;
          font-size: 12px;
          color: white;
          margin-left: 8px;
          padding: 2px 6px;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
