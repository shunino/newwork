<template>
  <div>
    <div class="myrank">
      <div class="rank-head">
        <span class="ml10">排行榜</span>
        <span class="mr10">分享量 积分</span>
      </div>
      <div class="rank-content">
        <ul class="rank-ul" style="overflow:auto">
          <li v-for="i in 8" class="rank-li">
            <span class="span1">{{i}}</span>
            <el-tag>标签一</el-tag>
            <el-avatar class="span2" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <span class="span3">543535</span>
            <span class="span4">35355</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rank',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .myrank{
    width: 300px;
    border:1px solid gray;
  }
  .rank-head{
    width:100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background:#009966 ;
    color: white;
  }
  .rank-li{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .rank-li .span1{
  }
  .rank-li .span2{
  }
  .rank-li .span3{
  }
  .rank-li .span4{
    margin-left: 30px;
  }
</style>
