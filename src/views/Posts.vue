<template>
  <div class="main">
    <posts_style> </posts_style>
    <button class="reset" v-on:click="ResetLikes">  Reset Likes </button>
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

<style>
.reset {
  margin-top: 20px;
  height: 40px;
  width: 100px;
}
</style>