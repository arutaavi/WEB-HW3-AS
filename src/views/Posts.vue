<template>
  <div class="main">
    <h2>POSTS</h2>
    <posts_style> </posts_style>
    <button v-on:click="ResetLikes ">  Reset Likes </button>
  </div>
</template>
<script>
import posts_style from '@/components/posts_style.vue';
export default {
  name: "Posts",
  components: { posts_style },
  methods: {
    ResetLikes() {
      this.$store.commit("ResetLikes")
    }},
  data(){
    return{}}}
</script>

