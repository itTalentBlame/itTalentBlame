<template>
  <div>
    <div>国内粉丝{{ fans | chinaFans(1) }}</div>
    <div>国外粉丝{{ fans | chinaFans(0) }}</div>
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
      fans: "16876986",
      timer: 1636450540055,
    };
  },
  filters: {
    chinaFans(val, flag) {
      if (flag) {
        return (
          val
            .split("")
            .splice(0, val.length - 4)
            .join("") +
          "." +
          val
            .split("")
            .splice(val.length - 4)
            .join("") +
          "万"
        );
      } else {
        return (
          val
            .split("")
            .splice(0, val.length - 3)
            .join("") +
          "." +
          val
            .split("")
            .splice(val.length - 3)
            .join("") +
          "千"
        );
      }
    },
    timerFn(val,end) {
      return moment(val).format(end);
    },
  },
};
</script>

<style>
</style>