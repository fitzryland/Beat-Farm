<template>
  <section
    :aria-label=title
    :id=title.toLowerCase()
    :class="'section__' + title.toLowerCase()"
  >
    <h2 :class=color>
      {{ title }}
    </h2>
    <div class="content" v-html="content"></div>
  </section>
</template>
<script>
  /*

  */
  export default {
    name: 'Section',
    props: {
      title: String,
      content: String,
      color: String
    }
  }
</script>
<style scoped lang="scss">
  section {
    min-height: 100vh;
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    padding-top: $s-vertical;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: $s-vertical;
    width: 100%;
  }
  h2 {
    font-size: 36px;
    position: relative;
    text-align: left;
    &:after {
      bottom: -4px;
      content: "";
      height: 4px;
      left: 0;
      position: absolute;
      width: 100px;
    }
  }
  .content {
    padding-top: 50px;
  }
  .pink {
    &:after {
      background-color: $c-pink;
    }
  }
  .teal {
    &:after {
      background-color: $c-teal;
    }
  }
  .orange {
    &:after {
      background-color: $c-orange;
    }
  }
</style>
<style lang="scss">
  .section__tickets {
    .content {
      max-width: 400px;
      margin-right: auto;
      margin-left: auto;
      text-align: center;
    }
    a {
      @include button;
      border-width: 4px;
      font-size: 24px;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
</style>