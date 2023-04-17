<script setup lang="ts">
import { ECOption, useEcharts } from '@/common/echarts';
const barChart = ref<HTMLElement | null>(null);
const barOptions = ref<ECOption>({
  grid: {
    top: '5%',
    bottom: '5%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgb(0, 0, 0, 0.1)',
    textStyle: {
      color: '#fff'
    },
    borderRadius: 10
  },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他'],
    axisLabel: {
      color: '#fff'
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      color: '#fff'
    },
    splitLine: {
      show: false
    }
  },
  series: [
    {
      name: '访问来源',
      type: 'bar',
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 320, name: '百度' },
        { value: 251, name: '谷歌' },
        { value: 147, name: '必应' },
        { value: 102, name: '其他' }
      ],
      colorBy: 'data',
      labelLine: {
        show: false
      },
      itemStyle: {
        borderCap: 'round',
        borderRadius: 15,
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#df9fff'
            },
            {
              offset: 1,
              color: '#aa0a7a'
            }
          ]
        },
        shadowColor: 'rgba(120, 110, 120, 0.6)',
        shadowBlur: 20
      },
      animationDelay: 500
    }
  ]
});
onMounted(() => {
  useEcharts(barChart, barOptions);
});
</script>
<template>
  <div ref="barChart" class="barChart" />
</template>
<style scoped lang="scss">
.barChart {
  width: 100%;
  height: 100%;
}
</style>
