<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>Welcome to my test app with vue and vuex.</h2>
    <myinput></myinput>
    <displaylist id="listStyle"></displaylist>
    <reorderlist></reorderlist>
    <requestpractice></requestpractice>
  </div>
</template>

<script>
  import Myinput from './components/MyInput';
  import Displaylist from './components/DisplayList';
  import Reorderlist from './components/ReorderList';
  import Requestpractice from './components/RequestsPractice';

  export default {
    name: 'app',
    components: {
      Myinput,
      Displaylist,
      Reorderlist,
      Requestpractice
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  body {
    background-color: floralwhite;
  }
  #listStyle{
    display: inline-block;
  }
</style>
