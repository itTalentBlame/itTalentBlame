<template>
  <div>
    <div>
      <span>姓:</span>
      <input type="text" v-model="firsName" />
      <br />
      <span>名:</span>
      <input type="text" v-model="secName" />
      <br />
      <span>全称:</span>
      <input type="text" v-model="fullName" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firsName: '',
      secName: '',
    }
  },
  computed: {
    fullName: {
      get() {
        return this.firsName ? this.firsName + `.` + this.secName : ''
      },
      set(val) {
        const arr = val.split('.')
        this.firsName = arr[0] || ''
        this.secName = arr[1] || ''
      },
    },
  },
}
</script>

<style></style>
