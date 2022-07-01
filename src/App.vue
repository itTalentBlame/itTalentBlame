<template>
  <div>
    <span>{{ sum | reverse | toUp }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sum: "hello word",
    };
  },
  filters: {
    reverse(val) {
      return val.split("").reverse().join("");
    },
    toUp(val) {
      return val.toUpperCase();
    },
  },
};
</script>

<style>
</style>