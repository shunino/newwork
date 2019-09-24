<style scoped>
 .myfirst{
   text-align: left;
   width: 800px;
 }
 .myfirst ul{
   list-style: inside;
 }
 .myfirst ul li{
   margin-top: 5px;
 }
 .myfirst>div{
   margin-top: 20px;
 }
</style>
<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="现有园区" name="first" class="myfirst">
        <div>
          <ul>
            <li>请勿上传非法数据，否者后果自负;</li>
            <li>上传的数据进过管理员审核;</li>
            <li>审核通过后可以下载数据;</li>
          </ul>
        </div>
        <div>
          <el-button size="small" type="primary">保存</el-button>
        </div>
        <div style="">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="现有园区"
              prop="had"
            >
            </el-table-column>
            <el-table-column
              label="园区类型"
              prop="type"
            >
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="新增园区" name="second" class="myfirst">
        <div>
          <ul>
            <li>请勿上传非法数据，否者后果自负;</li>
            <li>上传的数据进过管理员审核;</li>
            <li>审核通过后可以下载数据;</li>
          </ul>
        </div>
        <div>
          <el-button size="small" type="primary">保存</el-button>
        </div>
        <div>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="园区名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="园区等级">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="国家级" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="园区概况">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="园区功能">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="园区管理">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="园区互动">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">新增</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
        tableData: [],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    created(){
      let a = {
        had: '深圳市水土保持科技示范园',
        type: '国家级',
      }
      this.tableData.push(a);
      for(let i=0;i<4;i++){
        this.tableData.push(a);
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit() {
        console.log('submit!');
      },
      handleEdit(){

      },
      handleDelete(){

      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
