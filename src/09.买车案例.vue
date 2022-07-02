<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="allCurrent" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="item in list" :key="item.id">
        <td>
          <input type="checkbox" v-model="item.select" />
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <span @click="reduce(item.id)">-</span>
          <input
            type="number"
            v-model.number="item.sum"
            style="text-align: center"
          />
          <span @click="add(item.id)">+</span>
        </td>
        <td>{{ item.price * item.sum }}</td>
        <td><button @click="del(item.id)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="AllDel">删除选中商品</button>
    <button @click="AllClear">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数:{{ AllSum }}</p>
      <p>总价:{{ AllPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: '奔驰', price: 555, sum: 0, select: false },
        { id: 2, name: '宝马', price: 666, sum: 0, select: false },
        { id: 3, name: '奥迪', price: 777, sum: 0, select: false },
      ],
    }
  },
  methods: {
    //删
    del(id) {
      const index = this.list.findIndex((item) => item.id == id)
      this.list.splice(index, 1)
    },

    //减
    reduce(id) {
      const index = this.list.findIndex((item) => item.id == id)
      this.list[index].sum--
      if (this.list[index].sum <= 0) this.list[index].sum = 0
    },

    //加
    add(id) {
      const index = this.list.findIndex((item) => item.id == id)
      this.list[index].sum++
    },

    AllDel() {
      this.list = this.list.filter((item) => !item.select)
    },
    AllClear() {
      this.list = []
    },
  },

  computed: {
    allCurrent: {
      set(val) {
        this.list.forEach((ele) => (ele.select = val))
      },
      get() {
        if (this.list.length == 0) return false
        return this.list.every((ele) => ele.select == true)
      },
    },
    AllPrice() {
      const checkedSelect = this.list.filter((item) => item.select)
      return checkedSelect.reduce((pre, next) => {
        return pre + next.price * next.sum
      }, 0)
    },
    AllSum() {
      const checkedSelect = this.list.filter((item) => item.select)
      return checkedSelect.reduce((pre, next) => {
        return pre + next.sum
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
