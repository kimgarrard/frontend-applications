<template>
  <div class="div">
    <img src="https://www.tropenmuseum.nl/sites/default/files/styles/hero/public/Rhythm%20%26%20Roots%20-%20Zangeres%20Giovanca%20te%20zien%20samen%20met%20blues%20legende%20B.B.%20King..jpg?h=ca57595e&itok=mviZ9D2R" alt="">
    <section>
      <div>
    <!-- stukje code van Coen -->
      <router-link to="/instrumenten" class="h3">MUZIEKINSTRUMENTEN DOOR DE JAREN HEEN</router-link>
    </div>
    </section>
  </div>
</template>

<script>

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

section {
  display: flex;
  justify-content: center;
  padding-top: 10vh;
}

/* section > div {
  background-color: rgba(255,255,255,0.8);
  height: 100%;
  width: 70%;
  margin-top: 10%;
  padding: 1em;
} */

.div > img {
  padding: 2em;
  max-height: 92vh;
  object-fit: cover;
  object-position: 0 75%;
  width: 100vw;
  position: absolute;
  z-index: -5;
  max-height: 60vh;
}

.h3 {
  background-color: white;
  color: #ea4e55;
  padding: 0.2em 0.5em;
  margin: 0.5em;
  margin-top: 40%;
  font-size: 1.5em;
  font-weight: bold;
  width: 27%;
  text-decoration: none;
}

</style>
