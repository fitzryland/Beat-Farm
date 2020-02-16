<template>
  <header aria-label="BEAT FARM Site Header">
    <h1 class="logo">
      <img alt="BEAT FARM" src="../assets/logo.svg">
    </h1>
    <p>July 16-19 2020</p>
  </header>
</template>

<script>
  /*
    <Nav />
  */
  import Nav from '../components/Nav.vue'
  export default {
    name: 'Header',
    components: {
      // Nav
    }
  }
</script>

<style scoped lang="scss">
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: $s-vertical/2;
    min-height: 100vh;
    text-align: center;
  }
  .logo {
    display: block;
    margin-top: 0;
    margin-right: auto;
    margin-bottom: 1vh;
    margin-left: auto;
    width: 80%;
  }
  img {
    max-height: 50vh;
  }
  p {
    display: block;
    font-size: 8vw;
    font-weight: 900;
    margin-right: auto;
    margin-bottom: 4vh;
    margin-left: auto;
    text-transform: uppercase;
    width: 80%;
  }
</style>