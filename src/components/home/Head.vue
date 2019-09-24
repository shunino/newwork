<template>
        <div class="myhead">
              <div class="head-left">
                <span id="home" class="cur">
                  <router-link to="/">首页</router-link>
                </span>
                <span id="news">
                  <router-link to="/news">新闻动态</router-link>
                </span>
                <span id="datas">
                  <router-link to="/datas">数据中心</router-link>
                </span >
                <span id="show">
                  <router-link to="/show">专题展示</router-link>
                </span>
                <span id="garden">
                  <router-link to="/garden">示范园区</router-link>
                </span>
                <span id="popular">
                  <router-link to="/popular">科技推广</router-link>
                </span>
                <span id="intro">
                  <router-link to="/intro">平台简介</router-link>
                </span>
              </div>
              <div class="head-left" v-show="hasLogin">
                <span id="personal">
                  <router-link to="/personal">个人中心</router-link>
                </span>
                <span style="width: 50px;" >
                  <span @click="lexit">退出</span>
                </span>
              </div>
              <div class="head-right mr10" v-show="!hasLogin">
                  <span @click="toLogin" class="login-span">
                    登录
                  </span>
                  <span @click="toRegister">
                    注册
                  </span>
              </div>
          <el-dialog
            title="登录"
            :visible.sync="dialogVisible"
            width="40%"
              >
            <div>
              <el-form :model="ruleForm1" :rules="rule1" ref="ruleForm1"  label-width="80px">
                <el-form-item label="登录名"  prop="pwd">
                  <el-input v-model="ruleForm1.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd">
                  <el-input type="password" v-model="ruleForm1.pwd"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button  type="primary" @click="login">登录</el-button>
                  <el-button  @click="dialogVisible = false">取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-dialog>

          <el-dialog
            title="注册"
            :visible.sync="dialogVisible1"
            width="50%"
          >
            <div>
              <el-form  :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="80px">
                <el-form-item label="用户名称"  prop="username">
                  <el-input v-model="ruleForm2.username"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" prop="mobile">
                  <el-input v-model="ruleForm2.mobile"></el-input>
                </el-form-item>
                <el-form-item label="邮件地址" prop="email">
                  <el-input v-model="ruleForm2.email"></el-input>
                </el-form-item>
                <el-form-item label="职业">
                  <el-input v-model="ruleForm2.profession"></el-input>
                </el-form-item>
                <el-form-item label="单位">
                  <el-input v-model="ruleForm2.company"></el-input>
                </el-form-item>
                <el-form-item label="所在城市">
                  <el-input v-model="ruleForm2.city"></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                  <el-input v-model="ruleForm2.address"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="ruleForm2.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password1">
                  <el-input type="password" v-model="ruleForm2.password1"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="register">注册</el-button>
                  <el-button  @click="dialogVisible1 = false">取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-dialog>

        </div>
</template>

<script>
export default {
  name: 'Head',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dialogVisible:false,
      dialogVisible1:false,
      hasLogin:false,
      ruleForm1:{
        name:'',
        pwd:''
      },
      rules1:[

      ],
      ruleForm2:{},
      rules2:{
        username: [
            { required: true, trigger: 'blur',validator: this.vcopy },
          ],
        mobile: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        password1: [
          {required: true,validator: this.validatePass, trigger: 'blur' },
        ],
      },
    }
  },
  methods:{
    validatePass(rule, value, callback){
      console.log(rule,value,callback);
      if (!value || value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm2.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    },
    vcopy(rule, value, callback){
      if (!value || value === '') {
        callback(new Error('请输入用户名!'));
      }
      this.$http.post('api/resshare/user/checkUserId',{
        username:value,
      }).then(res => {
        if(!res.data.data){
          callback(new Error('用户名重复!'));
        } else{
          callback();
        }
        console.log(res);
      }).catch(err => {
        console.log(err)
      })
    },
    toLogin(){
      this.dialogVisible = true;
    },
    toRegister(){
      this.dialogVisible1 = true;
    },
    login(){
        this.hasLogin = true;
        this.dialogVisible = false;
        this.$router.push({path:'/personal'});
    },
    register(){
      var self = this;
      this.$refs['ruleForm2'].validate((valid) => {
        //debugger;
        if (valid) {
          self.$http.post('api/resshare/user/registryUser',{
            user:self.ruleForm2,
          }).then(res => {
            // self.hasLogin = true;
            // self.dialogVisible1 = false;
            console.log(res);
          }).catch(err => {
            console.log(err)
          })
        }
      });
    },
    lexit(){
      this.hasLogin = false;
      this.$router.push({path:'/'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .myhead{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background: #006633;
      width: 100%;
      height: 50px;
      color:white;
  }
  .head-left{
    display: flex;
    height: 100%;
    align-items: center;
  }
  .head-left span{
    display: inline-block;
      width: 100px;
      text-align: center;
      height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .head-left span.cur{
    background: #009900;
  }
  .head-left span a{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .head-right{
    cursor: pointer;
  }
  .login-span{
    border-right: 1px solid white;
    text-align: center;
    margin-right: 4px;
  }
</style>
