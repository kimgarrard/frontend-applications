<template>
  <div class="div">
    <section>
      <!-- stukje code van Coen -->
      <router-link to="/instrumenten" class="button">Instrumenten</router-link>
      <Instrumenten />
    </section>
  </div>
</template>

<script>

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

import Instrumenten from "./Instrumenten"

export default {
  components: {
    Instrumenten
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.button {
    background-color: #ea4e55;
    color: white;
    font-size: 1em;
    margin: 0 1% 1.5% 1%;
    border: none;
    border-radius: 0.5em;
    padding: 1em;
    text-decoration: none;
}

</style>
