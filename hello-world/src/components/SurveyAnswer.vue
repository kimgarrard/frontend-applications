<template>
  <div>
    <p v-for="result in results" :key="result.title">{{ result.title.value }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      results: Array
    },
    data() {

    },
    mounted() {
      /*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
      /*eslint-env browser*/
      /*eslint 'no-console':0*/

      console.log('Results: ', this.results)
    },
    methods: {

    }
  }
</script>

<style>

</style>
