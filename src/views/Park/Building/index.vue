<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { babelParse } from 'vue/compiler-sfc'

const countdown = ref<number>(0) // 倒计时秒数
const btnText = ref<string>('发送验证码') // 按钮文本
let timer: number | null = null // 计时器

const send = () => {
  countdown.value = 3
  btnText.value = `还剩${countdown.value}秒`

  timer = setInterval(() => {
    countdown.value--
    btnText.value = `还剩${countdown.value}秒`
    if (countdown.value === 0) {
      btnText.value = `发送验证码`
      clearInterval(timer)
    }
  }, 1000)
}

// 节流函数
const throttle = (fn: Function, t: number = 1000) => {
  let timerId: number | null = null

  return () => {
    if (!timerId) {
      fn()
      timerId = setTimeout(() => {
        timerId = null
      }, t)
    }
  }
}

// 使用节流包装send函数，得到一个新的函数
const throttledSend = throttle(send, 3000)

// 点击发送验证码
const submit = () => {
  throttledSend()
  // send()
}

let aa = { id: 1, as: [1, 2, 3, 4] }

let babela = aa

babela.id = 1

console.log('22222', aa, babela)
</script>

<template>
  <div>节流函数</div>
  <el-button @click="submit">
    {{ btnText }}
  </el-button>
</template>
