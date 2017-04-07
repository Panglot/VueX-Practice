<template>
  <div>
    <label for="myInputField">Add items to the list: </label>
    <input id="myInputField" type="text"/>
    <button @click="addItem"> Add </button>
  </div>
</template>

<script>
  import {ADD_TO_LIST} from "./../store"

  export default{
    methods: {
      addItem(){
        let inputField = document.getElementById('myInputField');
        this.$store.commit(ADD_TO_LIST, inputField.value);
        inputField.value = "";
      }
    }
  }
</script>
