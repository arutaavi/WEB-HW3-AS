<template>
  <div class = "post">
    <div class= "post" v-for = "post in posting" :key="post.date">
      <img :src="post.profilePicture" alt="Account" class="post-heading" width="50">
      <p class = "post-heading">{{post.date}}</p>
      <img class="post-content" v-bind:src="post.postPicture" width="500">
      <p class = "post-content">{{post.text}}</p>
      <img @click="helper(post.button)" class="like-button" src="@/assets/Like.png" alt="Like">
      <span class="likes">Likes: {{post.likes}} </span>

    </div>
  </div>
</template>

<script>
export default {
  name: "posts_style",
//props: ["postList"],
  data: function() {
    return {
    }},
  computed: {
    posting(){ return this.$store.getters.posting },
  },
  methods: {
    helper(button) {
      this[button]();
    },
    button1: function() {this.$store.commit("button1")},
    button2: function() {this.$store.commit("button2")},
    button3: function() {this.$store.commit("button3")},
    button4: function() {this.$store.commit("button4")},
    button5: function() {this.$store.commit("button5")},
    button6: function() {this.$store.commit("button6")},
    button7: function() {this.$store.commit("button7")},
    button8: function() {this.$store.commit("button8")},
    button9: function() {this.$store.commit("button9")},
    button10: function() {this.$store.commit("button10")},
  },
}
</script>

<style scoped>

nav {
  display: flex;
  background-color: #ffffff;
  align-items: center;
}

nav div {
  height: 30px;
  flex-grow: 4;
  padding: 10px;
}

nav div img {
  height: 100%;
}

nav div.search-container>input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

nav div.search-container>button {
  color: #e0e0e0;
  box-sizing: border-box;
  height: 30px;
  width: 15%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  background-color: rgb(55, 89, 192);
  border-radius: 5px;
}

nav div.account {
  text-align: right;
  cursor: pointer;
}

.dropbtn {
  height: 30px;
}

.dropdown-content {
  display: none;
  background-color: white;
  position: absolute;
  width: min-content;
  height: min-content;
  right: 0;
  overflow: auto;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.4);
}

.dropdown-content p {
  display: block;
  padding: 5px;
  text-decoration: none;
}

.show {
  display: block;
}

.main {
  margin: auto;
  background-color: white;
  height: 100%;
  width: 50%;
  flex-grow: 4;
  padding: 10px;
}

.post {
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  flex-grow: 4;
  padding: 10px;
  margin-top: 25px;
  margin-bottom: auto;
  margin-left: 8%;
  margin-right: 8%;
  box-shadow: 0 0 5px #4b4b4b;
}

.post-heading {
  height: 50px;
  flex-grow: 4;
  padding: 10px;
}

.post-heading img {
  height: 100%;
}

.post-heading p {
  font-size: 14px;
  font-weight: normal;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: rgb(107, 107, 107);
  float: right;
  margin: 0;
}

.post-content {
  font-size: 15px;
  font-weight: bold;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: rgb(77, 77, 77);
}

.post-content img {
  width: 100%;
  display: block;
}

.post-content span {
  color: red;
}

.post-content img~p {
  font-weight: bold;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 20px;
  color: rgb(77, 77, 77);
}

.like-button {
  height: 26px;
  flex-grow: 4;
  padding: 10px;
  margin: 0;
}

.like-button:hover {
  cursor: pointer;
}

.like-button input {
  height: 100%;
  margin: 0;
}

.likes {
  position: relative;
  bottom: 15px;
}

footer {
  display: flex;
  background-color: #eff0ff;
  text-align: center;
  padding-left: 20px;
  color: royalblue;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 20px;
}

footer sup {
  font-weight: bold;
}
</style>
