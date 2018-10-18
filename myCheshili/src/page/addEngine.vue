<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right breadStyle">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      <el-button type="primary"  class="fr" @click="goBack('ruleForm')">进入列表页面</el-button>
    </el-breadcrumb>
    <el-row  style="margin-top: 20px;">
      <el-col  :span="12" :offset="4">
         <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-form-item label="设备唯一标识" prop="DeviceNum">
           <el-input v-model.number="ruleForm.DeviceNum"></el-input>
         </el-form-item>
           <el-form-item label="设备所属通道" prop="Channel">
             <el-input v-model="ruleForm.Channel"></el-input>
           </el-form-item>
            <el-form-item label="设备进出类型" prop="InOrOut">
               <el-select v-model="ruleForm.InOrOut" placeholder="请选择设备进出类型">
                  <el-option label="进入设备" value="0"></el-option>
                  <el-option label="离开设备" value="1"></el-option>
               </el-select>
            </el-form-item>
        <el-form-item label="设备语音播报内容" prop="Speak">
          <el-input type="textarea" v-model="ruleForm.Speak"></el-input>
        </el-form-item>
           <el-form-item label="设备显示屏显示内容" prop="View">
             <el-input type="textarea" v-model="ruleForm.View"></el-input>
           </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "addEngine",
    data() {
      return {
        token: this.getToken(),
        ruleForm: {
          WToken:this.getToken(),
          DeviceNum: '',
          Channel: '',
          InOrOut: '',
          Speak: '',
          View: ''
        },
        rules: {
          DeviceNum: [
            {required: true, message: '请选择设备唯一标识', trigger: 'blur'},
            {type:'number',message: '设备唯一标识必须为纯数字', trigger: 'blur'}
          ],
          Channel: [
            {required: true, message: '请选择设备所属通道', trigger: 'blur'},
          ],
          InOrOut: [
            {required: true, message: '请选择设备进出类型', trigger: 'change'}
          ],
          Speak: [
            {required: true, message: '请选择设备语音播报内容', trigger: 'blur'},
          ],
          View: [
            {required: true, message: '请选择设备显示屏显示内容', trigger: 'blur'},
          ],
        }
      }
    },
    mounted(){

    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post(
              this.url+'Device/AddDevice',
              this.ruleForm
              ,{emulateJSON:true}
            ).then(function(result){
              if(result.body.Status == 0) {
                this.$message({
                  message: '添加成功',
                  type: 'success'
                });
              }else if(result.body.Status == -1){
                this.$notify.error({
                  title: '登录失效',
                  message: '将进入登录页面',
                  offset: 100
                });
                this.$router.push('/');
              }else {
                this.$notify.error({
                  title: '错误',
                  message: '请输入正确的用户名密码',
                  offset: 100
                });
                return false;
              }
            }, function(result){
              console.log(result);
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      goBack(formName) {
        this.$refs[formName].resetFields();
        this.$router.push({ path: 'engine'})
      }
    }
  }
</script>
<style lang="less">
  .filterBlock {
    margin-left: 30px;
    border: 2px solid #eee;
    box-shadow: 0 0 1.5px #eee;
    border-top-color: #2D4FA7;
    box-sizing: border-box;
    .filterHeader {
      background-color: #FCFCFC;
      padding: 0 14px;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #EBEBEB;
      font-size: 20px;
    }
    .filterContent {
      padding: 8px 16px 25px 16px;
      .filterInput {
        padding-bottom: 12px;
        border-bottom: 1px solid #eee;
        box-shadow: 0 0 1.5px #eee;
        .filterText {
          margin-bottom: 12px; margin-top: 12px;
        }
      }
    }
  }
  .breadStyle {
    height: 50px;
  }
  .tableTop {
    height: 40px;
    line-height: 40px;
    font-size:0;
    :last-child {
      border-right: 2px solid #eee;
    }
  }
  .table {
    padding: 32px;
    border: 2px solid #eee;
    border-top: 0;
    box-shadow: 0 0 1.5px #eee;
    .el-table__header-wrapper {
      /*border-top: 1px solid #ebeef5;*/
    }
  }
  .el-tabs__header {
    margin: 0;
  }
  .el-tabs__item {
    width: 150px;
    text-align: center;
    font-size: 20px;
  }
  .el-tabs__item.is-active {
    border-top: 2px solid #2D4FA7;
  }
  .el-tabs--card>.el-tabs__header {
    border-bottom: 1px solid #e4e7ed;
    box-shadow: 0 0 1.5px #eee;
  }
  .el-table th {
    background: #FAFAFA;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
  }
  .el-dialog__title {
    font-weight: 700;
  }

</style>
