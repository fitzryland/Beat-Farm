import Vue from "vue"
import Vuex from "vuex"
import yaml from "js-yaml"
import sectionsData from '../../_content/home.json'

Vue.use(Vuex);

export default new Vuex.Store({
  debug: true,
  state: {
    sections: []
  },
  mutations: {
    getSections (state) {
      // console.log('sectionsData');
      // console.log(sectionsData);
      // var xhr = new XMLHttpRequest()
      // xhr.open( 'GET', dataUrl );
      // xhr.onload = function() {
      //   state.sections = JSON.parse(xhr.responseText)
      //   state.sections = state.sections.feed.entry
      //   let sectionsLength = state.sections.length;
      //   for ( let i = 0; i < sectionsLength; i++ ) {
      //     console.log(state.sections[i].gsx$doc.$t)
      //     if ( state.sections[i].gsx$doc.$t ) {
      //       axios.get(state.sections[i].gsx$doc.$t)
      //         .then((response) => {
      //           if(response.status === 200) {
      //             let html = response.data;
      //             let $ = cheerio.load(html);
      //             let $contents = $('body');
      //             let $links = $contents.find('a');
      //             let linksLength = $links.length;
      //             // convert google links to normal links
      //             for ( let ii = 0; ii < linksLength; ii++ ) {
      //               let url = $links[ii].attribs.href;
      //               let start = url.indexOf('?');
      //               let params = new URLSearchParams(url.substring(start));
      //               $links[ii].attribs.href = params.get('q')
      //             }
      //             state.sections[i].gsx$content.$t = $contents.html();
      //           }
      //         },
      //         (error) => console.log(error));
      //     }
      //   }
      // }
      // xhr.send()
    }
  },
  actions: {},
});
