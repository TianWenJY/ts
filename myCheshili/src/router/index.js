import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import setMenu from '@/components/setMenu'
import Login from '@/page/login.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Index from '@/page/index/index.vue'
import Home from '@/page/home/home.vue'
import engine from '@/page/engine/engine.vue'
import addEngine from '@/page/addEngine.vue'
import setting from '../page/setting/setting.vue'
import firstInfo from '@/page/firstInfo.vue'
import common from '@/common/common.css'
import commonJs from '@/common/common.js'
import AreaCode from '@/page/areacodeList.vue'
import TlUser from '@/page/TLUser.vue'
import textFather from '@/page/textFather.vue'
import certification from '@/page/certification.vue'
import Role from '@/page/role.vue'
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(Router);
Vue.use(common);
Vue.use(commonJs);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: '',
      component: Index,
      children: [{
        path: '',
        component: Home,
        meta: ['进出车记录', '进车记录'],
      },{
      path: '/engine',
      component: engine,
      meta: ['进出车记录', '进车记录'],
    },{
        path: '/addEngine',
        component: addEngine,
        meta: ['添加设备'],
      },{
        path: '/setMenu',
        component: setMenu,
        meta: ['菜单设置'],
      },{
        path: '/firstInfo',
        component: firstInfo,
        meta: ['团队管理','一级代理商']
      },{
        path: '/areacode',
        component: AreaCode,
        meta: ['通联支付','通联地区码列表']
      },{
        path: '/tluser',
        component: TlUser,
        meta: ['通联支付','商户列表']
      },{
        path: '/textFather',
        component: textFather,
        meta: ['通联支付','商户列表']
      }
      ,{
        path: '/certification',
        component: certification,
        meta: ['实名管理','实名认证']
      },
      {
        path: '/role',
        component: Role,
        meta: ['角色设置','管理员管理']
      }
    ]
    },
    {
      path: '*',
      redirect:'/'
    }
  ]
})


