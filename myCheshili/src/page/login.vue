<template>
  <div class="login">
    <section>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="user">
          <el-input type="password" v-model="ruleForm2.user" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
    export default {
        name: 'Login',
      data() {
        var validateUser = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入用户名'));
          } else {
            if (this.ruleForm2.user !== '') {
//              this.$refs.ruleForm2.validateField('user');
            }
            callback();
          }
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm2.checkPass !== '') {
//              this.$refs.ruleForm2.validateField('checkPass');
            }
            callback();
          }
        };
        return {
          ruleForm2: {
            pass: '',
            user:''
          },
          rules2: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
           user: [
              { validator: validateUser, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        async submitForm(formName) {
            console.log(this.$refs[formName])
          this.$refs[formName].validate(async (valid) =>{
              if(valid) {
                  const res = await this.login()
                console.log(res)
              }
          })
        },
        login() {
          this.$http.post(
            'http://192.168.0.86:80/Store/Login/LG',
            {
              AdminName:this.ruleForm2.user,
              Password:this.ruleForm2.pass,
              BigPlatform:21,
              Mobile:13256219787
            },{emulateJSON:true}
          ).then(function(result){
              console.log(result)
            if(result.body.Status == 0) {
              this.$message({
                type: 'success',
                message: '登录成功'
              });
              this.$router.push('index')
            }else {
              this.$notify.error({
                title: '错误',
                message: '请输入正确的用户名密码',
                offset: 100
              });
              return false;
            }
          }, function(result){
            alert("fack");
          });

        }
      }
    }
</script>

<style  lang="less">
   .login {
     overflow: hidden;
     width: 100%;
     height: 100%;
     background-image: url(../assets/images/login/bg.jpg);
     background-repeat: no-repeat;
     background-size: cover;
     position: relative;
     section {
       height: 240px;
       width: 100%;
       background-color: rgba(0, 0, 0, 0.4);
       position: absolute;
       top: 30%;
       text-align: center;
       -webkit-transition: height 0.4s, top 0.4s;
       transition: height 0.4s, top 0.4s;
       .demo-ruleForm {
         height: 240px;
         width: 350px;
         position: absolute;
         top: 0;
         right: 20%;
         padding-top: 40px;
         -webkit-transition: height 0.4s, width 0.4s, padding-top 0.4s;
         transition: height 0.4s, width 0.4s, padding-top 0.4s;
       }
     }
   }
</style>
