<style>
  .el-tag.el-tag--warning{
    background: #00A8FF;
    color: white;
  }
  .el-tag{
    height: 24px;
    width: 24px;
    padding: 0px;
    line-height: 24px;
  }
</style>
<template>
    <div class="myrank">
      <div class="rank-head">
        <span class="ml10">排行榜</span>
        <span class="mr10" style="font-size: 14px;"><span @click="change('down')" class="rank-type">下载量</span> <span @click="change('share')"  class="rank-type">分享量</span><span @click="change('score')" style="border-right: none;width: 50px;"  class="rank-type cur">积分</span> </span>
      </div>
      <div class="rank-content">
        <ul class="rank-ul" style="overflow:auto">
          <li  v-for="(i,key) in data" class="rank-li">
            <div>
              <el-tag style="background: none;border: none;color: gray" v-if="key>2" class="ml10">{{key+1}}</el-tag>
              <el-tag  type="warning" v-if="key<3" class="ml10">{{key+1}}</el-tag>
              <el-avatar class="span2 ml10" :src="i.ava"></el-avatar>
              <b class="span3 ml10">{{i.name}}</b>
            </div>
             <div>
               <span class="span4 mr10">{{Math.ceil(Math.random()*100)}}</span>
             </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'rank',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        data:[]
      }
    },
    mounted(){
      this.data = [
        {
          name:'张柳',
          ava:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        },
        {
          name:'ericc',
          ava:'../../static/tou4.jpeg',
        },
        {
          name:'李林',
          ava:'../../static/tou1.jpg',
        },
        {
          name:'josn',
          ava:'../../static/ata.jpg',
        },
        {
          name:'flex好',
          ava:'../../static/tou2.jpg',
        },
        {
          name:'张强',
          ava:'../../static/ata.jpg',
        },
        {
          name:'apple',
          ava:'../../static/tou3.jpeg',
        },
        {
          name:'blanana',
          ava:'../../static/ata.jpg',
        },
        {
          name:'王耿',
          ava:'../../static/ata.jpg',
        },
      ]
    },
    methods: {
      change (type) {
        console.log(type);
        this.data.sort(this.randomsort);
      },
      randomsort (a, b) {
        return Math.random() > .5 ? -1 : 1;
        //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .myrank{
      width: 99%;
      border:1px solid #E4E7ED;
  }
  .rank-head{
    width:100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background:#0C275D;
    color: white;
  }
  .rank-li{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E4E7ED;
    height: 40px;
  }
  .rank-li>div{
    display: flex;
    align-items: center;
  }
  .rank-li .span1{
  }
  .rank-li .span2{
      width: 30px;
    height: 30px;
  }
  .rank-li .span3{
  }
  .rank-li .span4{
    color: gray;
  }
  .rank-type{
    color: #04A5FF;
    border-right: 1px solid #04A5FF;
    width: 63px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
  }
  .cur{
    color: white;
  }
</style>
