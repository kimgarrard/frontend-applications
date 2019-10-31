<template>
  <div class="div">
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/COLLECTIE_TROPENMUSEUM_Een_Samo_muzikant_bespeelt_de_muziekboog_TMnr_20010316.jpg" alt="">
    <section class="buttons">
      <button v-on:click="getAfrikaResults">Afrika</button>
      <button v-on:click="getAzieResults">Azië</button>
      <button v-on:click="getOceanieResults">Oceanië</button>
      <button v-on:click="getAmerikaResults">Amerika</button>
      <!-- <button v-on:click="filterFunction">FILTER</button> -->
    </section>
    <Instrumenten
      v-bind:instrumenten="results"
    />
  </div>
</template>

<script>

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

import Instrumenten from "./Instrumenten"
import queries from '../queries.js'

export default {
  name: 'app',
  components: {
    Instrumenten
  },
  data() {
    return {
      results: [],
      // filterData: [],
      url: 'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-06/sparql'
    }
  },
  created() {
    this.runQuery(this.url, queries.afrikaQuery);
  },

  mounted() {
    // Code van Laurens
    // this.runQuery(this.url, queries.afrikaQuery)
    queries
  },
  //alle functies
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
        //self.results.push(json.results.bindings);
        // code van Manouk
        const results = self.results;
        console.log(results);

        // Stukje code van Wiebe
        results.forEach(function(i){
          i.img.value = i.img.value.replace("http", "https");
        })
      })
    },

    getAfrikaResults() {
      this.runQuery(this.url, queries.afrikaQuery);
    },
    getAzieResults() {
      this.runQuery(this.url, queries.azieQuery);
    },
    getOceanieResults() {
      this.runQuery(this.url, queries.oceanieQuery);
    },
    getAmerikaResults() {
      this.runQuery(this.url, queries.amerikaQuery);
    },

    // filterFunction() {
    //   let filterData = this.filterData;
    //   this.results.forEach(function(result) {
    //     if(result.title.value === "Muziekinstrument") {
    //       filterData.push(result)
    //     }
    //   })
    //   console.log(filterData)
    // }

  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.div {
  width: 100vw;
}

section {
  display: flex;
  width: 100%;
  justify-content: center;
}

section > button {
  background-color: #ea4e55;
  color: white;
  font-size: 1em;
  margin: 0 1% 1.5% 1%;
  border: none;
  padding: 1em 2em;
  font-weight: bold;
  border-radius: 0.4em;
}

section > button:hover {
  background-color: #ed7a82;
}

.div > img {
  padding: 1.2em;
  max-height: 60vh;
  object-fit: cover;
  object-position: 0 38%;
  width: calc(100% - 2.4em);
}

h2 {
  background-color: white;
  color: #ea4e55;
  padding: 0.2em 0.5em;
  margin: 0.5em;
  font-size: 2em;
  font-weight: bold;
  margin: 25% 0%;
  right: 0;
  position: absolute;
}

</style>
