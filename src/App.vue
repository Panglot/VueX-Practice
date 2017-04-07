<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <myinput></myinput>
    <displaylist></displaylist>
  </div>
</template>

<script>
  import Hello from './components/Hello';
  import Myinput from './components/MyInput';
  import Displaylist from './components/DisplayList';

  export default {
    name: 'app',
    components: {
      Hello,
      Myinput,
      Displaylist
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
</style>
