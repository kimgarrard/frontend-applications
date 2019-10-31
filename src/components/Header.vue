<template>
  <div>
    <nav>
      <router-link to="/" class="navtekst">Home</router-link>
      <router-link to="/instrumenten" class="navtekst">Muziekinstrumenten</router-link>
      <p class="navtekst">Over ons</p>
    </nav>
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
  margin: 0% 20%;
  padding: 1em 0;
  width: 60%;
}

.navtekst {
  text-decoration: none;
  color: #ea4e55;
  margin: 16px 0px;
}

.navtekst:hover {
  text-decoration: none;
  color: grey;
  margin: 16px 0px;
}

nav + img {
  padding: 2em;
  max-height: 60vh;
  object-fit: cover;
  object-position: 0 38%;
  width: 100vw;
}

</style>
