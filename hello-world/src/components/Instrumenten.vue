<template>
  <div class="div">
    <article v-for="result in instrumenten" v-bind:key="result.title.value">
      <a href="">
        <div>
          <h3 v-if="result.title">{{ result.title.value }}</h3>
          <p v-if="result.placeName"> {{ result.placeName.value }}</p> <br>
          <p v-if="result.year"> {{ result.year.value }}</p>
          <img v-if="result.img" class="images" v-bind:src="result.img.value" alt="">
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
  name: "instrumenten",
  props: {
    instrumenten: null
  },
  created() {
    const instrumenten = this.instrumenten;
    console.log(instrumenten);
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

h3 {
  position: absolute;
  background-color: white;
  color: #ea4e55;
  padding: 0.2em 0.5em;
  margin: 0.5em;
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: bold;
  max-width: 27%;
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
  width: 100%;
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
