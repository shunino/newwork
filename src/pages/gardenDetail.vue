<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .in-left{
    width: 14%;
    height: 500px;
    border-right: 1px solid gray;
    padding: 5px;
    margin-right: 1%;
  }
  .in-left ul li{
    border-bottom: 2px solid gray;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
    cursor: pointer;
  }
  .in-left ul li.cur{
    border-bottom-color:green;
  }
  .in-content{
    width: 85%;
    text-align: left;
    text-indent: 20px;
    line-height: 25px;
  }
</style>
<template>
  <div class="commondiv" :style="'minHeight:'+myheight">
    <div style="width: 95%;margin-top: 30px;display: flex">
        <div class="in-left">
          <ul>
            <li @click="changeTab('garden1')" :class="mytype=='garden1' ? 'cur' : ''">园区概况</li>
            <li @click="changeTab('garden2')" :class="mytype=='garden2' ? 'cur' : ''">园区功能</li>
            <li @click="changeTab('garden3')" :class="mytype=='garden3' ? 'cur' : ''">园区管理</li>
            <li @click="changeTab('garden4')" :class="mytype=='garden4' ? 'cur' : ''">园区互动</li>
          </ul>
        </div>
      <div class="in-content">
            <div v-show="mytype=='garden1'">
             概况
            </div>
            <div v-show="mytype=='garden2'">
             功能
            </div>
            <div v-show="mytype=='garden3'">
             管理
            </div>
            <div v-show="mytype=='garden4'">
              互动
            </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Head from '@/components/home/Head'
  import Carousel from '@/components/home/carousel'
  import Rank from '@/components/home/rank'
  import Footer from '@/components/home/footer'

  import Table from '@/components/news/table'
  import List from '@/components/news/list'
  import NewDetail from '@/components/news/detail'

  import DemoList from '@/components/demo/list'

  import CommonList from '@/components/common/list'

  import DataItem from '@/components/datas/item'
  import DataTag from '@/components/datas/tag'
  import DataClass from '@/components/datas/class'
  import DataItemHead from '@/components/datas/itemHead'
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        myheight:'auto',
        mytype:'garden1'
      }
    },
    mounted(){
      let win =  window.innerHeight;
      let he = win - 260 +'px';
      this.myheight = he;
     // $('.head-left').find('span').removeClass('cur');
      //$('#intro').addClass('cur');
    },
    methods:{
      changeTab(type){
        this.mytype = type;
      }
    },
    components: {
      'myhead': Head,
      'carousel': Carousel,
      'rank': Rank,
      'myfooter': Footer,
      'newstable': Table,
      'mylist': List,
      'demoList': DemoList,
      'commonList': CommonList,
      'newDetail': NewDetail,
      'dataItem': DataItem,
      'dataTag': DataTag,
      'dataClass': DataClass,
      'dataItemHead': DataItemHead
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
