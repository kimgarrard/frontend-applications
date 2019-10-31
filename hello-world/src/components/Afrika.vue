<template>
  <div class="div">
    <article v-for="result in results" v-bind:key="result.title.value">
      <a href="">
        <div>
          <h3>{{ result.title.value }}</h3>
          <p> {{ result.placeInAfrikaLabel.value }}</p> <br>
          <img class="images" v-bind:src="result.img.value" alt="">
        </div>
      </a>
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
      results: []
    }
  },

  mounted() {
    console.log("mounted")
    // Code van Laurens
    const url = "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-06/sparql"
    const query = `
    PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX dc: <http://purl.org/dc/elements/1.1/>
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX edm: <http://www.europeana.eu/schemas/edm/>
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>

    SELECT ?cho ?title ?typeLabel ?img ?year ?placeInAfrikaLabel
    WHERE {
      <https://hdl.handle.net/20.500.11840/termmaster1248> skos:narrower* ?type .
      <https://hdl.handle.net/20.500.11840/termmaster3> skos:narrower* ?placeInAfrika .

      ?type skos:prefLabel ?typeLabel .
      ?cho edm:object ?type .
      ?cho dc:title ?title .
      ?cho edm:isShownBy ?img .
      OPTIONAL {?cho dct:created ?year } .
      ?cho dct:spatial ?placeInAfrika .
      ?placeInAfrika skos:prefLabel ?placeInAfrikaLabel .

      FILTER langMatches(lang(?title), "ned")
      # FILTER(xsd:integer(?year) >= 0 && xsd:integer(?year) <= 2000)
    }
    `
    this.runQuery(url, query)
  },

  methods: {
    // Functie code van Laurens
    runQuery(url, query) {
      // code van Manouk
      const self = this;
      console.log("requesting")
      fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
      .then(res => res.json())
      .then(json => {
        this.results = json.results.bindings;
        // code van Manouk
        const results = self.results;
        console.log(results);

        // Stukje code van Wiebe
        results.forEach(function(i){
          i.img.value = i.img.value.replace("http", "https");
        })
      })
    },
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

@font-face {
    font-family: "ChaletComprime";
    src: url("../fonts/ChaletComprime.ttf") format("truetype");
}

section {
  display: flex;
  width: 100%;
  justify-content: center;
}

section button {
  background-color: #ea4e55;
  color: white;
  font-size: 1em;
  margin: 0 1% 1.5% 1%;
  border: none;
  border-radius: 0.5em;
  padding: 1em;
}

h3 {
  position: absolute;
  background-color: white;
  color: #ea4e55;
  padding: 0.2em 0.5em;
  margin: 0.5em;
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: bold;
}

p {
  position: absolute;
  color: white;
  background-color: #ea4e55;
  padding: 0.2em 0.5em;
  margin: 4% 0.7em;
}

.div {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  position: relative;
}

.images {
  max-height: 18em;
  object-fit: cover;
  background-color: grey;
  margin-top: -5%;
}

article {
  width: 30%;
  margin: 1em;
  box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.06);
}

article:hover {
  background-color: rgba(0,0,0,0.05);
}

</style>
