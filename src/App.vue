<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'contact' }"> Contacts</router-link><a>  |  </a>   
      <router-link :to="{ name: 'posts' }"> Posts</router-link><a>  |  </a>    
      <router-link :to="{ name: 'login' }"> LogIn</router-link>
    </div>
    <router-view />
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
}
</style>
