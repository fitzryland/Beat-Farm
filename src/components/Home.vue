<template>
  <div class="home">
    <Header />
    <main aria-label="main sections of Beat Farm">
      <template
        v-for="section in sections"
      >
        <Section
          v-bind:key="section['section-title'] + 'section'"
          v-bind:title="section['section-title']"
          v-bind:content="section['section-content']"
          v-bind:color="section['section-color']"
        />
      </template>
    </main>
    <footer>&copy; {{ year }} Beat Farm PDX</footer>
  </div>
</template>

<script>
  /*
  */
  import Header from './Header.vue'
  import Section from './Section.vue'
  export default {
    name: 'home',
    components: {
      Header,
      Section
    },
    computed: {
      sections() {
        return this.$store.state.sections
      },
      year() {
        return new Date().getFullYear()
      }
    }
  }
</script>

<style scoped lang="scss">
  footer {
    font-size: 16px;
    padding: 20px;
    text-align: center;
  }
</style>
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
    background-image: url('../assets/small_logo.svg');
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
