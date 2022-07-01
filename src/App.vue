<template>
  <div>
    <h2>用同一个过滤器处理粉丝数量转换</h2>

    <h4>国内网站：{{ 1876986 | person(1) }}</h4>

    <h4>国外网站：{{ 1876986 | person(0) }}</h4>
  </div>
</template>

<script>
export default {
  filters: {
    person(val, flag) {
      if (flag) return (val / 10000).toFixed(4) + '万'
      return (val / 1000).toFixed(3) + '千'
    },
  },
}
</script>

<style></style>
