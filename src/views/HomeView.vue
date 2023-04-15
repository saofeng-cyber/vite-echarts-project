<script setup lang="ts">
// import Header from '@/components/header/index.vue'
import MainLeft from '@/components/main/left/index.vue'
import MainRight from '@/components/main/right/index.vue'
import MainCenter from '@/components/main/center/index.vue'
import { getScale } from '@/hooks/scale';
import { CSSProperties } from 'vue';
import { usethemeStore } from '@/stores/themeStore';
const useTheme = usethemeStore()
/* 获取最外层盒子 */
const dataScreenRef = ref<HTMLElement | null>(null);

const screenStyle = ref<CSSProperties>({
    transform: `scale(${getScale()}) translate(-50%, -50%)`,
    width: '1920px',
    height: '1080px'
})


const screenStyleResize = () => {
    screenStyle.value = {
        transform: `scale(${getScale()}) translate(-50%, -50%)`,
        width: '1920px',
        height: '1080px'
    }
}
onMounted(() => {
    // screenStyleResize()
    window.addEventListener('resize', useDebounceFn(screenStyleResize, 250));
    useTheme.changeTheme('light')
})

onBeforeUnmount(() => {
    window.removeEventListener("resize", screenStyleResize);
});
</script>

<template>
    <main class="screen_container">
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
.screen_container {
    position: relative;
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url("@/assets/images/bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow: hidden;
    object-fit: cover;

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
}
</style>