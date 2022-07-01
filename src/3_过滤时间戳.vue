<template>
  <div>
    <h2>用同一个过滤器处理时间戳转换</h2>
    <h4>{{ 1656676867 | format }}</h4>
    <h4>{{ 1656676867 | format('YYYY/MM/DD') }}</h4>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  filters: {
    format(val, tpl = 'YYYY-MM-DD') {
      return moment(val).format(tpl)
    },
  },
}
</script>

<style></style>
