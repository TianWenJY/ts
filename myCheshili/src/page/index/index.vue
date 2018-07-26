<template>
    <el-container class="myIndex">
      <el-header class="header">车势力公众平台</el-header>
      <el-container class="indexMain">
         <el-aside width="240px" style="height: 100%; background: #2c3f4d;">
         <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        @open="handleOpen"  router
        @close="handleClose"
        background-color="#2c3f4d"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="2">
          <el-menu-item index="index">
            <i class="el-icon-setting"></i>
            <span slot="title">统计</span>
          </el-menu-item>
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="4">
            <template slot="title">进出场记录</template>
            <el-menu-item index="engine">进场记录</el-menu-item>
            <el-menu-item index="engine">出场记录</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="engine">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
      </el-aside>
         <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
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
    }
    .el-main {
      box-shadow: 0 0 10px #888 inset;
      padding: 30px;
    }
  }
</style>
