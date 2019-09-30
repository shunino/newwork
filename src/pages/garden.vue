<template>
  <div class="commondiv">
    <div style="width: 95%;margin-top: 30px;">
      <div style="display: flex;">
        <mymap style="width: 39%;"></mymap>
        <div style="width: 60%;margin-left: 1%;height: 100%;margin-top: 40px;" >
          <myimg  style="width: 100%;height: 145px;margin-bottom: 10px;" ></myimg>
          <myimg style="width: 100%;height: 145px" ></myimg>
        </div>
      </div>
      <div style="margin-top: 40px;">
        <myimg style="width: 100%;height: 300px" ></myimg>
      </div>
    </div>
  </div>
</template>

<script>
  import Head from '@/components/home/Head'
  import Carousel from '@/components/home/carousel'
  import Rank from '@/components/home/rank'
  import Footer from '@/components/home/footer'

  import Map from '@/components/garden/map'
  import Img from '@/components/garden/img'

  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      $('.head-left').find('span').removeClass('cur');
      $('#garden').addClass('cur');
    },
    components: {
      'myhead': Head,
      'carousel': Carousel,
      'rank': Rank,
      'myfooter': Footer,
      'mymap': Map,
      'myimg': Img,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
