<template>
    <div class="mydemo">
      <div class="demo-head">
          <span class="ml10">{{title}}</span>
      </div>
      <div class="demo-content">
          <div  v-for="i in 2" class="demo-list">
            <el-image
              style="width: 100%; height: 200px"
              src="../../../static/map.jpg"
              >
            </el-image>
            <div class="center">大数据统计</div>
          </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'demo',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    props:['title']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mydemo{
    width: 100%;
  }
  .demo-head{
    width:100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    border-left: 3px solid #006633;
    border-bottom: 2px solid #006633;
  }
  .demo-content{
    display: flex;
    width: 99.8%;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 30px;
  }
  .demo-list{
    display: flex;
    flex-direction: column;
    width: 33%;
    margin-top: 20px;
    margin-left: 1%;
  }
</style>
