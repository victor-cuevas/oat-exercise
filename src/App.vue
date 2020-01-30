<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Víctor Cuevas OAT exercise"/>
    <UserList v-bind:data="restData"></UserList>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import UserList from './components/UserList';

export default {
  name: 'app',
  components: {
    HelloWorld,
    UserList
  },
  data: function() {
    return {
        restData: []
    }
  },
  methods: {
    getUsers: function() {
      const axios = require('axios');
      axios.get(`${this.endpoint}/users`).then(response => (this.restData = response.data));
    }
  },
  mounted: function () {
    this.getUsers();
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
</style>
