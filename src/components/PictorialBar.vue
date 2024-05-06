<script setup lang="ts">
import { ref } from 'vue';
const pictorialBar = ref<HTMLElement | null>(null);
</script>
<template>
  <div class="pictorialBar" ref="pictorialBar"></div>
</template>
<style scoped lang="scss">
.pictorialBar {
  width: 100%;
  height: 100%;
}
</style>
