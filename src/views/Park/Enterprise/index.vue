<script setup lang="ts">
import { ref, watch } from 'vue'

const money = ref()

// 实际要执行的处理函数
const handleMoneyChange = (newVal: string) => {
  console.log('防抖后的值:', newVal)
}

const debounceFn = (fn, t) => {
  let timerId
  return (...args) => {
    if (timerId) clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn(...args)
    }, t)
  }
}
const debouncedHandler = debounceFn(handleMoneyChange, 500)
watch(
  () => money.value,
  newValue => {
    debouncedHandler(newValue)
  }
)
let aa = [1, 2, 3]
let bb = new Array(1, 2, 3)
</script>

<template>
  <input v-model="money" type="text" name="" id="" />
</template>
<style lang="scss" scoped></style>
