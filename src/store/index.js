import Vue from "vue";
import Vuex from "vuex";
var dataUrl = 'https://spreadsheets.google.com/feeds/list/1t9DT6g23nMERZVJ-pV3UdLnrnS6vKJLG78wn3sSkYTw/1/public/values?alt=json';

Vue.use(Vuex);

export default new Vuex.Store({
  debug: true,
  state: {
    sections: []
  },
  mutations: {
    getSections (state) {
      var xhr = new XMLHttpRequest()
      xhr.open( 'GET', dataUrl );
      xhr.onload = function() {
        state.sections = JSON.parse(xhr.responseText)
        state.sections = state.sections.feed.entry
      }
      xhr.send()
    }
  },
  actions: {},
});
