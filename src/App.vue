<template>
  <div id="app" >
<!--    <img src="./assets/logo.png">-->
<!--    <img style="position: absolute;-->
<!--    height: 100%;-->
<!--    width: 100%;-->
<!--    z-index: -1;" src="../static/1.jpg" />-->
      <top></top>
      <myhead></myhead>
    <div style="width: 100%;display: flex;justify-content: center;background: gainsboro;padding-bottom: 20px;">
      <div style="width: 1245px;background: white;display: flex;justify-content: center;flex-direction: column;padding-bottom: 20px;">
        <router-view/>
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
  import Head from '@/components/home/Head'
  import Top from '@/components/home/top'
  import Footer from '@/components/home/footer'

  $(function () {
    let win =  window.innerHeight;
    let he = win - 220 +'px';
    $('.commondiv').css({'minHeight':he});
    // window.console = (function () {
    //
    //   var c = {};
    //
    //   c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () { };
    //
    //   return c;
    //
    // })();
  })
export default {
  name: 'App',
  components: {
    'myhead': Head,
    'top':Top,
    'myfooter': Footer,
  },
  mounted () {
  }
}
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .commondiv {
    display: flex;text-align: center;flex-direction: column;align-items: center;
  }
  .pointer{
    cursor: pointer;
  }
  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
  }
  html,body,#app{
    height: 100%;
  }
  body {
    margin: 0px;
    padding: 0px;
  }
  .ml10{
    margin-left: 10px;
  }
  .mr10{
    margin-right: 10px;
  }
  .mb10{
    margin-bottom: 10px;
  }
  .mt10{
    margin-top: 10px;
  }
  .mt20{
    margin-top: 20px;
  }
  .fr{
    float: right;
  }
  .fl{
    float: left;
  }
  .center{
    text-align: center;
  }
  a{
    text-decoration: none;
    color: white;
  }
  ul{
    list-style: none;
    padding: 0px;
    margin:0px;
  }
  *{
    font-size: 14px;
  }
</style>
