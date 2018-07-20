<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right breadStyle">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
       <el-col :span="18">
         <el-tabs v-model="activeTag" type="card" @tab-click="handleClick">
            <el-tab-pane  class="table" name="first" label="用户管理">
               <el-table
             ref="multipleTable" border
             :data="tableData3"
             tooltip-effect="dark"
             style="width: 100%"
             @selection-change="handleSelectionChange">
             <el-table-column
               type="selection"
               width="55">
             </el-table-column>
             <el-table-column
               label="日期"
               width="120">
               <template slot-scope="scope">{{ scope.row.date }}</template>
             </el-table-column>
             <el-table-column
               prop="name"
               label="姓名"
               width="120">
             </el-table-column>
             <el-table-column
               prop="address"
               label="地址"
               show-overflow-tooltip>
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
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400" style="margin-top:15px;">
              </el-pagination>
         </el-tab-pane>
         </el-tabs>

       </el-col>
      <el-col :span="5" class="filterBlock">
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
              <el-input type="text" class="form-control" placeholder="请输入时间例如(2018-8-8)"></el-input>
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
  </div>
</template>

<script>
    export default {
      name: "engine",
      data() {
        return {
          activeTag:'first',
          currentPage1: 5,
          currentPage2: 5,
          currentPage3: 5,
          currentPage4: 4,
          tableData3: [{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-08',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
            {
              date: '2016-05-07',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }],
          multipleSelection: []
        }
      },

      methods: {
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        handleClick(tab, event) { //分页
          console.log(tab, event);
        },      handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },
        GetDevice() {
          this.$http.post(
            this.url+'Login/LG',
            {
              // WToken: ,
              Password:this.ruleForm2.pass,
              Platform:23,
              Mobile:13256219787
            },{emulateJSON:true}
          ).then(function(result){
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
            alert(result);
          });

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

</style>
