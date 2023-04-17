<script setup lang="ts">
import { useEcharts } from '@/common/echarts';
import 'echarts-liquidfill';

const liquidFill = ref<HTMLElement | null>(null);
const liquidFillOptions = ref<any>({
  title: [
    {
      text: (0.6 * 100).toFixed(0) + '%',
      left: '49%',
      top: '35%',
      textAlign: 'center',
      textStyle: {
        fontSize: '14',
        fontWeight: 'normal',
        color: '#ffffff',
        align: 'center',
        textBorderColor: 'rgba(0, 0, 0, 0)',
        textShadowColor: '#000',
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 1
      }
    },
    {
      text: '医院上线率',
      left: '49%',
      top: '25%',
      textAlign: 'center',
      textStyle: {
        fontSize: '15',
        fontWeight: 'normal',
        color: '#ffffff',
        align: 'center',
        textBorderColor: 'rgba(0, 0, 0, 0)',
        textShadowColor: '#000',
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 1
      }
    }
  ],
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  series: [
    {
      type: 'liquidFill',
      radius: '70%',
      center: ['50%', '50%'],
      data: [0.5, 0.4, 0.3],
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 2,
          borderColor: '#31d8d5',
          shadowBlur: 20,
          shadowColor: '#50c1a7'
        }
      },
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#931ad2' // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(0, 209, 247,0.3)' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        }
      },
      label: {
        show: false
      },
      emphasis: {
        itemStyle: {
          opacity: 0.9
        }
      },
      backgroundStyle: {
        borderWidth: 1,
        // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [
            {
              offset: 0,
              color: '#0D2648' // 0% 处的颜色
            },
            {
              offset: 0.8,
              color: '#0D2648' // 100% 处的颜色
            },
            {
              offset: 1,
              color: '#931ad2' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        }
      }
    },
    {
      type: 'pie',
      radius: ['80%', '80%'],
      center: ['50%', '50%'],
      z: 1,
      label: {
        show: false
      },
      silent: true,
      itemStyle: {
        borderWidth: 4,
        borderType: [8, 10],
        borderDashOffset: 25,
        borderColor: '#fb7293',
        color: '#11144e',
        borderCap: 'round'
      },
      data: [100]
    }
  ]
});
onMounted(() => {
  useEcharts(liquidFill, liquidFillOptions);
});
</script>
<template>
  <div ref="liquidFill" class="liquidFill" />
</template>
<style scoped lang="scss">
.liquidFill {
  width: 100%;
  height: 100%;
}
</style>
