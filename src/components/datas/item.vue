<template>
  <div class="data-item" @click="goto()">
      <div class="img-box">
        <img style="width:90%;height:90%;" src="../../../static/1.jpg">
      </div>
    <div class="title mt10 ml10">
        黄图高原分辨率1000m平均气氛
    </div>
    <div class="num mt10 ml10">
      数据量 9.363MB
    </div>
    <div class="school mt10 ml10">
      北京大学
    </div>
    <div class="handle mt10 ml10">
      <span class="handle-button">查看数据</span>
         <span class="handle-button">收藏数据</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      goto(){
        this.$router.push({path:'/DatasDetail'});
      }
    }
  }
</script>
<style scoped>
  .data-item{
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 300px;
    font-size: 13px;
    margin-left: 20px;
    cursor: pointer;
  }
  .data-item .img-box{
    display: flex;
    align-items: center;
    justify-content: center;
    border:1px solid #E4E7ED;
    height: 300px;
    margin-top: 10px;
    margin-left: 10px;
  }
  .data-item .title{
    color: red;
  }
  .data-item .num{

  }
  .data-item .school{

  }
  .data-item .handle{
    display: flex;
    justify-content: space-between;
  }
  .data-item .handle-button{
    width: 70px;
    height: 25px;
    line-height: 25px;
    border: 2px solid #BBEAF6;
    text-align: center;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

