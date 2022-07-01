<template>
  <div>
    <!-- o,l,l,e,h -->
    {{ msg | toReverse }}
    <!-- HELLO -->
    <h1 :title="msg | strUp">{{ msg | strUp }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello',
    };
  },
  //局部过滤器
  filters: {
    toReverse(val) {
      return val.split('').reverse().join();
    },
  },
};
</script>

<style></style>
