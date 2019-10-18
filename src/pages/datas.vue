<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .da-left{
    width: 19%;
    margin-right: 1%;
  }
  .da-center{
    width: 80%;
  }
  .left-bottom .bottom-head{
      text-align: left;
    border-bottom: 3px solid #426EFF;
    height: 35px;
    line-height: 30px;
    font-weight: bold;
    font-size: 20px;
  }
  .list-li>span{
    font-size: 13px !important;
    color: gray;
  }
</style>
<template>
  <div class="commondiv">
    <div style="width: 95%;margin-top: 10px;display: flex">
        <div class="da-left" >
          <div class="left-top">
            <dataClass></dataClass>
          </div>
          <div class="left-bottom mt10">
              <div class="bottom-head">
                本类数据热度排行榜
              </div>
            <commonList :mydata="data1" type="data"></commonList>
          </div>
        </div>
        <div class="da-center" >
          <div class="center-top">
            <dataTag></dataTag>
          </div>
          <div class="center-bottom mt10">
            <dataItemHead></dataItemHead>
            <div style="display: flex;flex-wrap: wrap;margin-left:-20px;">
              <dataItem :mydata="i"  v-for="i in tableData"></dataItem>
            </div>
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

  import CommonList from '@/components/common/list1'

  import DataItem from '@/components/datas/item'
  import DataTag from '@/components/datas/tag'
  import DataClass from '@/components/datas/class'
  import DataItemHead from '@/components/datas/itemHead'
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        data1:[],
        tableData:[],
        mysearch:{
          searchWrap:{
            //userid:this.$userId,
            status:2
          },
          countperpage: 12,
          pageno: 1,
        },
      }
    },
    mounted(){
      this.data1 =[
        {
          title:'贵州省1km分辨率NDVI数据集（2001-2010年）',
          date:'2019-09-24',
        },
        {
          title:'云贵丘陵沟壑区主要植物及种子相关特征数据集（2003-2015年）',
          date:'2019-09-22',
        },
        {
          title:'土壤侵蚀模型地形因子计算工具（2.0版）（2000年）',
          date:'2019-09-21',
        },
        {
          title:'中国北方地区沙漠化治理区划图（1981年）“眼睛”观测研究太阳活动',
          date:'2019-09-12',
        },
        {
          title:'云贵高原90米分辨率坡度图',
          date:'2019-09-08',
        },
        {
          title:'云贵高原90米分辨率LS因子图(2012年）',
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
        {
          title:'美国调查报告：中国正在打赢治理空气污染的战争 不详 2018/03/16 08:58新华网',
          date:'2019-09-01',
        },
        {
          title:'国家大数据综合试验区有望开建 侯云龙 2018/03/07 09:14经济参考报',
          date:'2019-09-01',
        },
      ];
      $('.head-left').find('span').removeClass('cur');
      $('#datas').addClass('cur');

      this.getList();
    },
    methods:{
      getList() {
        this.$http.post('api/resshare/datacenter/list',this.mysearch).then(res => {
          this.tableData = res.data.data.data;
          // this.pageno = res.data.data.pageno;
          // this.total = res.data.data.total;
          for(let i in this.tableData ){
            this.tableData[i].createtime = this.tableData[i].createtime.split('T')[0];
          }
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
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


