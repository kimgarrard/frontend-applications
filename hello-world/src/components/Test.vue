<template>
  <div>
    <p class="test"></p>
    <h1>{{ title }}</h1>
    <ul>
      <!-- <survey-answer
        v-bind:results="results"
      /> -->
      <p v-bind: results="results" v-for="result in results" :key="result.title.value">{{ result.title.value }}</p>
    </ul>
  </div>
</template>

<script>


/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


import SurveyAnswer from './SurveyAnswer'

export default {
  components: {
    SurveyAnswer
  },
  props: {
    results: Array
  },
  data () {
    return {
      title: "Muziekinstrumenten",
      results: []
    }
  },

  mounted() {
    // const tekst = document.querySelector(".test");
    const url = "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-40/sparql"
    //Note that the query is wrapped in es6 template strings to allow for easy copy pasting
    const query = `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX dc: <http://purl.org/dc/elements/1.1/>
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX edm: <http://www.europeana.eu/schemas/edm/>
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>

    SELECT ?cho ?title ?cat ?type ?catName ?img WHERE {
      <https://hdl.handle.net/20.500.11840/termmaster2672> skos:narrower* ?cat . #Categorie specficeren
    #verander de url op regel 9 om een andere categorie op te halen

    #Variabelen definiëren
    ?cho dc:title ?title . #Title
    ?cho edm:isRelatedTo ?cat . #Categorie
    ?cat skos:prefLabel ?catName .
    ?cho dc:type ?type .
    ?cho edm:isShownBy ?img .

    FILTER langMatches(lang(?title), "ned") #Alleen Nederlandstalige cho's
    } limit 50
    `
    this.runQuery(url, query)
  },
  methods: {
    runQuery(url, query) {
      //Test if the endpoint is up and print result to page
      // (you can improve this script by making the next part of this function wait for a succesful result)
      fetch(url)
      // .then(res => tekst.innerText = "Status of API: " + res.status)
      // Call the url with the query attached, output data
      fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
      .then(res => res.json())
      .then(json => {
        this.results = json.results.bindings;
        console.log(json.results.bindings);
      })
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1 {
  background-color: lightyellow;
  color: grey;
}
</style>
