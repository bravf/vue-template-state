import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import TestRequest from './components/TestRequest'
import TestSwitches from './components/TestSwitches'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/test-request', component: TestRequest },
    { path: '/test-switches', component: TestSwitches },
  ]
})



new Vue({
  router,
}).$mount('#app')
