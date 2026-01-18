<script setup lang="ts"></script>

<template>
  <div>
    <div class="h-12 backdrop-blur-sm">1</div>
    <CpIcon class="text-2xl transform rotate-360" name="hamburger"></CpIcon>
  </div>
</template>
<style lang="scss" scoped>
.is-active {
  transform: rotate(360deg);
}
</style>
