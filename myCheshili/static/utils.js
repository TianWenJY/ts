import VueResource from 'vue-resource'
export default {
        // 对外暴露对象
            config: {
                // serverAddr: 'http://api.cheshili.com.cn/Store/',
                serverAddr: 'http://192.168.0.86:8099/Store/',
                // serverAddr: 'http://139.199.29.196/Store/',
                fileAdmin:'http://api.cheshili.com.cn/'
    
            },
            // 设置cookie，expiredays传 为30天
            setCookie: function(name, value, expiredays) {
                dfdf
                var exdate = new Date();
                exdate.setDate(exdate.getDate() + (expiredays || 30));
                document.cookie = name + "=" + escape(value) + ";expires=" + exdate.toGMTString();
            },
            // 获取cookie
            getCookie: function(name) {
                var arr,
                    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
                if (arr = document.cookie.match(reg)) {
                    return unescape(arr[2]);
                } else {
                    return null;
                }
            },
            // 删除cookie
            delCookie: function(name) {
                var exp = new Date();
                exp.setTime(exp.getTime() - 1);
                var cval = $$.getCookie(name);
                if (cval != null) {
                    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
                }
            },        
            // 时间转10位时间戳
            get10Time: function(time) {
                if(time == '') {
                    return  ''
                }
                var date = time ? new Date(time) : new Date();
                return Math.round(date.getTime() / 1000);
            },
            // 10位时间戳转时间
            timeToStr: function(time, fmt) {
                if(time == null || time == '') {
                    return '————'
                }else {
                    return new Date(time * 1000).pattern(fmt || 'yyyy-MM-dd');
                }
            },
            //eval JSON数据
            eval: function(s) {
                if (s.Status != undefined)
                    return s;
                if ($.trim(s) == "") {
                    s = {
                        Status: undefined
                    };
                } else {
                    try {
                        s = JSON.parse(s);
                    } catch (e) {
                        s = {
                            Status: undefined
                        };
                    }
                }
                return s;
            },
            // 查询当前url中的参数的值
            getQueryString: function(name, url) {
                if (url === undefined) {
                    url = location.href;
                }
                if (url.indexOf('?') == -1) {
                    return undefined;
                }
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var q = url.split("?");
                var r = q[1].match(reg);
                if (r != null) return unescape(r[2]);
            },
            // 当前url
            getUrl: function() {
                return $$.getCookie("__URL__");
            },
            // ajax get
            get: function(url, succFunc, errFunc, isSync) {
                var urlToken = $$.getQueryString('Token', url),
                    token = $$.getCookie('__TOKEN__');
                if (!urlToken && token) {
                    if (url.indexOf('?') != -1) {
                        url += '&Token=' + token;
                    } else {
                        url += '?Token=' + token;
                    }
                }
                if (!url.startsWith($$.config.serverAddr)) {
                    url = $$.config.serverAddr + url;
                }
                $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'json',
                    async: isSync ? false : true,
                    success: function(data) {
                        if (succFunc) {
                            succFunc($$.eval(data));
                        }
                    },
                    error: function(error) {
                        if (errFunc) {
                            errFunc(error);
                        }
                    }
                });
            },
            Vue.$http.post(
                this.url+'AdminQrMobileMng/QueryFirstDispenseInfoList',
                parameter
               ,{emulateJSON:true}
              ).then(function(result){
                if(result.body.Status == 0) {
                  _this.totalCount = parseInt(result.body.Data.Count);
                  console.log(result.body.Data.Count)
                  _this.deviceList = result.body.Data.Rows;
                }else if(result.body.Status == -1){
                  this.$notify.error({
                    title: '登录失效',
                    message: '将进入登录页面',
                    offset: 100
                  });
                  this.$router.push('/login');
                }else {
                  this.$notify.error({
                    title: '错误',
                    message: '请输入正确的用户名密码',
                    offset: 100
                  });
                  return false;
                }
              }, function(result){
                 console.log(result);
              });

              post(url, params,cb) {
                if (!url.startsWith($$.config.serverAddr)) {
                    url = config.serverAddr + url;
                }
                if (!data.Token) {
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
              },
            // ajax post
            setToken: function(token) {
                //$$.setCookie('__TOKEN__', token);
                sessionStorage.setItem('__TOKEN__', token);
            },
            getToken: function(isParent) {
                //var token = $$.getCookie('__TOKEN__');
                var token = sessionStorage.getItem('__TOKEN__');
                if (token) {
                    return token;
                } else {
                    //layer.msg('登录超时，请重新登录！');
                    if (isParent) {
                        win.location.replace('./login/login.html');
                    } else {
                        layer.alert('登录超时，请重新登录！', {
                            title: false,
                            closeBtn: 0
                        }, function(index) {
                            win.parent.location.replace('../../login/login.html');
                            layer.close(index);
                        });
                    }
                }
            },
            // 删除token
            delToken: function() {
                sessionStorage.removeItem('__TOKEN__');
            },
            // 登录超时，参数，状态码为-1时提示重新登录
            loginTimeOut: function(status) {
                if (status == -1) {
                    layer.alert('登录超时，请重新登录！', {
                        title: false,
                        closeBtn: 0
                    }, function(index) {
                        window.parent.location.replace('../login/login.html');
                        layer.close(index);
                    });
                }
            },
            loginOut: function(status) {
                if (status == -1) {
                    layer.alert('登录超时，请重新登录！', {
                        title: false,
                        closeBtn: 0
                    }, function(index) {
                        window.parent.location.replace('../login/login.html');
                        layer.close(index);
                    });
                }
            },
        encodeID: function(id) {
    l    },
            decodeID: function(code) {
                code = Base64.decode(code);
                return parseInt(code);
            },
            // 获取随即字符串
            getRandomCode: function(length) {
                var str = '0123456789BCDEFGHIJKLMNOPQRSTUVWXYZ',
                    strLength = str.length,
                    strArr = str.split(''),
                    randomCode = '';
                length = length || 32;
                for (var i = 0; i < length; i++) {
                    randomCode += strArr[Math.floor(Math.random() * strLength)];
                }
                return randomCode;
            },
            getUserInfo: function() {
                var uInfoStr = sessionStorage.getItem('__UINFO__');
                if (!uInfoStr) {
                    return false;
                }
                return analyzeToken(uInfoStr);
            },
            getMenuAuth: function(menu){
                var infoObj = $$.getUserInfo();
                var auth = infoObj.Auth;
                if(auth.indexOf(menu+"/Add")!=-1){
                    return "1";
                }else{
                    return "0";
                }
            },
        // 解析Token
            analyzeToken(token) {
            var uInfo = Base64.decode(unescape(token)),
                uObj = JSON.parse(uInfo);
            return uObj;
            },
    //日期
       pattern:function(fmt) {
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
    }
}