<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .po-head{
    height: 40px;
    line-height: 40px;
    background: #EEEEEE;
    color: #85909F;
    padding-left: 10px;
    font-size: 16px;
    text-align: left;
  }
  .po-list{
      text-align: left;
  }
  .po-list ul{

  }
  .po-list ul li{
        display: flex;
    margin-top: 10px;
    color: gray;
    justify-content: space-between;
  }
  .po-list ul li .pot{
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #828282;
    display: inline-block;
  }
</style>
<template>
  <div class="commondiv" :style="'minHeight:'+myheight">
    <div style="width: 95%;margin-top: 10px;">
      <div class="po-head">科技推广</div>
      <div class="po-list mt20">
        <ul>
          <li @click="goto()" v-for="i in 25">
            <div style="display: flex;align-items: center">
              <span class="pot ml10 mr10"></span>
              <span>北斗系统对于国家的战略意义远胜民用导航的意义</span>
            </div>
            <div>
              2017-25-85
            </div>
          </li>
        </ul>
      </div>
      <div class="mt20" style="text-align: left;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
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
        currentPage4:1,
        myheight:'auto'
      }
    },
    methods: {
      handleSizeChange(tab, event) {
        console.log(tab, event);
      },
      handleCurrentChange() {
        console.log('submit!');
      }
    },
    mounted(){
      let win =  window.innerHeight;
      let he = win - 260 +'px';
      this.myheight = he;
      $('.head-left').find('span').removeClass('cur');
      $('#popular').addClass('cur');
    },
    methods:{
      goto(){
        this.$router.push({path:'/newsDetail'});
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
