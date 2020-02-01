<template>
  <div id="app">
    <Logo />
    <Intro title="July 16-19 2020" />
  </div>
</template>

<script>
  import Logo from './components/Logo.vue'
  import Intro from './components/Intro.vue'

  export default {
    name: 'app',
    components: {
      Logo,
      Intro
    }
  }
</script>

<style lang="scss">
  body {
    background-color: #000;
  }
  #app {
    color: #fff;
    font-family: "Arial Black", "Arial Bold", Gadget, sans-serif;
    text-align: center;
    margin-top: 60px;
  }
</style>
