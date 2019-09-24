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
            <li @click="changeTab('intro')" :class="mytype=='intro' ? 'cur' : ''">本站介绍</li>
            <li @click="changeTab('questin')" :class="mytype=='questin' ? 'cur' : ''">常见问题</li>
            <li @click="changeTab('phone')" :class="mytype=='phone' ? 'cur' : ''">联系我们</li>
          </ul>
        </div>
      <div class="in-content">
            <div v-show="mytype=='intro'">
              中国互联网数据平台由中国互联网络信息中心（CNNIC）发起并运行，采用固定样本组(Panel)的研究方法，通过调查客户端实时、连续采集中国网民样本的互联网使用行为数据，并对数据进行统计分析，从而客观、及时地反映中国互联网发展状况的多个层面（宏观与微观），为互联网行业参与者提供多方面决策支持。
              使用中国互联网数据平台，您可以：

              ◆了解中国互联网以及细分领域的宏观发展状况和市场格局；

              ◆了解自身和竞争对手的访问情况和用户特征；

              ◆了解特定人群的互联网行为特征

              ◆制定网络广告投放计划 平台运作模式
            </div>
            <div v-show="mytype=='questin'">
             问题
            </div>
            <div v-show="mytype=='phone'">
             电话
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
        mytype:'intro'
      }
    },
    mounted(){
      let win =  window.innerHeight;
      let he = win - 260 +'px';
      this.myheight = he;
      $('.head-left').find('span').removeClass('cur');
      $('#intro').addClass('cur');
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
