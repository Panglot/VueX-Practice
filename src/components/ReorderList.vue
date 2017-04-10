<template>
  <div>
    <draggable v-model="listOrder" :move="onReorder" @start="drag=true" @end="drag=false">
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
    computed: {
    	listOrder(){
        this.$store.commit(ORDER_LIST);
    		return this.$store.getters.getListOrder;
      }
    },
    components: {
      draggable
    }
  }
</script>
