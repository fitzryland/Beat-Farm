<template>
  <div class="row">
    <vue-markdown
      v-if=text
      class="text-wrap"
    >
      {{ text }}
    </vue-markdown>
    <div
      class="img-wrap"
      v-if="image !== ''"
    >
      <img :src="image">
    </div>
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
  .row {
    display: flex;
    align-items: center;
    @include breakpoint($bp-medium-down) {
      flex-wrap: wrap;
    }
  }
  .text-wrap {
    padding-right: 20px;
    padding-left: 20px;
  }
  .img-wrap {
    @include center_image;
  }
  img {}
</style>