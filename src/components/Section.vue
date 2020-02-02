<template>
  <section
    :aria-label=title
    :id=title.toLowerCase()
  >
    <h2>
      {{ title }}
    </h2>
    <div>
      {{ content }}
    </div>
  </section>
</template>
<script>
  export default {
    name: 'Section',
    props: {
      title: String,
      content: String
    }
  }
</script>
<style scoped lang="scss">
  section {
    min-height: 100vh;
    max-width: 1280px;
    width: 100%;
  }
</style>