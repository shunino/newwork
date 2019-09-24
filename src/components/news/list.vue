<template>
    <div class="mylist">
      <div class="list-head mb10">
       <span class="ml10">新闻动态</span>
      </div>
      <div class="list-content">
        <ul class="list-ul" style="overflow:auto">
          <li v-for="i in data" class="list-li" @click="goto()">
            <span class="span1">{{i.date}}</span>
            <span class="span4 ml10">{{i.title}}</span>
          </li>
        </ul>
        <div class="fr">更多新闻</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        data:[]
      }
    },
    mounted(){
        this.data =[
          {
            title:'国科学家赴北极研究气候变化',
            date:'2019-09-24',
          },
          {
            title:'2020年前将如期完成北斗全球的全面建设',
            date:'2019-09-22',
          },
          {
            title:'中国科学家领衔发现脉冲星自转状态突变导致星风云亮度变化',
            date:'2019-09-21',
          },
          {
            title:'我国正在建设一双更强大的“眼睛”观测研究太阳活动',
            date:'2019-09-12',
          },
          {
            title:'全球植树造林有望储存大部分碳排放',
            date:'2019-09-08',
          },
          {
            title:'中科院农业资源研究中心-研究揭示近50年我国地表水资源演变趋势',
            date:'2019-09-06',
          },
          {
            title:'研究发现目前已知全球最深海底泥火山',
            date:'2019-09-01',
          },
          {
            title:'国科学家赴北极研究气候变化',
            date:'2019-09-01',
          },
        ]
    },
    methods:{
      goto(){
        this.$router.push({path:'/newsDetail'});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mylist{
    height: 100%;
    color: gray;
  }
  .list-head{
    width:100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
    border-bottom: 3px solid #009966;

  }
  .list-head span{
    color: black;
    font-weight: bold;
    font-size: 18px;
  }
  .list-li{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 7px;
    cursor: pointer;
  }
  .list-li .span1{
  }
  .list-li .span2{
  }
  .list-li .span3{
  }
  .list-li .span4{
    margin-left: 30px;
  }
</style>
