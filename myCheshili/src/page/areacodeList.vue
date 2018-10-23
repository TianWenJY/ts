<template>
  <div>
     <bread-crumb></bread-crumb>  
     <el-row class="containt">
      <el-row>
        <!-- <Filters @tableList="tableList" :parameter='parameter' :filters="filters"></Filters> -->
        <el-col class="filterBlock">
        <el-row class="filterContent"   :gutter="20">
        <el-col  class="filterInput" :span="4">
          <el-col class="filterText">区域代码</el-col>
          <el-input type="text" class="form-control" placeholder="请输入区域代码"  v-model.trim="parameter.AreaCode" clearable>
          </el-input>
        </el-col>
        </el-row>
        </el-col>
      </el-row>
    <el-row>
       <el-col :span="24">

         <Table :deviceList="deviceList" @tableList="tableList"></Table>

       </el-col>
    </el-row>
     </el-row>
  </div>
</template>

<script>
    import breadCrumb from '@/components/breadCrumb'
    import Table from '@/components/Table'
    // import Filters from '@/components/Filters'
    export default {
      name: "AreaCode",
      components: {
        breadCrumb,
        Table,
        // Filters
      },
      data() {
        return {
          token: this.getToken(),
          Count:'',
          WToken:this.token,
          value3:'',
          selectTable:{},
          dialogFormVisible:false,
          deviceList: [],
          formLabelWidth:'120px',
          parameter : {
            WToken:'',
            Keys:'',
            AreaCode:'',
            N:1,
            Rows:10
          },
          // filters:[
          //   {'type':'text','label':'关键字','placeholder':'请输入关键字','keyVaule':{'Kyers':''}},
          //   {'type':'text','label':'区域代码','placeholder':'请输入区域代码','keyVaule':{'AreaCode':''}},
          //   {'type':'time','label':'时间日期','placeholder':'','keyVaule':{'Date':''}},
          //   {'type':'select','label':'是否可用','placeholder':'请选择是否可用','keyVaule':{'isSelect':''},'options':[
          //     {'value':'','name':'全部'},{'value':'1','name':'可用'},{'value':'2','name':'不可用'}]},
          // ]
        }
      },
      created(){
        var _this = this;
            // _this.parameter.Rows = _this.pageSize;
            _this.parameter.WToken = _this.token;
            _this.tableList(_this.parameter);
      },
      methods: {
        // tableList(parameter) {
        //   var _this = this;
        //   this.$http.post(
        //     this.url+'TlPay/QueryTlAreacodeList',
        //     parameter
        //    ,{emulateJSON:true}
        //   ).then(function(result){
        //     if(result.body.Status == 0) {
        //       _this.totalCount = parseInt(result.body.Data.Count);
        //       _this.deviceList = result.body.Data.Rows;
        //     }else if(result.body.Status == -1){
        //       this.$notify.error({
        //         title: '登录失效',
        //         message: '将进入登录页面',
        //         offset: 100
        //       });
        //       this.$router.push('/login');
        //     }else {
        //       this.$notify.error({
        //         title: '错误',
        //         message: '请输入正确的用户名密码',
        //         offset: 100
        //       });
        //       return false;
        //     }
        //   }, function(result){
        //      console.log(result);
        //   });

        // },
       tableList(parameter) {
          var _this = this;
          this.post(
            'TlPay/QueryTlAreacodeList',
            parameter
           ,
           (res) => {
             if(res.body.Status == 0) {
              _this.totalCount = parseInt(res.body.Data.Count);
              _this.deviceList = res.body.Data.Rows;
            }else if(res.body.Status == -1){
              this.$notify.error({
                title: '登录失效',
                message: '将进入登录页面',
                offset: 100
              });
              this.$router.push('/login');
            }else {
              this.$notify.error({
                title: '错误',
                message: '请输入正确的用户名密码',
                offset: 100
              });
              return false;
            }
           }
          )
        },
        handleEdit(index, row) {
          this.selectTable = row;
          this.dialogFormVisible = true;
        },
        upDateEngine(id) {
          this.$http.post(
            this.url+'AdminQrMobileMng/QueryFirstDispenseInfoList',
          {
                 WToken:$$.getToken(),
                 N:1,
                 Rows:10,
                 Keys:'',
                 Date:'',
                Mobile:''
         }
            ,{emulateJSON:true}
          ).then(function(result){
            if(result.body.Status == 0) {
              this.$message({
                type: 'success',
                message: '更新当前设备成功'
              });
              this.tableList();
            }else if(result.body.Status == -1){
              this.$notify.error({
                title: '登录失效',
                message: '将进入登录页面',
                offset: 100
              });
            }else {
              this.$notify.error({
                title: '错误',
                message: '更新失败',
                offset: 100
              });
              return false;
            }
          }, function(result){
            alert(result);
          });
        },
        addDateEngine() {
          this.$router.push({ path: 'addEngine'})
        }
      }
    }
</script>
<style lang="less">
.containt {
  padding: 20px;
  padding-top: 0;
}
  .filterBlock {
    margin-bottom: 20px;
    border: 2px solid #eee;
    box-sizing: border-box;
    .filterHeader {
      background-color: #FCFCFC;
      padding: 0 14px;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #EBEBEB;
      font-size: 16px;
    }
    .filterContent {
      padding: 8px 16px 16px 16px;
      .filterInput {
        //box-shadow: 0 0 1.5px #eee;
        .filterText {
          margin-bottom: 6px;
        }
      }
      .filterFirst {
        margin-right: 15px;
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
