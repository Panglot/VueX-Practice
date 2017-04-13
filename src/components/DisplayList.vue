<template>
  <div>
    <h2 @click="requestTest">Original item list</h2>
    <ol class="lists" start="0">
      <li v-for="item in getList"><p>{{item}}</p></li>
    </ol>
    <h2>Reordered item list</h2>
    <ol start="0" class="lists">
      <li v-bind:id="index" v-for="(item, index) in getOrderedList">
        <p>{{item}}
          <button @click="removeElement" class="removeButtons">x</button>
        </p>
      </li>
    </ol>
  </div>
</template>

<script>
  import {REMOVE_FROM_LIST} from './../store';
  import {ORDER_LIST} from './../store';
  import {mapGetters} from 'vuex';

  export default{
    data(){
      return {}
    },
    methods: {
      removeElement(ev){
        let index = ev.target.parentNode.id;
        this.$store.commit(REMOVE_FROM_LIST, index);
        this.$store.commit(ORDER_LIST, this.$store.listOrder);
      },
      requestTest(){
          this.$http.get('https://jsonplaceholder.typicode.com/albums').then(responce =>{
              console.log(responce.data);
          })
      }
    },
    computed: {
      ...mapGetters({
        getList: 'getList',
        getOrderedList: 'getOrderedList'
      })
    }
  }
</script>

<style>
  .lists {
    padding-left: 5px;
    text-align: left;
    font-weight: bold;
  }

  .lists > li > p {
    font-weight: normal;
    margin: 0;
    margin-bottom: 7px;
  }

  .removeButtons {
    color: red;
    margin-left: auto;
    vertical-align: middle;
    float: right;
    font-weight: bold;
    font-size: 13px;
  }
</style>
