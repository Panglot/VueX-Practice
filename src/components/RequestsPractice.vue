<template>
  <div>
    <button @click="gibberishPostsRequester">Request gibberish posts</button><br>
    <div class="post-box" v-for="item in this.gibberishPosts">
      <h2 class="title">{{item.title}}</h2>
      <p>{{item.body}}</p>
      <p class="footerInfo">User {{item.userId}}, Post {{item.id}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        root: 'https://jsonplaceholder.typicode.com',
        gibberishPosts: {}
      }
    },
    methods: {
      gibberishPostsRequester(){
        this.$http.get(this.root + "/posts").then(responce => {
          this.gibberishPosts = responce.data;
        })
      }
    }
  }

</script>
<style>
  .post-box{
    border: 2px solid black;
    border-radius: 15px;
    margin: 2px;
    width: 900px;
    display: inline-block;
    background-color: rgba(65, 184, 131, 0.6);
  }
  .title{
    font-family: "Times New Roman";
    font-size: 26pt;
    text-decoration: underline;
  }
  .footerInfo{
    font-size: 11pt;
    font-style: italic;
    text-decoration: underline;
  }
</style>
