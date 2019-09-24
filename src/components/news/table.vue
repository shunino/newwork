<style>
  .mynews .el-table th>.cell{
    color: orange;
  }
</style>
<template>
    <div class="mynews">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="title"
          label="新闻标题"
          >
          <template slot-scope="scope">
            <span class="pointer" @click="goto()">{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="editor"
          label="作者"
          >
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期">
        </el-table-column>
        <el-table-column
          prop="origin"
          label="来源">
        </el-table-column>
      </el-table>
      <div class="block mt10" style="text-align: left">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'news',
    data() {
      return {
        tableData: [],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    mounted(){
      let a = {
        title: '.北斗定位系统和北斗地图的区别',
        editor: '王小虎',
        date: '2016-05-02',
        origin:'人民日报'
      };
        for(let i=0;i<15;i++){
          this.tableData.push(a);
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      goto(){
        this.$router.push({path:'/newsDetail'});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mynews{
  width: 100%;
}
</style>
