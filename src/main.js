import Vue from 'vue'
import router from './router'
import store from "./store"
import App from './App.vue'
Vue.config.productionTip = false

const app = new Vue({
  store,
  router,
  data: {
    sections: null
  },
  watch: {
    currentPage: 'fetchData'
  },
  created: function() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      this.$store.commit("getSections")
    }
  },
  render: h => h(App),
}).$mount('#app')




