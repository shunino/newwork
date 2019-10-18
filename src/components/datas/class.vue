<style scoped>
  .data-class{
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    font-size: 13px;
    border: 1px solid #E4E4E4;
    border-top:3px solid #426EFF;
  }
  .class-intro{
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    font-weight: bold;
    font-size: 20px;
  }
  .class-con .con-head{
    height: 35px;
    background: #0C275D;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }
  .class-con .con-c{
    padding-left: 10px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .class-con .con-c span{
    display: block;
    margin-top: 5px;
    color: gray;
  }
</style>
<template>
  <div class="data-class">
      <div class="class-intro">
        数据分类体系
<!--        （<span style="color: red;">全部</span>）-->
      </div>
    <div class="class-con" v-for="i in mydata">
      <div class="con-head">
        <span>{{i.head}}（{{Math.ceil(Math.random()*10)}}）</span>
        <img class="dataClass" src="../../assets/d2.png">
        <img style="display: none" class="dataClass1" src="../../assets/d1.png">
      </div>
      <div class="con-c" >
        <span v-for="j in i.mydata" >{{ j }}（{{Math.ceil(Math.random()*10)}}）</span>
      </div>
    </div>
  </div>
</template>
<script>
  $(function () {
        $(document).on('click','.dataClass',function (e) {
          $(this).parent('.con-head').siblings('.con-c').css({height:'0'});
          $(this).hide();
          $(this).siblings('.dataClass1').show();
        });
      $(document).on('click','.dataClass1',function (e) {
        $(this).parent('.con-head').siblings('.con-c').css({height:'auto'});
        $(this).hide();
        $(this).siblings('.dataClass').show();
      });
  })

  export default {
    name: 'list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        mydata:[
          {
            head:'水土流失类',
            mydata:[
            '水土流失两区',
            '水土流失消长',
            '水土流失预测']
          },
          {
            head:'土地资源类',
            mydata:['土壤侵蚀',
            '国家文化自然遗产',
            '地质公园',
            '湿地公园',
            '森林公园',
            '风景名胜区',
            '自然保护区',
            '国土土地利用',
            '岩性分布',
            '土壤分布']
          },
          {
            head:'水资源类',
            mydata:['水源保护区',
            '八大水系',
            '水库',
            '雨量站',
            '水文站']
          },
          {
            head:'生态治理类',
            mydata:['水土保持综合治理',
            '河道管理范围',
            '生态红线']
          },
          {
            head:'社会经济类',
            mydata:['生产建设项目备案公示资料',
            '目标考核',
            '补偿费征收信息',
            '城镇规划',
            '农业产业发展规划',
            '行政区划信息（国家基础地理）']
          },
        ]
      }
    },
    mounted () {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

