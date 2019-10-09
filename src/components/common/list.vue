<template>
      <div class="list-content">
        <ul class="list-ul" style="overflow:auto">
          <li v-for="i in mydata" class="list-li" @click="$commonGo('/DatasDetail')">
            <span class="span1"></span>
            <span class="span4">{{i.title}}}</span>
          </li>
          <li style="margin-top: 19px;"><span @click="$commonGo('/datas')" v-show="data" class="fr mr10 pointer" style="color: gray">更多</span></li>
        </ul>
      </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        data:true
      }
    },
    props: ['type','mydata'],
    created () {
      if(this.type=='data'){

        $('.list-li>span').css({'fontSize':'13px'});
        $('.list-li .span1').css({'width':'4px','height':'4px','borderRadius':'50%'});
        this.data=false;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list-content{
    width: 100%;
    height: 100%;
  }
  .list-li{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 7px;
    cursor: pointer;
  }
  .list-li>span{
    font-size: 18px;
    color: gray;
  }
  .list-li .span1{
    width: 10px;
    height: 10px;
    background: #828282;
  }
  .list-li .span4{
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
    margin-left: 5px;
  }
</style>
