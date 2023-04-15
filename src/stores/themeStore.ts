import { EchartTheme } from '@/common/echarts';

export const usethemeStore = defineStore('themestore', () => {
  const theme = ref<EchartTheme>('light');
  const changeTheme = (localTheme: EchartTheme) => {
    theme.value = localTheme;
  };
  return {
    theme,
    changeTheme
  };
});
