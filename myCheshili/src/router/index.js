import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import setMenu from '@/components/setMenu'
import Login from '../page/login.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Index from '../page/index/index.vue'
import home from '../page/home/home.vue'
import role from '../page/role/role.vue'
import engine from '../page/engine/engine.vue'
import addEngine from '../page/addEngine.vue'
import setting from '../page/setting/setting.vue'
import firstInfo from '../page/firstInfo.vue'
import common from '../common/common.css'
import commonJs from '../common/common.js'
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(Router);
Vue.use(common);
Vue.use(commonJs);


export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: '',
      component: Index,
      children: [{
        path: '',
        component: home,
        meta: [],
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
        path: '/role',
        component: role,
        meta: ['菜单设置'],
      },{
        path: '/firstInfo',
        component: firstInfo,
        meta: ['团队管理','一级代理商']
      }
    ]
    }
  ]
})


