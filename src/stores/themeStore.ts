import { EchartTheme } from '@/common/echarts';
import { AppSetting, getSettingTheme, setSettingTheme } from './help';

export const usethemeStore = defineStore('themestore', {
  state: (): AppSetting => getSettingTheme(),
  actions: {
    setTheme(theme: EchartTheme) {
      this.theme = theme;
      this.recordState();
    },
    recordState() {
      setSettingTheme(this.$state);
    }
  }
});
