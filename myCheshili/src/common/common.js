/**
 * Created by tianw on 2018/5/30.
 */
export default {
  install(Vue, options) {
    Vue.prototype.url = 'http://47.94.94.94:8085/NoSense/';
    Vue.prototype.getToken = function () {
      var token = sessionStorage.getItem('__TOKEN__');
          if(token) {
            return token;
          } else {
              this.$alert('这是一段内容', '标题名称', {
                confirmButtonText: '确定',
                showClose:false,
                callback: action => {
                  this.$route.push('/');
                }
              })
          }
    }
  }
}
