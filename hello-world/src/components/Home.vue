<template>
  <div class="div">
    <img src="https://www.tropenmuseum.nl/sites/default/files/styles/hero/public/Rhythm%20%26%20Roots%20-%20Zangeres%20Giovanca%20te%20zien%20samen%20met%20blues%20legende%20B.B.%20King..jpg?h=ca57595e&itok=mviZ9D2R" alt="">
    <section class="title">
      <h2>MUZIEKINSTRUMENTEN DOOR DE JAREN HEEN</h2>
      <!-- stukje code van Coen -->
      <router-link to="/instrumenten"><p>Bekijk collectie</p></router-link>
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

.div {
  width: 100%;
}

.div > img {
  padding: 1.2em;
  max-height: 92vh;
  object-fit: cover;
  object-position: 0 75%;
  width: calc(100% - 2.4em);
  position: absolute;
  z-index: -5;
  max-height: 60vh;
}

.title a {
  text-decoration: none;
  color: #ea4e55;
}

.title h2 {
  background-color: white;
  color: #ea4e55;
  padding: 0.2em 0.5em;
  margin: 0.5em;
  font-size: 2em;
  font-weight: bold;
  margin: 20% 5%;
  position: absolute;
}

.title p {
  background-color: #ea4e55;
  color: white;
  padding: 0.2em 0.5em;
  margin: 0.5em;
  font-size: 1.4em;
  font-weight: bold;
  margin: 25% 5%;
  position: absolute;
}

.title p:hover {
  background-color: #ed7a82;
  cursor: pointer;
}

</style>
