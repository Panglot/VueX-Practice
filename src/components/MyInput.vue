<template>
  <div>
    <label for="myInputField">Add items to the list: </label>
    <input @keyup.enter="addItem" id="myInputField" type="text"/>
    <button @click="addItem"> Add </button>
  </div>
</template>

<script>
  import {ADD_TO_LIST} from "./../store";
  import {ORDER_LIST} from './../store';

  export default{
    methods: {
      addItem(){
        let inputField = document.getElementById('myInputField');
        this.$store.commit(ADD_TO_LIST, inputField.value);
        this.$store.commit(ORDER_LIST, this.$store.listOrder);
        inputField.value = "";
      }
    }
  }
</script>
