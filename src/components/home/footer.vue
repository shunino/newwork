<template>
    <div class="myfooter">
        <div class="footer-left">
          <a
            href="http://www.swcc.org.cn/"
            target="_blank"
          >
            中国水土保持生态网
          </a>
          <a
            href="https://www.bidcenter.com.cn/newssearchyz-63334594.html"
            target="_blank"
          >
            贵州水土保持监测站
          </a>
          <a
            href="http://www.gzmwr.gov.cn/slxw/dfdt/201804/t20180404_3108351.html"
            target="_blank"
          >
            贵州省水利厅
          </a>
        </div>
        <div class="footer-right">
          <span>关于我们</span>
          <span>@贵州东方世纪科技股份有限公司</span>
          <span>黔公安网 00000000号</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Head',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .myfooter{
    /*position: absolute;*/
    /*bottom: 0px;*/
    /*left: 0px;*/
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #1A7676;
    width: 100%;
    height: 90px;
    color:white;
    /*margin-top: 40px;*/
  }
  .footer-left{
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: space-around;
  }
  .footer-left span{
    display: inline-block;
  }
  .footer-right{
    display: flex;
    flex-direction: column;
    width: 20%;
    align-items: center;
    justify-content: space-evenly;
    border-left: 1px solid white;
    height: 90%;
  }

</style>
