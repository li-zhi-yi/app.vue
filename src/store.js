import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      search:''
  },
  mutations: {
    updateSearch(state,value){
      console.log(state,value)
        state.search=value;
    }
  },
  actions: {

  }
})
