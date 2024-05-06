<script setup lang="ts">
import { ECOption, useEcharts } from '@/common/echarts';
import graph from './data/graph.json';
import { onMounted, ref } from 'vue';
const graphChart = ref<HTMLElement | null>(null);

const graphOptions = ref<ECOption>({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
    axisPointer: {
      type: 'shadow'
    },
    textStyle: {
      color: '#fff'
    },
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  grid: {
    top: '5%',
    containLabel: true
  },
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      name: 'Les Miserables',
      type: 'graph',
      layout: 'circular',
      circular: {
        rotateLabel: true
      },
      data: graph.nodes,
      links: graph.links,
      categories: graph.categories,
      roam: true,
      label: {
        position: 'right',
        formatter: '{b}'
      },
      lineStyle: {
        color: 'source',
        curveness: 0.4
      }
    }
  ]
});
onMounted(() => {
  useEcharts(graphChart, graphOptions);
});
</script>
<template>
  <div ref="graphChart" class="graphChart" />
</template>
<style scoped lang="scss">
.graphChart {
  width: 100%;
  height: 100%;
}
</style>
