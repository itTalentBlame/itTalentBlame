<template>
  <div>
    <h1>时间是：{{ time | formatTime(1) }}</h1>
    <h1>时间是：{{ time | formatTime(0) }}</h1>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      time: 1636450540055,
    };
  },

  filters: {
    formatTime(val, ele) {
      if (ele) return moment(val).format('YYYY-MM-DD');
      return moment(val).format('YYYY/MM/DD');
    },
  },
};
</script>

<style></style>
