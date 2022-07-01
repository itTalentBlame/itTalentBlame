<template>
  <div>
    <div v-for="item in arr" :key="item">
      <input type="checkbox" v-model="checkNum" :value="item" />
      <span>{{ item }}</span>
    </div>
    求和:{{ sumNum }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      checkNum: [],
    };
  },
  computed: {
    sumNum() {
      return this.checkNum.reduce((sum, next) => (sum += next), 0);
    },
  },
};
</script>

<style></style>
