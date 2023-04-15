<script setup lang="ts"></script>
<template>
    <header class="dataScreen_header">
        <div class="header-lf">
            <span class="header_lf_title">预约</span>
        </div>
        <div class="header-ct">
            <span class="header_ct_title">智慧医疗服务可视化大平台</span>
        </div>
        <div class="header-rt">
            <span class="header_rt_title">分诊</span>
        </div>
    </header>
</template>
<style scoped lang="scss">
.dataScreen_header {
    display: flex;
    width: 100%;
    height: 38px;
    user-select: none;
    // background-color: antiquewhite;

    .header-lf,
    .header-rt {
        position: relative;
        width: 567px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .header-lf {
        background-image: url("@/assets/images/dataScreen-header-left-bg.png");

        & .header_lf_title {
            width: 120px;
            height: 100%;
            text-align: center;
            line-height: 38px;
            position: absolute;
            color: #29fcff;
            top: 0;
            right: 0;
            background-image: url("@/assets/images/dataScreen-header-btn-bg-l.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
    }

    .header-rt {
        background-image: url("@/assets/images/dataScreen-header-right-bg.png");

        & .header_rt_title {
            width: 120px;
            height: 100%;
            text-align: center;
            line-height: 38px;
            position: absolute;
            color: #29fcff;
            top: 0;
            left: 0;
            background-image: url("@/assets/images/dataScreen-header-btn-bg-r.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
    }

    .header-ct {
        flex: 1;
        height: 82px;
        background-image: url("@/assets/images/dataScreen-header-center-bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        text-align: center;
        line-height: 82px;
        & .header_ct_title {
            color: #29fcff;
            font-size: 24px;
        }
    }
}
</style>