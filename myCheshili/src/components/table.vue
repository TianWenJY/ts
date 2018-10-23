<template>
        <el-tabs v-model="activeTag" type="card" @tab-click="handleClick">
            <!-- <el-tab-pane  class="table" name="first" label="用户管理"> -->
               <el-table
             ref="multipleTable" border
             :data="deviceList"
             tooltip-effect="dark"
             style="width: 100%"
             @selection-change="handleSelectionChange">
 <!--             <el-table-column
               type="selection"
               >
             </el-table-column> -->
             <el-table-column
               label="区域代码"
               >
               <template slot-scope="scope">{{ scope.row.AreaCode }}</template>
             </el-table-column>
             <el-table-column
                 prop="AreaLevel"
                 label="区域等级"
                 >
               </el-table-column>
               <el-table-column
                   prop="AreaName"
                   label="区域名称"
                   >
                 </el-table-column>
               <el-table-column
                   prop="BelongCode"
                   label="区域上级"
                   >
                 </el-table-column>
           </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40,50]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total='totalCount' style="margin-top:15px;">
              </el-pagination> 
         <!-- </el-tab-pane> -->
        </el-tabs>
</template>

<script>
    export default {
    	name:'Table',
        props: [
            'deviceList'
        ],
        data() {
            return {
                activeTag: 'first',
                totalCount:20,
                currentPage: 1,
                pageSize: 10,
                pageNum:'',
                token: this.getToken()
            }
        },
        methods: {
        handleClick(tab, event) { //分页
          console.log(tab, event);
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        handleSizeChange(val) {
          this.pageSize = val;
                    var   param =  {
                    WToken:this.token,
                    N:this.pageNum,
                    Rows:this.pageSize
                    }
        this.$emit('tableList',param); 
        },
        handleCurrentChange(val) {
            this.pageNum = val;
             var   param =  {
                    WToken:this.token,
                    N:this.pageNum,
                    Rows:this.pageSize
                    }
            this.$emit('tableList',param); 
        },
        }
    }
</script>

<style lang="less">
	.header_container{
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		 padding-left: 20px;
	}
	.el-dropdown-menu__item{
        text-align: center;
    }
</style>