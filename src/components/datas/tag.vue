<style scoped>
  .data-tag{
      display: flex;
      height: 80px;
        border-top:3px solid #BDDFE8;
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
</style>
<template>
  <div>
    <div class="data-tag">
      <div class="tag-left">
        主题间：
      </div>
      <div class="tag-center">
        <span class="tag-button" style="border:2px solid #CAE088;color: #CAE088;">全部</span>
        <span v-for="i in 10" class="tag-button">气象（454）</span>
      </div>
      <div class="tag-right">
        <span class="el-icon-caret-bottom">更多</span>
      </div>
    </div>

    <div class="data-tag" style="border-top:1px solid #E4E7ED;border-bottom:1px solid #E4E7ED;">
      <div class="tag-left">
        主题间：
      </div>
      <div class="tag-center">
        <span class="tag-button" style="border:2px solid #CAE088;color: #CAE088;">全部</span>
        <span v-for="i in 10" class="tag-button">中国（23）</span>
      </div>
      <div class="tag-right">
        <span class="el-icon-caret-bottom">更多</span>
      </div>
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

