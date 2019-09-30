<style scoped>
.ga-img{
  width: 100%;
  height: 100%;
  display: flex;
}
  .img-box{
    width: 40%;
    height: 100%;
  }
  .img-text{
    width:59%;
    margin-left: 1%;
    text-align: left;
    display: flex;
    flex-direction: column;
  }

</style>
<template>
  <div class="ga-img pointer" @click="$commonGo('/gardenDetail')">
     <div class="img-box">
       <img style="width:100%;height:100%;" src="../../../static/site.jpg">
     </div>
    <div class="img-text">
      <div style="height: 90%;">
        <div>示范园区</div>
        <div class="mt10">
          汪龙照强调，做好养老服务是重大民生工程,事关群众福祉和长远发展。
          探索实施“医养结合”型养老护理模式，是解决养老民生问题的有益尝试和重要途径。要统筹谋划、多方参与，焦重点、强化保障，
          做好特困供养人员医养结合工作，强化兜底保障功能。
        </div>
      </div>
      <div>贵州省安顺市西秀区<span class="el-icon-location"></span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

