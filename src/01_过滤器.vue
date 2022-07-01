<template>
  <div>
    {{ msg | toUp }}
    <br />
    <h2 v-bind:title="msg | toUp">{{ msg | toReverse('*') }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello, world!',
    }
  },
  filters: {
    toUp(val) {
      return val.toUpperCase()
    },
  },
}
</script>

<style></style>
