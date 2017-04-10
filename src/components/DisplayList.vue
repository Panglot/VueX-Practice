<template>
  <div>
    <h2>List of items</h2>
    <ul>
      <li v-for="item in this.$store.getters.getOrderedList">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return {
      }
    }
  }
</script>
