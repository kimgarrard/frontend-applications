<template>
  <div>
    <nav>
      <p>Home</p>
      <p>Muziekinstrumenten</p>
      <p>Over ons</p>
    </nav>
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/COLLECTIE_TROPENMUSEUM_Een_Samo_muzikant_bespeelt_de_muziekboog_TMnr_20010316.jpg" alt="">
  </div>
</template>

<script>

</script>

<style>

nav {
  display: flex;
  background-color: white;
  justify-content: space-around;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  box-shadow: 0px 4px 6px 0px rgba(0,0,0,0.06);
  color: #ea4e55;
  font-weight: bold;
  margin: 0% 10%;
  padding: 1em 0;
  width: 80%;
}

nav + img {
  margin: 2em;
  max-height: 60vh;
  object-fit: cover;
  object-position: 0 38%;
}

</style>
