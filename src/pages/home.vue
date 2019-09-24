<template>
  <div class="commondiv">
    <div style="width: 95%;">
      <div class="mt20" style="display: flex;height: 300px;">
        <carousel style="width: 50%"></carousel>
        <mylist style="width: 48%;margin-left: 2%"></mylist>
      </div>

      <div class="mt20 homeTwo" style="display: flex;">
        <el-tabs v-model="activeName" style="width: 68%;margin-right: 2%">
          <el-tab-pane label="最新数据" name="first">
            <commonList :mydata="data1"></commonList>
          </el-tab-pane>
          <el-tab-pane label="热门数据" name="second">
            <commonList :mydata="data1"></commonList>
          </el-tab-pane>
        </el-tabs>
        <rank style="width:30%;"></rank>
      </div>

      <div class="mt20" style="display: flex;">
        <demoList></demoList>
      </div>
    </div>
  </div>
</template>
<style>
  .homeTwo .el-tabs{
    border: 1px solid #E4E7ED;
    padding-left: 10px;
  }
  .homeTwo .el-tabs__item.is-active{
    color: #009966;
  }
  .homeTwo .el-tabs__active-bar{
    background: #009966;
  }
</style>
<script>
import Head from '@/components/home/Head'
import Top from '@/components/home/top'
import Carousel from '@/components/home/carousel'
import Rank from '@/components/home/rank'
import Footer from '@/components/home/footer'

import Table from '@/components/news/table'
import List from '@/components/news/list'
import NewDetail from '@/components/news/detail'

import DemoList from '@/components/demo/list1'

import CommonList from '@/components/common/list'
import Richtxt from '@/components/common/richtxt'

import DataItem from '@/components/datas/item'
import DataTag from '@/components/datas/tag'
import DataClass from '@/components/datas/class'
import DataItemHead from '@/components/datas/itemHead'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeName:'first',
      data1:[],
      data2:[]
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
    $('#home').addClass('cur');
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
    'dataItemHead': DataItemHead,
    'richtxt':Richtxt,
    'top':Top
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
