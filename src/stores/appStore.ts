import { EchartTheme } from '@/common/echarts';
import { AppSetting, getSettingTheme, setSettingTheme } from './help';
import { defineStore } from 'pinia';

export const useAppStore = defineStore('appstore', {
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
