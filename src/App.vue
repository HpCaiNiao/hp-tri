<template>
  <router-view></router-view>
  <TabBar v-if="!route.meta.hideTab"></TabBar>
</template>

<script setup>
import { useRoute } from 'vue-router'
import TabBar from '@/components/tabbar/tab-bar.vue'
const route = useRoute()
</script>

<style lang="scss" scoped></style>
