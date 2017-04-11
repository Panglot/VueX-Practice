import Vue from 'vue';
import Vuex from 'vuex';

export const ADD_TO_LIST = "ADD_TO_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";
export const ORDER_LIST = "ORDER_LIST";
export const REFRESH_LIST_ORDER = "REFRESH_LIST_ORDER";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    listOrder: [2, 0, 1, 4, 3],
    outputList: []
  },
  mutations: {
    [ADD_TO_LIST] (state, itemName){
      if (itemName) {
        state.list.push(itemName);
      }
    },
    [REMOVE_FROM_LIST](state, itemId){
      state.list.splice(itemId,1);
    },
    [ORDER_LIST] (state){
      state.outputList = [];
      for (let i = 0; i < state.listOrder.length || i < state.list.length; i++) {
        let index = state.listOrder[i];
        if (state.list[index]) {
          state.outputList.push(state.list[index]);
        }
      }
    },
    [REFRESH_LIST_ORDER] (state, newListOrder){
      state.listOrder = newListOrder;
    }
  },
  getters: {
    getList: state=>{
      return state.list;
    },
    getOrderedList: state => {
      return state.outputList;
    },
    getListOrder: state => {
      return state.listOrder;
    }
  }

})
