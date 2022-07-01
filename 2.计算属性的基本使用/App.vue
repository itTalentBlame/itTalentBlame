<template>
  <div>
    购物车商品总价：{{ sumPrice }}
    <p>总价为：{{ sumPrice }}</p>
    <p>总价为：{{ sumPrice }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 5, // 商品数量
      price: 98, // 单价
      coupon: 400, // 优惠券
    };
  },
  computed: {
    sumPrice() {
      console.log('计算');
      return this.total * this.price >= 500
        ? this.total * this.price - this.coupon
        : this.total * this.price;
    },
  },
};
</script>
