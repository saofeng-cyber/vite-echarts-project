<script setup lang="ts">
import GeoMap from '@/components/GeoMap.vue';
import LineChart from '@/components/LineChart.vue';
</script>
<template>
  <div class="dataScreen_main_ct">
    <div class="dataScreen_main_ct_tp">
      <GeoMap />
    </div>
    <div class="dataScreen_main_ct_ct">
      <LineChart />
    </div>
  </div>
</template>
<style scoped lang="scss">
.dataScreen_main_ct {
  position: relative;
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  height: 100%;

  .dataScreen_main_ct_tp {
    height: 68%;
  }
  .dataScreen_main_ct_ct {
    height: 32%;
  }
}
</style>
