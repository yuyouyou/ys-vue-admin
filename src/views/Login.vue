<template>
  <div class="login-container">
      <el-form label-position="left" :rules="rules" ref="formLabelAlign" label-width="0px" :model="formLabelAlign">
          <h3 class="title">系统登录</h3>
          <el-form-item prop="name">
              <el-input v-model="formLabelAlign.name" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
              <el-input type="password" v-model="formLabelAlign.pass" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
              <el-input type="password" v-model="formLabelAlign.checkPass" placeholder="确认密码"></el-input>
          </el-form-item>
          <el-form-item>
              <el-checkbox v-model="formLabelAlign.checked" checked class="remember">记住密码</el-checkbox>
          </el-form-item>
          <el-form-item>
              <el-button style="width:100%;" type="primary" @click="handleSubmit" :loading="logining">登录</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import { requestLogin } from '../api/api';
export default {
  name: 'Login',
  data () {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.formLabelAlign.checkPass !== '') {
            this.$refs.formLabelAlign.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.formLabelAlign.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      formLabelAlign: {
          name: 'yushuang',
          pass: '123456',
          checkPass: '123456',
          checked:true
      },
      logining: false,
      rules: {
          name: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
    }
  },
  methods: {
      handleSubmit(ev) {
        var _this = this;
        this.$refs.formLabelAlign.validate((valid) => {

          if (valid) {
            this.logining = true;
            var loginParams = { username: this.formLabelAlign.name, password: this.formLabelAlign.pass };
            requestLogin(loginParams).then(data => {
              this.logining = false;
              let { msg, code, user } = data;
              if (code !== 200) {
                this.$message({
                  message: msg,
                  type: 'error'
                });
              } else {
                sessionStorage.setItem('user', JSON.stringify(user));
                this.$router.push({ path: '/table' });
              }
            });

          } else {
              
            this.$message({
                message: 'error submit!!',
                type: 'error'
            });
            return false;
          }
        });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
.login-container .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}
.login-container .remember {
    float: left;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
