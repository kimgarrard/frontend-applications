<template>
  <div class="div">
    <img v-bind:src="results[16].img.value" alt="">
    <article v-for="result in results" v-bind:key="result.title.value">
      <div><h3>{{ result.title.value }}</h3>
      <img class="images" v-bind:src="result.img.value" alt="">
    </div>
    </article>
  </div>
</template>

<script>

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

export default {
  data () {
    return {
      title: "Muziekinstrumenten",
      results: []
    }
  },

  mounted() {
    const url = "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-06/sparql"
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
  } limit 20
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
        var results = this.results;
        console.log(json.results.bindings);

        results.forEach(function(i){
        i.img.value = i.img.value.replace("http", "https");
        console.log(json.results.bindings[16].title.value);

        })

      })
    },
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.div {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  position: relative;
}

.div > img {
  margin: 2em;
}

.images {
  max-height: 20em;
  object-fit: cover;
}

article {
  width: 20%;
  margin: 1em;
  padding: 1em;
  box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.06);
}

article:hover {
  background-color: rgba(0,0,0,0.05);
}

</style>
