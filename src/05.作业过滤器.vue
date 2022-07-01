<template>
  <div>
    国内网站:粉丝数量:{{ msg | num(1) }}------外国网站:粉丝数量:{{
      msg | num(0)
    }}
    <hr />
    时间: {{ msg1 | initData('-') }} 时间: {{ msg1 | initData('/') }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 1876986,
      msg1: 1636450540055,
    }
  },
  filters: {
    num(val, index) {
      if (index == 1) return (val / 10000).toFixed(4) + `万`
      else if (index == 0) return (val / 1000).toFixed(3) + `千`
    },
    initData(val, splice) {
      const date = new Date(val)
      const y = date.getFullYear()
      const m = date.getMonth() + 1
      const d = date.getDate()
      return y + splice + (m > 9 ? m : '0' + m) + splice + (d > 9 ? d : '0' + d)
    },
  },
}
</script>

<style></style>
