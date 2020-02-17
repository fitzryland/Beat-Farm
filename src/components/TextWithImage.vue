<template>
  <div class="row">
    {{ text }}
  </div>
</template>
<script>
  export default {
    name: 'TextWithImage',
    props: {
      text: String,
      image: String,
    }
  }
</script>
<style scoped lang="scss">
</style>