<template>
  <div>
    <h2>Original item list</h2>
    <ol class="lists" start="0">
      <li v-for="item in this.$store.getters.getList"><p>{{item}}</p></li>
    </ol>
    <h2>List of items</h2>
    <ol start="0" class="lists">
      <li v-bind:id="index" v-for="(item, index) in this.$store.getters.getOrderedList"><p>{{item}}
        <button @click="removeElement" class="removeButtons">x</button></p>
      </li>
    </ol>
  </div>
</template>

<script>
  import {REMOVE_FROM_LIST} from './../store';
  import {ORDER_LIST} from './../store';

  export default{
    data(){
      return {}
    },
    methods: {
      removeElement(ev){
        let index = ev.target.parentNode.id;
        this.$store.commit(REMOVE_FROM_LIST, index);
        this.$store.commit(ORDER_LIST, this.$store.listOrder);
      }
    }
  }
</script>

<style>
  .lists {
    padding-left: 5px;
    text-align: left;
    font-weight: bold;
  }
  .lists>li>p{
    font-weight: normal;
    margin: 0;
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
