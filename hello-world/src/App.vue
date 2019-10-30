<template>
  <div id="app">
    <Header />
    <router-view/>
    <!-- <Instrumenten /> -->
  </div>
</template>

<script>

import Header from "@/components/Header.vue"
// import Continenten from "@/components/Continenten.vue"
// import Instrumenten from "@/components/Instrumenten.vue"

export default {
  name: 'app',
  components: {
    Header
    // Continenten,
    // Instrumenten
  }
}



</script>

<style>
body {
  box-sizing: border-box;
  margin: 0;
  top: 0;
  padding: 0;
  width: 100vw;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  width: 100vw;
}

h3 {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
}

img {
  width: 100%;
}
</style>
