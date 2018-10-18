<template>
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40,50]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total='totalCount' style="margin-top:15px;">
              </el-pagination>
</template>

<script>
    export default {
    	name:'pagination',
        methods: {
        handleSizeChange(val) {
        //   this.pageSize = val;
        //   this.tableList({
        //     WToken:this.token,
        //     N:this.pageNum,
        //     Rows:this.pageSize
        //   });
        },
        handleCurrentChange(val) {
        //   this.pageNum = val;
        //   this.tableList({
        //     WToken:this.token,
        //     N:this.pageNum,
        //     Rows:this.pageSize
        //   });
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