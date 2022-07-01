<template>
  <div>
    <h2>用同一个过滤器处理粉丝数量转换</h2>

    <h4>国内网站：{{ 1876986 | person }}</h4>

    <h4>国外网站：{{ 1876986 | person(3) }}</h4>
  </div>
</template>

<script>
export default {
  filters: {
    person(val, tpl = 4) {
      const arr = (val + '').split('')
      const lastnum = arr.slice(arr.length - tpl).join('')
      const firstnum = arr.slice(0, arr.length - tpl).join('')
      return ` ${firstnum}.${lastnum}${tpl == 4 ? '万' : '千'} `
    },
  },
}
</script>

<style></style>
