<template>
  <div class="row">
    <vue-markdown>
      {{ text }}
    </vue-markdown>
  </div>
</template>
<script>
  import VueMarkdown from 'vue-markdown'
  export default {
    name: 'TextWithImage',
    props: {
      text: String,
      image: String,
    },
    components: {
      VueMarkdown
    }
  }
</script>
<style scoped lang="scss">
</style>