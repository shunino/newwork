<style scoped>

</style>
<template>
<div style="width: 100%;">
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="数据名称"
      >
    </el-table-column>
    <el-table-column
      prop="weight"
      label="数据大小"
      >
    </el-table-column>
    <el-table-column
      prop="time"
      label="下载时间">
    </el-table-column>
  </el-table>
  <div class="mt20" style="text-align: left;">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        currentPage4:1

      }
    },
    created(){
      let a = {
        name: '数据1',
        weight: '50M',
        time: '2017.8.21',
      }
      this.tableData.push(a);
      for(let i=0;i<4;i++){
        this.tableData.push(a);
      }
    },
    methods: {
      handleSizeChange(){}, // 失去焦点事件
      handleCurrentChange(){}, // 获得焦点事件
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

