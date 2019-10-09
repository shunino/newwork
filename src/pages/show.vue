<template>
  <div class="commondiv">
    <div style="width: 95%;margin-top: 10px;">
      <demoList :mydata="tableData1" title="大数据专题"></demoList>
      <demoList :mydata="tableData2" title="预防监督专题" class="mt20"></demoList>
      <demoList :mydata="tableData3" title="综合治理专题" class="mt20"></demoList>
    </div>
  </div>
</template>

<script>
  import DemoList from '@/components/demo/list'
  export default {
    name: 'Home',
    data () {
      return {
        mysearch:{
          userid: this.$userId,
          searchKey: "",
          countperpage: 12,
          pageno: 1,
          token:this.$token
        },
        total:1,
        pageno: 1,
        tableData1:[],
        tableData2:[],
        tableData3:[]
      }
    },
    mounted(){
      $('.head-left').find('span').removeClass('cur');
      $('#show').addClass('cur');
      this.getList();
    },
    methods:{
      getList() {
        this.$http.post('api/resshare/maintain/listSpecial',this.mysearch).then(res => {
          let tableData = res.data.data.data;
          for(let i in tableData ){
            tableData[i].createtime = tableData[i].createtime.split('T')[0];
            if(tableData[i].typeflag=='1'){
              this.tableData1.push(tableData[i]);
            } else if(tableData[i].typeflag=='2'){
              this.tableData2.push(tableData[i]);
            } else{
              this.tableData3.push(tableData[i]);
            }
          }
          console.log(res);
        }).catch(err => {
          console.log(err)
        })
      },
    },
    components: {
      'demoList': DemoList,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
