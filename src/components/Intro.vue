<template>
  <div class="intro">
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Intro',
    props: {
      title: String
    }
  }
</script>

<style scoped lang="scss">
  .intro {
    display: block;
    font-size: 8vw;
    text-transform: uppercase;
    margin-right: auto;
    margin-left: auto;
    width: 80%;
  }
</style>