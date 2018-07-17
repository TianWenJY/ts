import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../page/login.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Index from '../page/index/index.vue'
import home from '../page/home/home.vue'
import engine from '../page/engine/engine.vue'
import setting from '../page/setting/setting.vue'
import common from '../common/common.css'
Vue.use(ElementUI)
Vue.use(common)
Vue.use(Router)



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
        component: home,
        meta: [],
      },{
      path: '/engine',
      component: engine,
      meta: ['进出车记录', '进车记录'],
    },
        // {
    //   path: '/addGoods',
    //   component: addGoods,
    //   meta: ['添加数据', '添加商品'],
    // },{
    //   path: '/userList',
    //   component: userList,
    //   meta: ['数据管理', '用户列表'],
    // },{
    //   path: '/shopList',
    //   component: shopList,
    //   meta: ['数据管理', '商家列表'],
    // },{
    //   path: '/foodList',
    //   component: foodList,
    //   meta: ['数据管理', '食品列表'],
    // },{
    //   path: '/orderList',
    //   component: orderList,
    //   meta: ['数据管理', '订单列表'],
    // },{
    //   path: '/adminList',
    //   component: adminList,
    //   meta: ['数据管理', '管理员列表'],
    // },{
    //   path: '/visitor',
    //   component: visitor,
    //   meta: ['图表', '用户分布'],
    // },{
    //   path: '/newMember',
    //   component: newMember,
    //   meta: ['图表', '用户数据'],
    // },{
    //   path: '/uploadImg',
    //   component: uploadImg,
    //   meta: ['文本编辑', 'MarkDown'],
    // },{
    //   path: '/vueEdit',
    //   component: vueEdit,
    //   meta: ['编辑', '文本编辑'],
    // },{
    //   path: '/adminSet',
    //   component: adminSet,
    //   meta: ['设置', '管理员设置'],
    // },{
    //   path: '/sendMessage',
    //   component: sendMessage,
    //   meta: ['设置', '发送通知'],
    // },{
    //   path: '/explain',
    //   component: explain,
    //   meta: ['说明', '说明'],
    // }
    ]
    }
  ]
})
