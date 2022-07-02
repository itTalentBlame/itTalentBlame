<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="isAll" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="item in list" :key="item.id">
        <td><input type="checkbox" v-model="item.buy" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.money }}</td>
        <td>
          <button @click="reduce(item.id)">-</button>
          <input type="number" v-model="item.num" />
          <button @click="add(item.id)">+</button>
        </td>
        <td>{{ item.money * item.num }}</td>
        <td><button @click="del(item.id)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="delChecked">删除选中商品</button>
    <button @click="delAll">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数:{{ quantity }}</p>
      <p>总价:{{ moneyAll }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "奔驰",
          time: "2020-08-01",
          money: 200,
          num: 0,
          buy: false,
        },
        {
          id: 2,
          name: "宝马",
          time: "2020-08-02",
          money: 300,
          num: 0,
          buy: false,
        },
        {
          id: 3,
          name: "奥迪",
          time: "2020-08-03",
          money: 400,
          num: 0,
          buy: false,
        },
      ],
    };
  },
  methods: {
    //减
    reduce(id) {
      const index = this.list.findIndex((item) => item.id == id);
      this.list[index].num--;
      // if (this.list[index].num <= 0) this.list[index].num = 0;
    },
    //加
    add(id) {
      const index = this.list.findIndex((item) => item.id == id);
      this.list[index].num++;
    },
    // 删除
    del(id) {
      const index = this.list.findIndex((item) => item.id == id);
      this.list.splice(index, 1);
    },
    // 删除所有
    delAll() {
      this.list = [];
    },
    // 删除选中
    delChecked() {
      this.list = this.list.filter((item) => !item.buy);
    },
  },
  computed: {
    //全选
    isAll: {
      set(val) {
        this.list.forEach((item) => (item.buy = val));
      },
      get() {
        if (this.list.length === 0) return false;
        return this.list.every((item) => {
          return item.buy;
        });
      },
    },
    //统计选中商品的件数
    quantity() {
      //选出勾选了的商品
      const checkedBuy = this.list.filter((item) => item.buy);
      //将勾选商品的商品
      return checkedBuy.reduce((item, next) => {
        return item + next.num * 1;
      }, 0);
    },
    // 选中的价格
    moneyAll() {
      const checkedBuy = this.list.filter((item) => item.buy);
      return checkedBuy.reduce((item, next) => {
        return item + next.num * next.money;
      }, 0);
    },
  },
  watch: {
    list: {
      handler() {
        this.list.forEach((item) => {
          if (item.num < 0) {
            item.num = 0;
          }
          item.num = item.num * 1;
        });
      },
      deep: true,
    },
  },
};
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
/* 去除number的默认样式 */
input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
