<template>
    <el-container class="myIndex">
      <el-header class="header" style="height:45px;">车势力公众平台</el-header>
      <el-container class="indexMain">
        <Nav></Nav>
        <el-col style="overflow-y:auto;overflow-x: hidden;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
      </el-container>
    </el-container>
</template>

<script>
    import Nav from '../nav.vue'
    export default {
      name: 'Index',
      components: {
        Nav
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
