import * as echarts from 'echarts/core';
import { useAppStore } from '@/stores/appStore';
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineChart,
  LineSeriesOption,
  PieChart,
  PieSeriesOption,
  GraphChart,
  GraphSeriesOption,
  MapChart,
  MapSeriesOption,
  LinesChart,
  LinesSeriesOption,
  EffectScatterChart,
  EffectScatterSeriesOption
} from 'echarts/charts';
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  LegendComponent,
  LegendComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { ComputedRef, Ref, effectScope, nextTick, onScopeDispose, watch } from 'vue';
// import { useElementSize } from '@vueuse/core';
import { computed } from 'vue';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | DatasetComponentOption
  | PieSeriesOption
  | ToolboxComponentOption
  | GraphSeriesOption
  | MapSeriesOption
  | LinesSeriesOption
  | EffectScatterSeriesOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  LegendComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  PieChart,
  ToolboxComponent,
  GraphChart,
  MapChart,
  LinesChart,
  EffectScatterChart
]);

export type EchartTheme = 'light' | 'dark';

/**
 *
 * @param el domRef
 * @param options ECOption
 */
export const useEcharts = (el: Ref<HTMLElement | null | undefined>, options: Ref<any>) => {
  const useApp = useAppStore();
  const theme = computed(() => useApp.theme);
  let echartsInstance: echarts.ECharts | null = null;
  async function renderEcharts(): Promise<void> {
    if (el.value) {
      await nextTick();
      echartsInstance = echarts.init(el.value!, theme.value);
      echartsInstance.setOption(options.value);
    }
  }

  // function resizeEcharts(): void {
  //   if (echartsInstance) {
  //     echartsInstance?.resize();
  //   }
  // }

  function destroyEcharts(): void {
    echartsInstance?.dispose();
  }

  function isRendered() {
    return Boolean(el.value && echartsInstance);
  }

  function updateEcharts() {
    destroyEcharts();
    renderEcharts();
  }

  // const initialSize = { width: 0, height: 0 };

  // const { width, height } = useElementSize(el, initialSize);

  const scope = effectScope();

  scope.run(() => {
    // 监听dom元素变化
    // watch([() => width.value, () => height.value], ([newWidth, newHeight]) => {
    //   if (newWidth === 0 && newHeight === 0) {
    //     // 节点被删除 将chart置为空
    //     echartsInstance = null;
    // }
    //   if (isRendered()) {
    //     resizeEcharts();
    //   } else {
    //     renderEcharts();
    //   }
    // });
    // 更换主题的监听

    // 数据更新

    watch(
      () => theme.value,
      () => {
        updateEcharts();
      }
    );
  });

  function updateEchartsByData() {
    if (isRendered()) {
      echartsInstance?.setOption(options.value);
    } else {
      renderEcharts();
    }
  }

  onScopeDispose(() => {
    destroyEcharts();
    scope.stop();
  });

  updateEcharts();
  window.addEventListener('resize', () => {
    if (isRendered()) updateEcharts();
    else renderEcharts();
  });

  return {
    updateEchartsByData
  };
};

// function debance(duration: number, callfun: Function) {
//   let timer: any = null;
//   return function () {
//     if (timer) clearInterval(timer);
//     timer = setInterval(() => {
//       this.apply(callfun);
//     }, duration);
//   };
// }
