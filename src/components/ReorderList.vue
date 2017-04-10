<template>
  <div>
    <draggable v-model="this.$store.getters.getListOrder" :move="onReorder" @start="drag=true" @end="drag=false">
      <button v-for="element in this.$store.getters.getListOrder">( {{element}} )</button>
    </draggable>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';
  import {ORDER_LIST} from './../store';

  export default {
    data(){
      return {}
    },
    methods: {
      onReorder(state){
        console.log(this.$store);
        console.log();
        console.log();
        console.log();
        console.log();
        console.log();
        console.log();
        this.$store.commit(ORDER_LIST);
      }
    },
    components: {
      draggable,
    }
  }
</script>
