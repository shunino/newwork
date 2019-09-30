<template>
    <div class="mydemo">
      <div class="demo-head">
          <span class="ml10">专题展示</span>
          <span class="mr10 pointer" @click="$commonGo('/show')">更多</span>
      </div>
      <div class="demo-content">
          <div  v-for="i in data1" class="demo-list">
            <el-image
              style="width: 100%; height: 200px"
              :src="i.date"
              >
            </el-image>
            <div class="center">{{i.title}}</div>
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
        data1:[]
      }
    },
    mounted () {
        this.data1 =[
          {
            title:'贵州省1km分辨率NDVI数据集（2001-2010年）',
            date:'../../../static/shu1.jpg',
          },
          {
            title:'云贵丘陵沟壑区主要植物及种子相关特征数据集（2003-2015年）',
            date:'../../../static/shu2.jpg',
          },
          {
            title:'土壤侵蚀模型地形因子计算工具（2.0版）（2000年）',
            date:'../../../static/shu3.jpg',
          },
          {
            title:'中国北方地区沙漠化治理区划图（1981年）“眼睛”观测研究太阳活动',
            date:'../../../static/shu4.jpg',
          },
          {
            title:'云贵高原90米分辨率坡度图',
            date:'../../../static/shu5.jpg',
          },
          {
            title:'云贵高原90米分辨率LS因子图(2012年）',
            date:'../../../static/shu6.jpg',
          },
        ];
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
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background:#009966 ;
    color: white;
  }
  .demo-content{
    display: flex;
    width: 99.8%;
    flex-direction: row;
    flex-wrap: wrap;
    border: 1px solid #E4E7ED;
    justify-content: space-evenly;
    padding-bottom: 30px;
  }
  .demo-list{
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-top: 20px;
  }
</style>
