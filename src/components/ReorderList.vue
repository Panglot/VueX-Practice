<template>
  <div>
    <draggable v-model="draggableList" :move="onReorder" @start="drag=true" @end="drag=false">
      <button v-for="element in draggableList">( {{element}} )</button>
    </draggable>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';
  import {ORDER_LIST} from './../store';
  import {REFRESH_LIST_ORDER} from './../store';

  export default {
    data(){
      return {
      	draggableList: this.$store.getters.getListOrder
      }
    },
    methods: {
      onReorder(){
      	this.$store.commit(REFRESH_LIST_ORDER, this.draggableList)
        this.$store.commit(ORDER_LIST);
      }
    },
    components: {
      draggable
    }
  }
</script>
