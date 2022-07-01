<template>
  <div>
    <span>{{ sum | reverse | toUp }}</span>
    <div>{{ date | momentTime }}</div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      sum: "hello word",
      date: new Date(),
    };
  },
  filters: {
    reverse(val) {
      return val.split("").reverse().join("");
    },
    toUp(val) {
      return val.toUpperCase();
    },
    //格式化时间
    momentTime(val) {
      return moment(val).format("YYYY-MM-DD");
    },
  },
};
</script>

<style>
</style>