<script setup lang="ts">
// import Header from '@/components/header/index.vue'
import MainLeft from '@/components/main/left/index.vue';
import MainRight from '@/components/main/right/index.vue';
import MainCenter from '@/components/main/center/index.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { getScale } from '@/hooks/scale';
import { CSSProperties } from 'vue';
import { useTheme } from '@/hooks/useTheme';
const { isDark, toggleTheme } = useTheme();
/* 获取最外层盒子 */
const dataScreenRef = ref<HTMLElement | null>(null);

const screenStyle = ref<CSSProperties>({
  transform: `scale(${getScale()}) translate(-50%, -50%)`,
  width: '1920px',
  height: '1080px'
});

const screenStyleResize = () => {
  screenStyle.value = {
    transform: `scale(${getScale()}) translate(-50%, -50%)`,
    width: '1920px',
    height: '1080px'
  };
};
onMounted(() => {
  window.addEventListener('resize', useDebounceFn(screenStyleResize, 250));
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', screenStyleResize);
});
</script>

<template>
  <main :class="[isDark ? 'screen_container_dark' : 'screen_container']">
    <div class="change_theme">
      <svg-icon
        :name="isDark ? 'moon' : 'sun'"
        :width="24"
        :height="24"
        fill="#fff"
        @click="toggleTheme"
      ></svg-icon>
    </div>
    <section class="dataScreen" ref="dataScreenRef" :style="screenStyle">
      <!-- <Header /> -->
      <main class="dataScreen_main">
        <MainLeft />
        <MainCenter />
        <MainRight />
      </main>
    </section>
  </main>
</template>

<style scoped lang="scss">
.screen_container_dark {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #100c2a;
}

.screen_container {
  position: relative;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-attachment: fixed;
  background-image: url('https://pic.imgdb.cn/item/643fec250d2dde5777559f48.png');
  overflow: hidden;
  object-fit: cover;
}

.change_theme {
  position: absolute;
  right: 16px;
  top: 12px;
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.dataScreen {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: top left;
  z-index: 999;
  transition: all 0.5s ease-in;

  .dataScreen_main {
    flex: 1;
    display: flex;
    width: 100%;
    padding: 12px 42px 20px;

    // background-color: beige;
  }
}
</style>
