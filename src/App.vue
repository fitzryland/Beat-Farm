<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    height: 100%;
    scroll-behavior: smooth;
  }
  body {
    background-attachment: fixed;
    background-color: #000;
    background-image: url('./assets/small_logo.svg');
    background-position: 10% center;
    background-repeat: no-repeat;
    background-size: auto 120%;
    color: #fff;
    font-family: $ff-montserrat;
    font-size: 18px;
    margin: 0;
    min-height: 100%;
  }
  h2,
  h3 {
    text-transform: uppercase;
    font-weight: 900;
  }
  h2 {
    font-size: 36px;
  }
  h3 {
    font-size: 30px;
  }
  a {
    transition: color 0.2s ease;
    &:link,
    &:visited {
      color: $c-teal;
      text-decoration: underline;
    }
    &:hover,
    &:active,
    &:focus {
      color: $c-pink;
    }
  }
  img {
    max-width: 100%;
    height: auto;
  }
  p {
    margin-top: 0;
    margin-bottom: 1em;
  }
  #app {
    min-height: 100%;
    width: 100%;
  }
</style>
