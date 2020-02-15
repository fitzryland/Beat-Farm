<template>
  <section
    :aria-label=title
    :id=title.toLowerCase()
  >
    <h2 :class=color>
      {{ title }}
    </h2>
    <div>
      {{ content }}
    </div>
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
    position: relative;
    &:after {
      bottom: -4px;
      content: "";
      height: 4px;
      left: 0;
      position: absolute;
      width: 100px;
    }
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