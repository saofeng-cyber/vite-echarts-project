<script setup lang="ts">
import PieChart from '@/components/PieChart.vue';
import BarChart from '@/components/BarChart.vue';
import LineChart from '@/components/LineChart.vue';
</script>
<template>
  <div class="dataScreen_main_lt">
    <div class="dataScreen_main_lt_tp">
      <!-- <div class="dataScreen_main_title">
                <span>实时医院统计</span>
                <img class="dataScreen_main_img" src="@/assets/images/dataScreen-title.png" alt="">
            </div> -->
      <!-- <div class="dataScreen_main_tp_nb">216908</div> -->
      <BarChart />
    </div>
    <div class="dataScreen_main_lt_ct">
      <!-- <div class="dataScreen_main_title">
                <span>实时医院统计</span>
                <img class="dataScreen_main_img" src="@/assets/images/dataScreen-title.png" alt="">
            </div> -->
      <LineChart />
    </div>
    <div class="dataScreen_main_lt_bt">
      <!-- <div class="dataScreen_main_title">
                <span>实时医院统计</span>
                <img class="dataScreen_main_img" src="@/assets/images/dataScreen-title.png" alt="">
            </div> -->
      <PieChart />
    </div>
  </div>
</template>
<style scoped lang="scss">
.dataScreen_main_lt {
  position: relative;
  flex: 1 1 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 64px;

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

  & .dataScreen_main_lt_tp {
    position: relative;
    width: 100%;
    height: 32%;
    // background-image: url("@/assets/images/dataScreen-main-lt.png");
    background-size: 100% 100%;
    // padding-top: 54px;

    & .dataScreen_main_tp_nb {
      font-size: 24px;
      color: #29fcff;
    }
  }

  & .dataScreen_main_lt_ct {
    width: 100%;
    height: 32%;
    // background-image: url("@/assets/images/dataScreen-main-lc.png");
    background-size: 100% 100%;
    // padding-top: 54px;
  }

  & .dataScreen_main_lt_bt {
    width: 100%;
    height: 32%;
    // background-image: url("@/assets/images/dataScreen-main-lb.png");
    background-size: 100% 100%;
    // padding-top: 54px;
  }
}
</style>
