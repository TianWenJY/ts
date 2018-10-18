<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right breadStyle">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      <el-button type="primary" class="fr" @click="addDateEngine">添加设备</el-button>
    </el-breadcrumb>
        <el-row>
      <el-col :span="24" class="filterBlock">
          <el-col class="filterHeader">
            <i class="el-icon-search" style="color: #2D4FA7; font-size: 24px; margin-right: 2px;"></i> 筛选
          </el-col>
          <div class="filterContent">
            <el-col class="filterInput">
              <el-col class="filterText">查询关键字</el-col>
              <el-input type="text" class="form-control" placeholder="请输入关键字"></el-input>
            </el-col>
            <el-col  class="filterInput" >
              <el-col class="filterText">手机号</el-col>
              <el-input type="text" class="form-control" placeholder="请输入手机号"></el-input>
            </el-col>
            <el-col class="filterInput" >
              <el-col class="filterText">时间选择</el-col>
              <el-time-picker
                class="form-control"
                arrow-control
                size=""
                v-model="value3"
                :picker-options="{
                  selectableRange: '18:30:00 - 20:30:00'
                  }"
                placeholder="任意时间点">
              </el-time-picker>
            </el-col>
            <el-col style="margin-bottom: 30px; margin-top: 20px;">
              <el-button class="btn btn-info filter  fr" style=" margin-left:15px; ">
                <span class="glyphicon glyphicon-filter">筛选</span>
              </el-button>
              <el-button class="btn btn-info filter fr">
                <span class="glyphicon glyphicon-filter">重置</span>
              </el-button>
            </el-col>
          </div>
      </el-col>
    </el-row>
    <el-row>
       <el-col :span="24">
         <el-tabs v-model="activeTag" type="card" @tab-click="handleClick">
            <el-tab-pane  class="table" name="first" label="用户管理">
               <el-table
             ref="multipleTable" border
             :data="deviceList"
             tooltip-effect="dark"
             style="width: 100%"
             @selection-change="handleSelectionChange">
             <el-table-column
               type="selection"
               >
             </el-table-column>
             <el-table-column
               label="设备标识"
               width="180"
               >
               <template slot-scope="scope">{{ scope.row.DeviceNum }}</template>
             </el-table-column>
             <el-table-column
                 prop="Channel"
                 label="设备所属通道"
                 width="180"
                 >
               </el-table-column>
             <el-table-column
                 prop="InOrOut"
                 label="设备进出类型"
                 width="180"
                 >
               </el-table-column>
               <el-table-column
                   prop="Speak"
                   label="设备语音播报内容"
                   width="180">
                 </el-table-column>
               <el-table-column
                   prop="AddTime"
                   label="录入时间"
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
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[2, 4, 6, 8,10]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total='totalCount' style="margin-top:15px;">
              </el-pagination>

              <el-dialog title="修改设备" :visible.sync="dialogFormVisible">
                <el-form :model="selectTable">
                  <el-form-item label="设备标识" :label-width="formLabelWidth">
                    <el-input v-model="selectTable.DeviceNum" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="设备所属通道" :label-width="formLabelWidth">
                    <el-input v-model="selectTable.Channel" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="设备显示内容 m," :label-width="formLabelWidth">
                    <el-input v-model="selectTable.View" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="设备进出类型" :label-width="formLabelWidth">
                    <el-select v-model="selectTable.InOrOut" placeholder="请选择设备进出类型">
                      <el-option label="设备进入" value="0"></el-option>
                      <el-option label="设备离开" value="1"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="语音播报内容" :label-width="formLabelWidth">
                    <el-input type="textarea"  v-model="selectTable.Speak"
                              auto-complete="off"
                              :autosize='{ minRows: 2, maxRows: 6 }'
                              placeholder="请输入语音播报内容"
                    ></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="upDateEngine(selectTable.ID)">确 定</el-button>
                </div>
              </el-dialog>
         </el-tab-pane>
         </el-tabs>
       </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
      name: "engine",
      data() {
        return {
          activeTag: 'first',
          token: this.getToken(),
          Count:'',
          WToken:this.token,
          value3:'',
          selectTable:{},
          dialogFormVisible:false,
          deviceList: [],
          formLabelWidth:'120px',
          totalCount:9,
          currentPage: 1,
          parameter : {
            WToken:this.token,
            N:"",
            Rows:this.pageSize
          },
          pageSize: 2,
          pageNum:''
        }
      },
      mounted(){
        this.GetDevice({
          WToken:this.token,
          N:"",
          Rows:this.pageSize
        });
      },
      methods: {
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        handleClick(tab, event) { //分页
          console.log(tab, event);
        },
        handleSizeChange(val) {
          this.pageSize = val;
          this.GetDevice({
            WToken:this.token,
            N:this.pageNum,
            Rows:this.pageSize
          });
        },
        handleCurrentChange(val) {
          this.pageNum = val;
          this.GetDevice({
            WToken:this.token,
            N:this.pageNum,
            Rows:this.pageSize
          });
        },
        GetDevice(parameter) {
          var _this = this;
          this.$http.post(
            this.url+'Device/GetDevice',
            parameter
           ,{emulateJSON:true}
          ).then(function(result){
            if(result.body.Status == 0) {
              _this.deviceList = result.body.Data.Rows;
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

        },
        handleEdit(index, row) {
          this.selectTable = row;
          this.dialogFormVisible = true;
        },
        upDateEngine(id) {
          this.$http.post(
            this.url+'Device/EditDevice',
            {
              WToken: this.token,
              ID: id,
              DeviceNum: this.selectTable.DeviceNum,
              Channel: this.selectTable.Channel,
              InOrOut: this.selectTable.InOrOut,
              Speak: this.selectTable.Speak,
              View: this.selectTable.View
            }
            ,{emulateJSON:true}
          ).then(function(result){
            if(result.body.Status == 0) {
              this.$message({
                type: 'success',
                message: '更新当前设备成功'
              });
              this.GetDevice();
            }else if(result.body.Status == -1){
              this.$notify.error({
                title: '登录失效',
                message: '将进入登录页面',
                offset: 100
              });
              // this.$router.push('/');
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
