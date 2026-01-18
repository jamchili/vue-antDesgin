<script setup lang="ts">
import { ref } from 'vue'

const aa = ref()
</script>

<template>
  <h1>You did it!</h1>
  <el-input-tag
    v-model="aa"
    placeholder="Please input"
    aria-label="Please click the Enter key after input"
  />
</template>

<style scoped></style>
