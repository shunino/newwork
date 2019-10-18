<template>
    <div class="mydemo">
      <div class="demo-head">
          <span class="ml10">{{title}}</span>
      </div>
      <div class="demo-content">
          <div  v-for="i in yydata" class="demo-list">
            <el-image
              style="width: 100%; height: 200px"
              :src="$URL+'/file/'+i.cover"
              >
            </el-image>
            <div class="center mt10">{{i.name}}</div>
          </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'demo',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        yydata:[]
      }
    },
    props:['title','mydata'],
    mounted () {
      //debugger;
      this.yydata = this.mydata;
      console.log(this.mydata);
    }
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
    background: #E6EEFB;
    border-left: 3px solid #416EFF;
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
