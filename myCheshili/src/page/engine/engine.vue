<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right breadStyle">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
       <el-col :span="18" class="table">
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
            <el-button class="btn btn-info filter  pull-right" style="margin-top: 12px;">
              <span class="glyphicon glyphicon-filter">筛选</span>
            </el-button>
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
      padding: 8px 12px 25px 12px;
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
  .table {
    padding: 20px 12px 30px 12px;
    border: 2px solid #eee;
    box-shadow: 0 0 1.5px #eee;
  }

</style>
