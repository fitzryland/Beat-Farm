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
    margin-right: auto;
    margin-left: auto;
    width: 80%;
  }
  .title {
    font-size: 8vw;
    font-weight: 600;
    text-transform: uppercase;
  }
</style>