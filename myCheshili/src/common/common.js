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
      Vue.prototype.post = function (url, params,func) {
        let token = this.getToken();
        if (typeof String.prototype.startsWith != 'function') {
          String.prototype.startsWith = function (prefix){
              return this.slice(0, prefix.length) === prefix;
          };
       }
       if(token) {
        if (!url.startsWith(this.url)) {
          url = this.url + url;
         }
         console.log(params.WToken)
         console.log(!params.WToken)
         if(!params.token) {
          params = Object.assign(params,{WToken:token})
        }
       }
      return new Promise((resolve, reject) => {
        this.$http.post(
          url,
          params,
          {emulateJSON: true}
        )
          .then(func)
          .catch((err) => {
            reject(err);
          });
      });
    },     
     Vue.prototype.tpost = function (url, params,func) {
    return new Promise((resolve, reject) => {
      this.$http.post(
        url,
        params,
        {emulateJSON: true}
      )
        .then(func)
        .catch((err) => {
          reject(err);
        });
    });
  },
    Vue.prototype.get10Time = function (time) {
      if(time == '') {
        return  ''
    }
    var date = time ? new Date(time) : new Date();
    return Math.round(date.getTime() / 1000);
    },
            // 10位时间戳转时间
    Vue.prototype.timeToStr = function(time, fmt) {
      if(time == null || time == '') {
        return '————'
      }else {
        return new Date(time * 1000).pattern(fmt || 'yyyy-MM-dd');
      }
    },
    Vue.prototype.loginTimeOut = function(status) {
      if(status == -1) {
        layer
      }
    },
    // 获取用户信息
    Vue.prototype.getUserInfo = function () {
      let uInfoStr = sessionStorage.getItem('__UINFO__');
      if(!uInfoStr) {
        return false;
      }
      return analyzeToken(uInfoStr);
    },
    Vue.prototype.analyzeToken = function(token) {
      var uInfo = Base64.decode(unescape(token)),
          uObj = JSON.parse(uInfo);
      return uObj;
    }
  }
}
Date.prototype.pattern = function(fmt) {
  var o = {
      "M+": this.getMonth() + 1, //月份           
      "d+": this.getDate(), //日           
      "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时           
      "H+": this.getHours(), //小时           
      "m+": this.getMinutes(), //分           
      "s+": this.getSeconds(), //秒           
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度           
      "S": this.getMilliseconds() //毫秒           
  };
  var week = {
      "0": "/u65e5",
      "1": "/u4e00",
      "2": "/u4e8c",
      "3": "/u4e09",
      "4": "/u56db",
      "5": "/u4e94",
      "6": "/u516d"
  };
  if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
  }
  for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
  }
  return fmt;
};
