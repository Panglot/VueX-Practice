import Vue from 'vue';
import Vuex from 'vuex';

export const ADD_TO_LIST = "ADD_TO_LIST";
export const ORDER_LIST = "ORDER_LIST";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    listOrder: [1, 2, 0],
    outputList: []
  },
  mutations: {
    [ADD_TO_LIST] (state, itemName){
      if (itemName) {
        state.list.push(itemName);
      }
    },
    [ORDER_LIST] (state){
      state.outputList = [];
      for (let i = 0; i < state.listOrder.length && i < state.list.length; i++) {
        let index = state.listOrder[i];
        state.outputList.push(state.list[index]);
      }
    }
  },
  getters: {
    getOrderedList: state => {
      return state.outputList;
    },
    getListOrder: state => {
      return state.listOrder;
    }
  },
  computed: {
    accessListOrder: {
      get(){
        return this.$store.getters.getListOrder;
      },
      set(value){
        this.state.listOrder = value;
      }
    }
  }
})
