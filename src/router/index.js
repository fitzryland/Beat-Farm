import Vue from 'vue'
import VueRouter from 'vue-router'
// import Admin from '../Admin.vue'
import App from '../App.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: App
    },
    // {
    //   path: '/admin',
    //   name: 'Admin',
    //   component: Admin
    // }
  ]
});