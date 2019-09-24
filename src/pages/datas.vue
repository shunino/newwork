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
    border-bottom: 3px solid #BDDFE8;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
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
                奔雷数据热度排行榜
              </div>
            <commonList type="data"></commonList>
          </div>
        </div>
        <div class="da-center" >
          <div class="center-top">
            <dataTag></dataTag>
          </div>
          <div class="center-bottom mt10">
            <dataItemHead></dataItemHead>
            <div style="display: flex;flex-wrap: wrap;margin-left:-20px;">
              <dataItem v-for="i in 6"></dataItem>
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

  import CommonList from '@/components/common/list'

  import DataItem from '@/components/datas/item'
  import DataTag from '@/components/datas/tag'
  import DataClass from '@/components/datas/class'
  import DataItemHead from '@/components/datas/itemHead'
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      $('.head-left').find('span').removeClass('cur');
      $('#datas').addClass('cur');
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


