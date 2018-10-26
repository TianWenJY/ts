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
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>门店管理</span>
          </template>
          <el-menu-item index="applystore">申请门店</el-menu-item>
          <el-menu-item index="firstInfo">门店一览</el-menu-item>
          <el-menu-item index="firstInfo">员工一览</el-menu-item>
        </el-submenu>
       </el-menu-item> 
       
       <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>实名管理</span>
          </template>
            <el-menu-item index="certification">实名认证</el-menu-item>
        </el-submenu>

       <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>团队</span>
          </template>
            <el-menu-item index="firstInfo">代理商列表</el-menu-item>
        </el-submenu>

        
      <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>系统设置</span>
          </template>
            <el-menu-item index="role">角色设置</el-menu-item>
            <el-menu-item index="menu">菜单管理</el-menu-item>
            <el-menu-item index="rolepersimion">菜单管理</el-menu-item>
            <el-menu-item index="staff">员工一览</el-menu-item>
        </el-submenu>
      </el-menu>
      </el-aside>
        <el-col style="overflow-y:auto;overflow-x: hidden;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
      </el-container>
    </el-container>
</template>

<script>
    // import Nav from '../nav.vue'
    export default {
      name: 'Index',
      components: {
        // Nav
      },
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
