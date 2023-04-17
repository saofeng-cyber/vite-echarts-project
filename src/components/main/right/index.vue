<script setup lang="ts">
import LiquidFill from '@/components/LiquidFill.vue';
import GraphCircular from '@/components/GraphCircular.vue';
import HotPlateChart from '@/components/HotPlateChart.vue';
</script>
<template>
  <div class="dataScreen_main_rt">
    <div class="dataScreen_main_rt_tp">
      <!-- <div class="dataScreen_main_title">
                <span>实时医院统计</span>
                <img class="dataScreen_main_img" src="@/assets/images/dataScreen-title.png" alt="">
            </div> -->
      <LiquidFill />
    </div>
    <div class="dataScreen_main_rt_ct">
      <!-- <div class="dataScreen_main_title">
                <span>实时医院统计</span>
                <img class="dataScreen_main_img" src="@/assets/images/dataScreen-title.png" alt="">
            </div> -->
      <GraphCircular />
    </div>
    <div class="dataScreen_main_rt_bt">
      <!-- <div class="dataScreen_main_title">
                <span>实时医院统计</span>
                <img class="dataScreen_main_img" src="@/assets/images/dataScreen-title.png" alt="">
            </div> -->
      <HotPlateChart />
    </div>
  </div>
</template>
<style scoped lang="scss">
.dataScreen_main_rt {
  position: relative;
  flex: 1 1 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 64px;

  .dataScreen_main_title {
    position: absolute;
    display: flex;
    flex-direction: column;
    color: #fff;
    top: 0px;
    left: 0px;

    span {
      margin-bottom: 4px;
    }

    .dataScreen_main_img {
      width: auto;
      height: 5px;
    }
  }

  & .dataScreen_main_rt_tp {
    position: relative;
    width: 100%;
    height: 32%;
    // background-image: url("@/assets/images/dataScreen-main-lt.png");
    background-size: 100% 100%;
    // padding-top: 54px;
  }

  & .dataScreen_main_rt_ct {
    position: relative;
    width: 100%;
    height: 32%;
    // background-image: url("@/assets/images/dataScreen-main-lc.png");
    background-size: 100% 100%;
    // padding-top: 54px;
  }

  & .dataScreen_main_rt_bt {
    position: relative;
    width: 100%;
    height: 32%;
    // background-image: url("@/assets/images/dataScreen-main-lb.png");
    background-size: 100% 100%;
    // padding-top: 54px;
  }
}
</style>
