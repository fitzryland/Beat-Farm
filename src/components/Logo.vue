<template>
  <h1 class="logo">
    <img alt="Beat Farm" src="../assets/logo.svg">
  </h1>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  .logo {
    display: block;
    margin-right: auto;
    margin-bottom: 1vh;
    margin-left: auto;
    width: 80%;
  }
  img {
    max-height: 50vh;
  }
</style>