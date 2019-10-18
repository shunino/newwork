<style scoped>
  .data-tag{
      display: flex;
      height: 80px;
      border-top:3px solid #426EFF;
  }
  .data-tag .tag-left{
      width: 20%;
      background: #F2F2F2;
      display: flex;
      align-items: center;
      justify-content: flex-end;
  }
  .data-tag .tag-center{
    display: flex;
    align-items: center;
    width: 74%;
    flex-wrap: wrap;
  }
  .data-tag .tag-right{
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1%;
  }
  .data-tag .tag-button{
    margin-left: 10px;
    min-width: 80px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border:1px solid #F2F2F2;
    font-size: 12px;
  }
  .more{
    font-size: 14px;
    color: #77D1FF;
  }
</style>
<template>
  <div>
    <div class="data-tag">
      <div class="tag-left">
        主题间：
      </div>
      <div class="tag-center">
        <span class="tag-button" style="background: #416EFF;color: white;">全部</span>
        <span v-for="i in data1" class="tag-button">{{i}}</span>
      </div>
      <div class="tag-right">
        <span class="more">更多 <img src="../../assets/d3.png"></span>
      </div>
    </div>

    <div class="data-tag" style="border-top:1px solid #E4E7ED;border-bottom:1px solid #E4E7ED;">
      <div class="tag-left">
        空间位置：
      </div>
      <div class="tag-center">
        <span class="tag-button" style="background: #416EFF;color: white;">全部</span>
        <span v-for="i in data2" class="tag-button">{{i}}</span>
      </div>
      <div class="tag-right">
        <span class="more">更多 <img src="../../assets/d3.png"></span>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        data1:[],
        data2:[]
      }
    },
    mounted () {
      this.data1 = ['地图','数据','线图'];
      this.data2 = ['安顺','贵阳','遵义'];
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

