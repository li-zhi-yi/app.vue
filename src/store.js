import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      num:0,
      actPrice:'',
      img:''
  },
  mutations: {
      add(state,value){
          // console.log(111);
          this.state.num+=value
      },
      cutDown(state,value){
          // console.log(111);
          if(state.num>0)
          this.state.num+=value
      },
      updatePrice(state,e){
          this.state.actPrice=e.actPrice;
          this.state.img=e.img;
          console.log(state.actPrice);
      }
  },
  actions: {

  }
})
