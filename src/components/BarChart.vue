<script setup lang="ts">
import { useEcharts } from '@/common/echarts';
import { BarSeriesOption } from 'echarts';
import { onMounted, ref, watch } from 'vue';
const props = defineProps<{
  barData: Array<{ name: string; value: number }>;
}>();
const barChart = ref<HTMLElement | null>(null);
const barOptions = ref<echarts.ComposeOption<BarSeriesOption>>({
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
      data: props.barData as any,
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
const { updateEchartsByData } = useEcharts(barChart, barOptions);
onMounted(updateEchartsByData);
watch(
  () => props.barData,
  (newVal: any) => {
    if (barOptions.value) {
      if (barOptions.value.series instanceof Array) {
        barOptions.value.series[0].data = newVal;
      }
      updateEchartsByData();
    }
  }
);
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
