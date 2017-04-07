<template>
  <div>
    <h2 @click="wtf">List of items</h2>
    <ul>
      <li v-for="item in items">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        items: this.$store.getters.getList
      }
    },
    methods: {
      wtf (){
        console.log(this);
        console.log(this.$store);
        console.log(this.$store.getters.getList);
      }
    }
  }
</script>
