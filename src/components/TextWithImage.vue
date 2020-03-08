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
      v-if="image"
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
  .img-wrap,
  .text-wrap {
    @include breakpoint($bp-large-up) {
      width: 100%;
    }
  }
  .text-wrap {
    max-width: 770px;
    @include breakpoint($bp-large-up) {
      padding-right: 20px;
      padding-left: 20px;
    }
  }
  .img-wrap {}
  img {
    @include center_image;
  }
</style>
<style lang="scss">
  .text-wrap {
    .section__tickets & {
      text-align: center;
    }
  }
</style>