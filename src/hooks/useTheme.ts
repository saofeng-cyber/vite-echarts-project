import { usethemeStore } from '@/stores/themeStore';

export const useTheme = () => {
  const themeStore = usethemeStore();
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
