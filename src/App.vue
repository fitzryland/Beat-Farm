<template>
  <div id="app">
    <Header v-bind:sections=sections />
    <main>
      <template
        v-for="section in sections"
      >
        <Section
          v-bind:key="section.title.toLowerCase()"
          v-bind="section"
        />
      </template>
    </main>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Section from './components/Section.vue'
  import content from './assets/content.json'
  export default {
    name: 'app',
    components: {
      Header,
      Section
    },
    data (){
      return {
        sections: content.sections
      }
    }
  }
</script>

<style lang="scss">
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
  h2 {
    text-transform: uppercase;
    font-weight: 900;
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
  p {
    margin-top: 0;
    margin-bottom: 1em;
  }
  #app {
    min-height: 100%;
    width: 100%;
  }
</style>
