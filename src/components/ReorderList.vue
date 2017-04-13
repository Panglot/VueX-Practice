<template>
  <div>
    <draggable :list="draggableList" :move="onReorder" @start="drag=true" @end="drag=false">
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
      	draggableList: [0,1,2,3,4]
      }
    },
    methods: {
      onReorder(evt){
      	this.$store.commit(REFRESH_LIST_ORDER, this.draggableList)
        this.$store.commit(ORDER_LIST);
      	console.log(evt.target.innerText);
      }
    },
    components: {
      draggable
    }
  }
</script>
