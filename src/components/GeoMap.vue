<script setup lang="ts">
import * as echarts from 'echarts';
import { ECOption, useEcharts } from '@/common/echarts';
import geoJson from './data/china.json';
import { onMounted, ref } from 'vue';
const DogSvg =
  'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
const mapData = [
  {
    fromName: '北京',
    toName: '上海',
    coords: [
      [116.4551, 40.2539],
      [121.4648, 31.2891]
    ],
    lineStyle: {
      color: '#e7ab0b'
    }
  },
  {
    fromName: '上海',
    toName: '北京',
    coords: [
      [121.4648, 31.2891],
      [116.4551, 40.2539]
    ],
    lineStyle: {
      color: '#c1bb1f'
    }
  },
  {
    fromName: '北京',
    toName: '广州',
    coords: [
      [116.4551, 40.2539],
      [113.5107, 23.2196]
    ],
    lineStyle: {
      color: '#f34e2b'
    }
  },
  {
    fromName: '北京',
    toName: '成都',
    coords: [
      [116.4551, 40.2539],
      [103.9526, 30.7617]
    ],
    lineStyle: {
      color: '#f56f1c'
    }
  },
  {
    fromName: '成都',
    toName: '北京',
    coords: [
      [103.9526, 30.7617],
      [116.4551, 40.2539]
    ],
    lineStyle: {
      color: '#f5a305'
    }
  },
  {
    fromName: '成都',
    toName: '新疆维吾尔自治区',
    coords: [
      [103.9526, 30.7617],
      [85.294711, 41.371801]
    ],
    lineStyle: {
      color: '#96cc34'
    }
  },
  {
    fromName: ' 新疆维吾尔自治区',
    toName: '成都',
    coords: [
      [85.294711, 41.371801],
      [103.9526, 30.7617]
    ],
    lineStyle: {
      color: '#f34e2b'
    }
  },
  {
    fromName: '广州',
    toName: '黑龙江省',
    coords: [
      [113.280637, 23.125178],
      [126.642464, 45.756967]
    ],
    lineStyle: {
      color: '#a6c62c'
    }
  }
];
const geoMapChart = ref<HTMLElement | null>(null);

const getMapJson = async () => {
  // const res = await fetch(url)
  // const geoJson = await res.json()
  const effectScatterData: any = geoJson.features.map((item) => {
    return item.properties.centroid;
  });
  echarts.registerMap('china', geoJson as any);
  const geoMapChartOptions = ref<ECOption>({
    tooltip: {
      trigger: 'item',
      textStyle: {
        color: '#fff'
      },
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    toolbox: {
      itemSize: 25,
      feature: {
        saveAsImage: {
          show: true,
          type: 'png',
          name: '地图',
          icon: 'path://M939.008 341.333333l-426.666667 426.666667-426.666666-426.666667h234.666666V0h384v341.333333h234.666667z m-853.333333 512h853.333333v170.666667h-853.333333v-170.666667z',
          title: '保存为图片',
          backgroundColor: 'rgba(0,0,0,0.5)',
          iconStyle: {
            color: '#fff',
            shadowColor: '#9571E9',
            shadowBlur: 10,
            borderWidth: 1,
            borderColor: '#9571E9'
          },
          emphasis: {
            iconStyle: {
              color: '#fff',
              shadowColor: '#9571E9'
            }
          }
        }
      }
    },
    geo: {
      map: 'china',
      roam: false,
      zoom: 1.4,
      center: [102.848234, 35.82333],
      label: {
        show: true,
        color: '#fff'
      },
      itemStyle: {
        areaColor: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [
            {
              offset: 0,
              color: '#931ad2'
            },
            {
              offset: 1,
              color: '#340e91'
            }
          ]
        },
        shadowColor: '#aa38dc',
        shadowBlur: 65,
        borderWidth: 0
      },
      emphasis: {
        label: {
          show: true,
          color: '#fff'
        },
        itemStyle: {
          areaColor: '#aa38dc'
        },
        shadowColor: '#340e91',
        shadowBlur: 65
      },
      select: {
        label: {
          show: true,
          color: '#fff'
        },
        itemStyle: {
          areaColor: 'rgb(18 65 136 / 92%)'
        }
      }
    },
    series: [
      {
        name: '',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        effect: {
          show: true,
          period: 3,
          trailLength: 0.01,
          color: 'red', //arrow箭头的颜色
          symbolSize: 3
          // roundTrip: true
        },
        lineStyle: {
          color: '#fff',
          width: 1,
          curveness: 0.2
        },
        data: mapData
      },
      {
        name: '',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
          show: true,
          period: 3,
          trailLength: 0.01,
          symbol: DogSvg,
          symbolSize: 20
          // roundTrip: true,
          // color: '#fff',
          // loop: true,
        },
        lineStyle: {
          color: '#fff',
          width: 1,
          opacity: 0.6,
          curveness: 0.2
        },
        data: mapData
      },
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        symbol: 'circle',
        symbolSize: 12,
        data: effectScatterData,
        colorBy: 'data'
      }
    ]
  });
  useEcharts(geoMapChart, geoMapChartOptions);
};
onMounted(() => {
  getMapJson();
});
</script>
<template>
  <div ref="geoMapChart" class="geoMapChart" />
</template>
<style scoped lang="scss">
.geoMapChart {
  width: 100%;
  height: 100%;
}
</style>
