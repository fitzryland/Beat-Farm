import Vue from 'vue'
import router from './router'
import store from "./store"
import App from './App.vue'
import VueMarkdown from 'vue-markdown'
Vue.config.productionTip = false

const app = new Vue({
  store,
  router,
  data: {
    sections: null
  },
  components: {
    VueMarkdown
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




