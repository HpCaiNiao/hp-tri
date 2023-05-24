import { onMounted, onUnmounted, ref } from 'vue'
import { throttle } from 'underscore'

export default function useScroll() {
  const isScrollBottom = ref(false)
  const scrollTop = ref(0)
  const clientHeight = ref(0)
  const scrollHeight = ref(0)

  const scrollListener = throttle(() => {
    // underscore的节流函数，防止scroll事件触发过于频繁
    scrollTop.value = document.documentElement.scrollTop
    clientHeight.value = document.documentElement.clientHeight
    scrollHeight.value = document.documentElement.scrollHeight
    if (Math.ceil(scrollTop.value + clientHeight.value) >= scrollHeight.value) {
      isScrollBottom.value = true
    }
  }, 200)

  onMounted(() => {
    window.addEventListener('scroll', scrollListener)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListener)
  })

  return { isScrollBottom, scrollTop, clientHeight, scrollHeight }
}
