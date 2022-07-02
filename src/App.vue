<template>
  <div>
    <div>国内粉丝{{ fans | chinaFans(3) }}</div>
    <div>国外粉丝{{ fans | chinaFans(4) }}</div>
    <!-- 处理时间戳 -->
    <div>{{ timer | timerFn("YYYY-MM-DD") }}</div>
    <div>{{ timer | timerFn("YYYY/MM/DD") }}</div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      fans: 16876986,
      timer: 1636450540055,
    };
  },
  filters: {
    chinaFans(val, index) {
      return (
        val / Math.pow(10, index).toFixed(index) + `${index == 3 ? "千" : "万"}`
      );
    },
    timerFn(val, end) {
      return moment(val).format(end);
    },
  },
};
</script>

<style>
</style>