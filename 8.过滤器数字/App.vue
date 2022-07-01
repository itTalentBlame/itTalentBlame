<template>
  <div>
    <h1>国内网站粉丝数量：{{ count | inCount(1) }}</h1>
    <h1>国外网站粉丝数量：{{ count | inCount(0) }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1876986,
    };
  },

  filters: {
    inCount(val, ele) {
      if (ele) return val / 10000 + '万';
      return val / 1000 + '千';
    },
  },
};
</script>

<style></style>
