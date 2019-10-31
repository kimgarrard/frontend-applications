<template>
 <div id="app">
   <Header />
   <!--<QueryResultaten/>-->
   <router-view />
 </div>
</template>


<script>
import Header from './components/Header'

export default {
 name: 'app',
 components: {
   Header
 },
}
</script>


<style>

@font-face {
    font-family: "SofiaRegular";
    src: url("fonts/SofiaProRegular.ttf") format("truetype");
}

body {
 background-color: #ffffff;
 font-family: "SofiaRegular";
 margin: 0;
 padding: 0;
}

div h1 {
 text-align: center;
}

</style>
