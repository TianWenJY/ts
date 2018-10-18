<template>
    <el-container class="myIndex">
      <el-header class="header" style="height:45px;">车势力公众平台</el-header>
      <el-container class="indexMain">
         <el-aside width="240px" class="aside">
         <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        @open="handleOpen"  router
        @close="handleClose"
        background-color="#2c3f4d"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="2">
<!--           <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">统计</span>
          </el-menu-item> -->
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>通联支付</span>
          </template>
          <el-menu-item index="areacode">地区码列表</el-menu-item>
          <el-menu-item index="firstInfo">用户银行卡</el-menu-item>
          <el-menu-item index="firstInfo">商户卡列表</el-menu-item>
          <el-menu-item index="firstInfo">订单号列表</el-menu-item>
          <el-menu-item index="firstInfo">交易记录</el-menu-item>
          <el-menu-item index="tluser">商户列表</el-menu-item>
<!--           <el-menu-item-group>
            <template slot="title">团队管理</template>
            <el-menu-item index="firstInfo">代理商列表</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group> -->
<!--           <el-submenu index="4">
            <template slot="title">进出场记录</template>
            <el-menu-item index="engine">进场记录</el-menu-item>
            <el-menu-item index="engine">出场记录</el-menu-item>
          </el-submenu> -->
        </el-submenu>
        <el-menu-item index="engine">
          <i class="el-icon-menu"></i>
          <span slot="title">团队管理</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>

       <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>团队</span>
          </template>
            <el-menu-item index="firstInfo">代理商列表</el-menu-item>
        </el-submenu>
      </el-menu>
      </el-aside>
        <el-col style="overflow-y:auto;    overflow-x: hidden;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
      </el-container>
    </el-container>
</template>

<script>
    export default {
        name: 'Index',
      computed: {
        defaultActive: function(){
          return this.$route.path.replace('/index', '');
        }
      },
      created:function () {
        // this.aa()
        // alert(1)
        // this.$router.push('/');
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        aa() {
            this.$alert('这是一段内容', '标题名称', {
              confirmButtonText: '确定',
              callback: action => {
                this.$route.path.replace('/', '');
              }
            })
          }
      }
    }
</script>

<style    lang="less">
  .myIndex {
     height: 100%;
     .header {
       background: #2c3f4d;
     }
    .indexMain {
      height: 100%;
      .aside {
        height: 100%; 
        background: #2c3f4d; 
        overflow-x: hidden;
        overflow-y: auto;
      }
    }
    .el-main {
      box-shadow: 0 0 10px #888 inset;
      //padding: 30px;
    }
  }
</style>
