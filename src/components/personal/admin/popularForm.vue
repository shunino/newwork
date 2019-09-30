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
      <el-tab-pane label="数据上传" name="first" class="myfirst">
        <div>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="新闻名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="作者">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item  label="数据详情">
                <richtxt ></richtxt>
            </el-form-item>
            <el-form-item label="图片" style="margin-top: 60px;">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible" size="tiny">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">新增</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="上传目录" name="second" class="myfirst">
        <div style="">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="新闻名称"
              prop="name"
            >
            </el-table-column>
            <el-table-column
              label="作者"
              prop="editor"
            >
            </el-table-column>
            <el-table-column
              label="上传时间"
              prop="time"
            >
            </el-table-column>
            <el-table-column
              label="来源"
              prop="origin"
            >
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Richtxt from '@/components/common/richtxt'
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
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
        name: '新闻',
        editor: '张三',
        time: '2019-25-05',
        origin: '中国日报',
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

      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    },
    components: {
      'richtxt':Richtxt
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
