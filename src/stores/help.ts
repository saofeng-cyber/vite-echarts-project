const LOCAL_NAME = 'appSetting';
import { EchartTheme } from '@/common/echarts';
import { ss } from '@/common/storage';
export interface AppSetting {
  theme: EchartTheme;
}
export const getSettingTheme = (): AppSetting => {
  return ss.get(LOCAL_NAME) || { theme: 'light' };
};
export const setSettingTheme = (appSetting: AppSetting) => {
  ss.set(LOCAL_NAME, appSetting);
};
