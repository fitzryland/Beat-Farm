<template>
  <section
    :aria-label=title
    :id=title.toLowerCase()
    :class="'section__' + title.toLowerCase()"
  >
    <h2 :class=color>
      {{ title }}
    </h2>
    <div
      v-for="(row, index) in content"
      v-bind:key="row.type + '_' + index"
    >
      <TextWithImage
        v-if="row.type == 'text-with-image'"
        v-bind:text=row.text
        v-bind:image=row.image
      />
      <Accordions
        v-if="row.type == 'accordions'"
        v-bind:accordions=row.accordion
        v-bind:title="row['accordions-title']"
      />
    </div>
  </section>
</template>
<script>
  import TextWithImage from './TextWithImage.vue'
  import Accordions from './Accordions.vue'
  export default {
    name: 'Section',
    props: {
      title: String,
      content: Array,
      color: String
    },
    components: {
      TextWithImage,
      Accordions
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
  .row {
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
    @include breakpoint($bp-medium-down) {
      flex-wrap: wrap;
    }
    &__accordion {
      display: block;
      max-width: 770px;
      margin-right: auto;
      margin-left: auto;
    }
  }
</style>