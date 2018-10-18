/**
 * Created by tianw on 2018/5/30.
 */
import VueResource from 'vue-resource'
export default {
  install(Vue, VueResource) {
    Vue.prototype.url = 'http://192.168.0.86:8099/Store/';
    Vue.prototype.getToken = function () {
      var token = sessionStorage.getItem('__TOKEN__');
          if(token) {
            return token;
          } else {
              this.$alert('对不起，您没有登录', '去登陆系统', {
                confirmButtonText: '确定',
                showClose:false,
                callback: action => {
                  this.$router.push('/');
                }
              })
          }
    },
      Vue.prototype.setToken = function (token) {
        sessionStorage.setItem('__TOKEN__', token)
      },
      Vue.prototype.post = function (url, params,cb) {
        let token = this.getToken();
        if (typeof String.prototype.startsWith != 'function') {
          String.prototype.startsWith = function (prefix){
              return this.slice(0, prefix.length) === prefix;
          };
      }
      if (token) {
          if (!url.startsWith(this.config.url)) {
              url = this.config.url + url;
          }
          if (!params.Token) {
              $.extend(data, {
                  WToken: token
              });
          }
      return new Promise((resolve, reject) => {
        Vue.http.post(
          url,
          params,
          {emulateJSON: true}
        )
          .then(cb)
          .catch((err) => {
            reject(err);
          });
      });
      }
    }
  }
}
