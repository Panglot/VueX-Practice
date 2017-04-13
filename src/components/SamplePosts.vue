<template>
  <div>
    <button @click="gibberishPostsRequester">Request gibberish posts</button>
    <br>
    <div class="post-box" v-for="item in gibberishPosts">
      <h2 class="title">{{item.title}}</h2>
      <p>{{item.body}}</p>
      <p class="footerInfo">User {{item.userId}}, Post {{item.id}}</p>
      <div>
        <button>Comments</button>
        <div>
          <h3>User</h3>
          <p>Comment body</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {postsRequester} from './../store';

  export default {
    data(){
      return {
        gibberishPosts: {}
      }
    },
    methods: {
      gibberishPostsRequester(){
        this.$store.dispatch('postsRequester').then((posts) => {
          this.gibberishPosts = posts
        })
      }
    }
  }
</script>
<style>
  .post-box {
    border: 2px solid black;
    border-radius: 15px;
    margin: 2px;
    width: 900px;
    display: inline-block;
    background-color: rgba(65, 184, 131, 0.6);
  }

  .title {
    font-family: "Times New Roman";
    font-size: 26pt;
    text-decoration: underline;
  }

  .footerInfo {
    font-size: 11pt;
    font-style: italic;
    text-decoration: underline;
  }
</style>
