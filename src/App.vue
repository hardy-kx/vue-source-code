<template>
  <div id="app">
    <Communicate></Communicate>
  </div>
</template>

<script>
import Communicate from './components/communicate'

export default {
  name: 'App',
  components: {
    Communicate
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
