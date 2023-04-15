<script setup lang="ts">
import { ECOption, useEcharts } from '@/common/echarts';
import { LineSeriesOption } from 'echarts/charts';
const lineChart = ref<HTMLElement | null>(null)
interface Data {
    label: string;
    value: string[];
}

const colors = ["#FFA600", "#fb7293", "#FF4B7A"]
const gradientColors = [
    "rgba(254, 219, 101,0.1)",
    "rgb(248, 155, 235, 0.1)",
    "rgba(255, 75, 122, 0.1)",
];
const data = ref<Array<Data>>([
    {
        label: new Date().getFullYear() + '年',
        value: [
            "184",
            "90",
            "120",
            "0",
            "30",
            "100",
            "80",
            "300",
            "20",
            "510",
            "350",
            "180",
        ],
    },
    {
        label: new Date().getFullYear() - 1 + '年',
        value: [
            "118",
            "509",
            "366",
            "162",
            "380",
            "600",
            "321",
            "158",
            "352",
            "474",
            "154",
            "22",
        ],
    },
    {
        label: new Date().getFullYear() - 2 + '年',
        value: [
            "548",
            "259",
            "113",
            "90",
            "69",
            "512",
            "23",
            "49",
            "28",
            "420",
            "313",
            "156",
        ],
    }
])
const lineOptions = ref<ECOption>({
    grid: {
        top: '8%',
        bottom: '5%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgb(0, 0, 0, 0.1)',
        textStyle: {
            color: '#fff'
        },
        borderRadius: 10,
    },
    legend: {
        orient: 'horizontal',
        right: '3%',
        top: '6%',
        data: data.value.map((item) => item.label),
        textStyle: {
            color: '#fff'
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7', '8'],
        axisLabel: {
            color: '#fff',
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "#192a44",
            },
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#fff',
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#233653",
            },
        },
    },
    series: data.value.map((item, index): LineSeriesOption => {
        return {
            name: data.value[index].label,
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 1
            },
            tooltip: {
                show: true,
            },
            data: item.value,
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        { offset: 0, color: colors[index] },
                        { offset: 1, color: gradientColors[index] }
                    ]
                },
                shadowColor: "rgba(215,163,223, 0.6)",
                shadowBlur: 20
            }
        }
    }),
    // series: [
    //     {
    //         name: '访问来源1',
    //         type: 'line',
    //         stack: 'Total',
    //         smooth: true,
    //         lineStyle: {
    //             width: 1
    //         },
    //         tooltip: {
    //             show: true,
    //         },
    //         data: [
    //             { value: 335, name: '直接访问' },
    //             { value: 310, name: '邮件营销' },
    //             { value: 234, name: '联盟广告' },
    //             { value: 135, name: '视频广告' },
    //             { value: 320, name: '百度' },
    //             { value: 251, name: '谷歌' },
    //             { value: 147, name: '必应' },
    //             { value: 102, name: '其他' }
    //         ],
    //         areaStyle: {
    //             opacity: 0.5,
    //             color: {
    //                 type: 'linear',
    //                 x: 0,
    //                 y: 0,
    //                 x2: 0,
    //                 y2: 1,
    //                 colorStops: [
    //                     { offset: 0, color: 'rgb(128, 255, 165)' },
    //                     { offset: 1, color: 'rgb(1, 191, 236)' }
    //                 ]
    //             }
    //         },
    //         animationDelay: 2000
    //     },
    //     {
    //         name: '访问来源2',
    //         type: 'line',
    //         stack: 'Total',
    //         smooth: true,
    //         lineStyle: {
    //             width: 0
    //         },
    //         data: [
    //             { value: 120, name: '直接访问' },
    //             { value: 350, name: '邮件营销' },
    //             { value: 180, name: '联盟广告' },
    //             { value: 360, name: '视频广告' },
    //             { value: 430, name: '百度' },
    //             { value: 400, name: '谷歌' },
    //             { value: 500, name: '必应' },
    //             { value: 80, name: '其他' }
    //         ],
    //         areaStyle: {
    //             opacity: 0.5,
    //             color: {
    //                 type: 'linear',
    //                 x: 0,
    //                 y: 0,
    //                 x2: 1,
    //                 y2: 1,
    //                 colorStops: [
    //                     { offset: 0, color: 'rgb(55, 162, 255)' },
    //                     { offset: 1, color: 'rgb(116, 21, 219)' }
    //                 ]
    //             }
    //         }
    //     }
    // ]
});
useEcharts(lineChart, lineOptions)
</script>
<template>
    <div ref="lineChart" class="lineChart" />
</template>
<style scoped lang="scss">
.lineChart {
    width: 100%;
    height: 100%;
}
</style>