<template>
  <div id="app">
    <Header />
    <!-- <router-view /> -->
    <button v-on:click="getAfrikaResults">Afrika!</button>
    <button v-on:click="getAfrikaResults">Twee</button>
    <button>Drie</button>
    <button>Vier</button>

    <Instrumenten
      v-if="results.length > 0"
      v-bind:instrumenten="results"
    />
  </div>
</template>

<script>

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

import Header from "@/components/Header.vue"
import Instrumenten from "@/components/Instrumenten.vue"
import queries from './queries.js'

export default {
  name: 'app',
  components: {
    Header,
    Instrumenten
  },
  data () {
    return {
      results: [],
      url: 'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-06/sparql'
    }
  },
  mounted() {
    // Code van Laurens
    // this.runQuery(this.url, queries.afrikaQuery)
    queries
  },

  methods: {
    // Functie code van Laurens
    runQuery(url, query) {
      // code van Manouk
      const self = this;
      this.query = query;
      console.log("requesting")
      fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
      .then(res => res.json())
      .then(json => {
        self.results = json.results.bindings;
        // code van Manouk
        const results = self.results;
        // console.log(results);

        // Stukje code van Wiebe
        results.forEach(function(i){
          i.img.value = i.img.value.replace("http", "https");
        })
      })
    },
    getAfrikaResults() {
      this.runQuery(this.url, queries.afrikaQuery);
    },
    getAsiaResults() {
      this.runQuery(this.url, queries.asiaQuery);
    }
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
