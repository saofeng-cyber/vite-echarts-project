<script setup lang="ts">
import { ECOption, useEcharts } from '@/common/echarts';
const pieChart = ref<HTMLElement | null>(null);
const pieOptions = ref<ECOption>({
  grid: {
    top: '5%',
    bottom: '5%',
    containLabel: true
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
    backgroundColor: 'rgb(0, 0, 0, 0.1)',
    textStyle: {
      color: '#fff'
    }
  },
  legend: {
    orient: 'vertical',
    right: 0,
    top: 'center',
    textStyle: {
      color: '#fff'
    },
    formatter: '{name}'
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      center: ['40%', '50%'],
      radius: ['45%', '80%'],
      colorBy: 'data',
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      itemStyle: {
        shadowColor: 'rgba(120, 110, 120, 0.5)',
        shadowBlur: 20,
        borderRadius: 25
      },
      data: [
        { value: 335, name: '直接访问' },
        { value: 320, name: '百度' },
        { value: 251, name: '谷歌' },
        { value: 250, name: '必应' },
        { value: 320, name: '其他' }
      ],
      animationType: 'scale',
      animationDelay: 1200
    },
    {
      name: '',
      type: 'pie',
      radius: ['0%'],
      center: ['40%', '50%'],
      // color: 'none',
      itemStyle: {
        shadowColor: 'rgba(0, 0, 120, 0.5)',
        shadowBlur: 20
      },
      zlevel: -1,
      data: [
        {
          value: 100,
          name: '',
          label: {
            show: true,
            formatter: '{a|实时医院统计}',
            rich: {
              a: {
                align: 'center',
                color: '#fff',
                fontSize: 16
              }
            },
            position: 'center'
          }
        }
      ]
    }
  ]
});
const initCharts = () => {
  useEcharts(pieChart, pieOptions);
};
onMounted(() => {
  initCharts();
});
</script>
<template>
  <div ref="pieChart" class="pieChart" />
</template>
<style scoped lang="scss">
.pieChart {
  width: 100%;
  height: 100%;
}
</style>
