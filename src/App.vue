<template>
    <div>
      用户名: <input type="text" v-model="user.username"><br>
      密码:<input type="text" v-model="user.password">
    </div>
</template>

<script>
export default {
    data(){
      return{
        user:{
          username:'',
          password:''
        }
      }
    },
    watch:{
      user:{
        handler(newval){
          console.log(newval);
        },
        //深侦听
        deep:true,
        //立即侦听
        immediate:true
      }
    }
}
</script>

<style>

</style>