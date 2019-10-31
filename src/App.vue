<template>
  <div id="app">
    <Header />
    <router-view />
    <!-- <button v-on:click="getAfrikaResults">Afrika</button>
    <button v-on:click="getAzieResults">Azië</button>
    <button v-on:click="getOceanieResults">Oceanië</button>
    <button v-on:click="getAmerikaResults">Amerika</button>

    <button v-on:click="filterFunction">FILTER</button>

    <Instrumenten
      v-bind:instrumenten="results"
    /> -->
  </div>
</template>

<script>

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

import Header from "@/components/Header.vue"
// import Home from "@/components/Home.vue"
// import Instrumenten from "@/components/Instrumenten.vue"
// import queries from './queries.js'

export default {
  name: 'app',
  components: {
    Header,
    // Instrumenten
  },
  // data () {
  //   return {
  //     results: [],
  //     filterData: [],
  //     url: 'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-06/sparql'
  //   }
  // },
  // mounted() {
  //   // Code van Laurens
  //   // this.runQuery(this.url, queries.afrikaQuery)
  //   queries
  // },
  // //alle functies
  // methods: {
  //   // Functie code van Laurens
  //   runQuery(url, query) {
  //     // code van Manouk
  //     const self = this;
  //     this.query = query;
  //     console.log("requesting")
  //     fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
  //     .then(res => res.json())
  //     .then(json => {
  //       self.results = json.results.bindings;
  //       // code van Manouk
  //       const results = self.results;
  //       // console.log(results);
  //
  //       // Stukje code van Wiebe
  //       results.forEach(function(i){
  //         i.img.value = i.img.value.replace("http", "https");
  //       })
  //     })
  //   },
  //   getAfrikaResults() {
  //     this.runQuery(this.url, queries.afrikaQuery);
  //   },
  //   getAzieResults() {
  //     this.runQuery(this.url, queries.azieQuery);
  //   },
  //   getOceanieResults() {
  //     this.runQuery(this.url, queries.oceanieQuery);
  //   },
  //   getAmerikaResults() {
  //     this.runQuery(this.url, queries.amerikaQuery);
  //   },
  //
  //   // filterFunction() {
  //   //   let filterData = this.filterData;
  //   //   this.results.forEach(function(result) {
  //   //     if(result.title.value === "Muziekinstrument") {
  //   //       filterData.push(result)
  //   //     }
  //   //   })
  //   //   console.log(filterData)
  //   // }
  //
  // }
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

</style>
