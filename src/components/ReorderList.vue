<template>
  <div>
    <draggable :move="onReorder" @start="drag=true" @end="drag=false">
      <button v-for="element in this.$store.getters.getListOrder">( {{element}} )</button>
    </draggable>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';
  import {ORDER_LIST} from './../store';

  export default {
    data(){
      return {
      }
    },
    methods: {
      onReorder(){
        this.$store.commit(ORDER_LIST);
      }
    },
    components: {
      draggable
    }
  }
</script>
