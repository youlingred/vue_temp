import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/test/Hello.vue'
import Login from '@/components/LoginForm/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
{ path: '/', component: Login, name: 'Login' },
//{
//    path: '/',
//    name: 'Hello',
//    component: Hello
//  }
  ]
})
