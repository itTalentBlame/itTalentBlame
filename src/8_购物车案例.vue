<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="isAllBuy" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="(item, index) in list" :key="index">
        <td><input type="checkbox" v-model="item.isBuy" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <span @click="item.count <= 0 ? (item.count = 0) : item.count--"
            >-</span
          ><input
            style="text-align: center"
            type="number"
            v-model.number="item.count"
          /><span @click="item.count++">+</span>
        </td>
        <td>{{ item.price * item.count }}</td>
        <td><button @click="del(index)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="delBuy">删除选中商品</button>
    <button @click="clearBuy">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数: {{ isAllnum }}</p>
      <p>总价: {{ isAllPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: '奔驰', price: 387999, count: 0, isBuy: false },
        { id: 2, name: '宝马', price: 356998, count: 0, isBuy: true },
        { id: 3, name: '奥迪', price: 320998, count: 0, isBuy: false },
      ],
    }
  },
  methods: {
    del(index) {
      this.list.splice(index, 1)
    },
    delBuy() {
      this.list = this.list.filter((item) => item.isBuy !== true)
    },
    clearBuy() {
      this.list = []
    },
  },
  computed: {
    isAllBuy: {
      get() {
        if (this.list.length == 0) return false
        return this.list.every((item) => item.isBuy)
      },
      set(val) {
        return this.list.forEach((item) => (item.isBuy = val))
      },
    },
    isAllnum() {
      const buys = this.list.filter((item) => item.isBuy)
      return buys.reduce((pre, item) => pre + item.count, 0)
    },
    isAllPrice() {
      const buys = this.list.filter((item) => item.isBuy)
      return buys.reduce((pre, item) => {
        return pre + item.price * item.count
      }, 0)
    },
  },
}
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
input[type='number'] {
  -moz-appearance: textfield;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
