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
        <td><input type="checkbox" v-model="item.c" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <span @click="sub(item.id)">-</span
          ><input type="text" v-model.number="item.count" /><span
            @click="add(item.id)"
            >+</span
          >
        </td>
        <td>{{ item.count * item.price }}</td>
        <td><button @click="del(item.id)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="delCount">删除选中商品</button>
    <button @click="delall">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数:{{ checkedCount }}</p>
      <p>总价:{{ sumPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: '奔驰', price: 2000, count: 0, c: false },
        { id: 2, name: '宝马', price: 3000, count: 0, c: false },
        { id: 3, name: '奥迪', price: 4000, count: 0, c: false },
      ],
    };
  },

  computed: {
    sumPrice() {
      const checkedPrice = this.list.filter((ele) => ele.c);
      return checkedPrice.reduce((sum, next) => {
        return sum + next.count * next.price;
      }, 0);
    },
    isAll: {
      set(id) {
        this.list.forEach((ele) => (ele.c = id));
      },
      get() {
        return this.list.every((ele) => ele.c === true);
      },
    },
  },
  methods: {
    //删除按钮
    del(id) {
      // 删除按钮 - 得到索引, 删除数组里元素
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    //点击数量减减操作
    sub(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      if (this.count < 0) this.list[index].count = 0;
      this.list[index].count--;
    },
    //点击数量加加操作
    add(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list[index].count++;
    },
    delall() {
      this.list = [];
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
</style>
