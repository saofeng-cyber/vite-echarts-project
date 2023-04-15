<template>
  <!-- 热门板块 -->
  <!-- <div class="echarts-header">
    <span>排名</span>
    <span>景区</span>
    <span>预约数量</span>
  </div> -->
  <div class="hotPlateChart" ref="hotPlateChart"></div>
</template>

<script setup lang="ts">
import { ECOption, useEcharts } from "@/common/echarts";
// import { ranking1, ranking2, ranking3, ranking4 } from "./ranking-icon";
const hotPlateChart = ref<HTMLElement | null>(null);
// interface ChartProp {
//   name: string;
//   value: number;
//   percentage: string;
//   maxValue: number;
// }
const hotPlateChartOption = ref<ECOption>({
  grid: {
    left: '3%',
    right: '3%',
    top: '8%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: "value",
    show: false
  },
  yAxis: [
    {
      type: "category",
      data: ['分诊', '预约', '体检', '血透', '心电'],
      axisLabel: {
        fontSize: 16,
        color: "#fff",
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      inverse: true
    },
    {
      type: "category",
      data: [60, 30, 25 ,20, 16],
      axisLabel: {
        fontSize: 16,
        color: "#fff",
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      inverse: true
    }
  ],
  series: [
    {
      type: "bar",
      yAxisIndex: 0,
      barWidth: 12,
      data: [60, 30, 25 ,20, 16],
      itemStyle: {
        borderRadius: 6,
      },
      colorBy: "data",
      zlevel: 1,
      animationDelay: 1000,
      animationEasing: "elasticOut",
    },
    {
      type: "bar",
      yAxisIndex: 1,
      barWidth: 18,
      barGap: "-100%",
      data: [100, 100, 100, 100, 100],
      itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 1,
          borderRadius: 15,
        },
      color: '#2e5384',
    }
  ]
})
useEcharts(hotPlateChart, hotPlateChartOption)
</script>
<style lang="scss" scoped>
.hotPlateChart {
  width: 100%;
  height: 100%;
}
</style>
