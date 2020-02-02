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
  $ff-montserrat: 'Montserrat', Zapfino, Arial, "Helvetica Neue", Helvetica, sans-serif;
  html {
    height: 100%;
  }
  body {
    align-items: center;
    background-color: #000;
    background-image: url('./assets/small_logo.svg');
    background-position: 10% center;
    background-repeat: no-repeat;
    background-size: auto 120%;
    display: flex;
    font-family: $ff-montserrat;
    font-size: 18px;
    margin: 0;
    min-height: 100%;
  }
  #app {
    color: #fff;
    justify-content: center;
    min-height: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    width: 100%;
  }
</style>
