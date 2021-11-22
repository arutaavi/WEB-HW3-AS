<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'posts' }"> Posts</router-link>  |
      <router-link :to="{ name: 'login' }"> LogIn</router-link> |
      <router-link :to="{ name: 'contact' }">Contacts</router-link>
    </div>
    <router-view />
    <div id="footer">
      <router-link :to="{ name: 'contact' }">Contacts</router-link>
    </div>

  </div>

</template>

<style lang="scss">
#app {
  background-color: rgb(211, 237, 255);
  font-family: Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #092f77;

    &.router-link-exact-active {
      color: #032e53;
    }
  }
  a:hover {
    color: rgb(255,255,255);
  }
}
#footer {
  padding:40px;
  margin-top: 25px;
  background-color: rgb(191, 217, 255);

  a {
    font-weight: bold;
    color: #092f77;
  }
  a:hover {
    color: rgb(255,255,255);
  }
}
</style>