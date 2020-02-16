import Vue from 'vue'
// import router from './router'
import store from "./store"

Vue.config.productionTip = false

var dataUrl = 'https://spreadsheets.google.com/feeds/list/1t9DT6g23nMERZVJ-pV3UdLnrnS6vKJLG78wn3sSkYTw/1/public/values?alt=json';

new Vue({
  // store,
  // router
  // template: '<App />'
  // data: {
  //   sections: null
  // },
  // watch: {
  //   currentPage: 'fetchData'
  // },
  // created: function() {
  //   this.fetchData()
  // },
  // methods: {
  //   fetchData: function() {
  //     this.$store.commit("getSections")
  //   }
  // }
}).$mount('#app')
