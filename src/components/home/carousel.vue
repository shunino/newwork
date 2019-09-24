<template>
    <el-carousel height="100%" class="mycarrousel" trigger="click" arrow="never" :autoplay="false">
      <el-carousel-item v-for="item in 1" :key="item">
        <img src="../../../static/map2.jpg">
      </el-carousel-item>
    </el-carousel>
</template>

<script>
  export default {
    name: 'carousel',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
<style scoped>
  .mycarrousel{
    width: 500px;
  }
  .mycarrousel img{
      width: 100%;
      height:100%;
  }
</style>
