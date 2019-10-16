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
  <div class="ga-img pointer" @click="goto(mydata.id)">
     <div class="img-box">
       <img style="width:100%;height:100%;" :src="$URL+'/file/'+mydata.cover">
     </div>
    <div class="img-text">
      <div style="height: 90%;">
        <div>{{mydata.name}}</div>
        <div class="mt10">
         {{mydata.des}}
        </div>
      </div>
      <div>{{mydata.address}}<span class="el-icon-location"></span></div>
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
    },
    props:['mydata'],
    mounted(){
      //debugger;
    },
    methods:{
      goto(id){
        this.$router.push({path:'/gardenDetail',query:{id:id}});
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

