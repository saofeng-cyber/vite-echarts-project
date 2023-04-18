import { useAppStore } from '@/stores/appStore';

export const useTheme = () => {
  const themeStore = useAppStore();
  const isDark = computed(() => themeStore.theme === 'dark');
  const toggleTheme = () => {
    if (isDark.value === true) {
      themeStore.setTheme('light');
    } else {
      themeStore.setTheme('dark');
    }
  };
  return {
    isDark,
    toggleTheme
  };
};
