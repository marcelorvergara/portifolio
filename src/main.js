import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import i18n from '@/plugins/i18n'
import VueRouter from 'vue-router'
import { routes } from './router'
import FlagIcon from 'vue-flag-icon'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(FlagIcon)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode:'history',
  base: process.env.BASE_URL
})

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
