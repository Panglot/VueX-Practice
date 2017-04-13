import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

export const ADD_TO_LIST = "ADD_TO_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";
export const ORDER_LIST = "ORDER_LIST";
export const REFRESH_LIST_ORDER = "REFRESH_LIST_ORDER";
export const REFRESH_POSTS = "REFRESH_POSTS";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    listOrder: [0, 1, 2, 3, 4],
    outputList: [],
    root: 'https://jsonplaceholder.typicode.com',
    posts: {}
  },
  mutations: {
    [ADD_TO_LIST] (state, itemName){
      if (itemName) {
        state.list.push(itemName);
      }
    },
    [REMOVE_FROM_LIST](state, itemId){
      state.list.splice(itemId, 1);
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
      state.listOrder = [];
      state.listOrder = newListOrder
    },
    [REFRESH_POSTS](state, newPosts){
      state.posts = {};
      state.posts = newPosts
    }
  },
  actions: {
    postsRequester (context){
      return new Promise((resolve) => {
        axios.get(context.state.root + "/posts").then(responce => {
          context.commit('REFRESH_POSTS', responce.data);
          resolve(context.getters.getPosts);
        }).catch(error => {
          alert(error)
        })
      })
    }
  },
  getters: {
    getList: state => {
      return state.list;
    },
    getOrderedList: state => {
      return state.outputList;
    },
    getListOrder: state => {
      return state.listOrder;
    },
    getPosts: state => {
      return state.posts;
    }
  }

})
