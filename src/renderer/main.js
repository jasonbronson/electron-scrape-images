import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faHome, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faHome, faCogs)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'), BootstrapVue)
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  store,
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
