<template>
  <div class="row row__accordion">
    <h3
      v-if=title
      class="accords-title"
    >
      {{ title }}
    </h3>
    <div
      class="accord"
      v-for="(accord, index) in accordions"
      v-bind:key="accord.title + '_' + index"
    >
      <button
        class="accord--button js-accord_toggle"
      >
        {{ accord.title }}
      </button>
      <vue-markdown
        class="accord--content js-accord_panel"
      >
        {{ accord.content }}
      </vue-markdown>
    </div>
  </div>
</template>
<script>
  import VueMarkdown from 'vue-markdown'
  export default {
    name: 'Accordions',
    props: {
      accordions: Array,
      title: String
    },
    components: {
      VueMarkdown
    },
    mounted() {
      // https://gomakethings.com/how-to-add-transition-animations-to-vanilla-javascript-show-and-hide-methods/
      // Show an element
      var show = function (elem) {
        // Get the natural height of the element
        var getHeight = function () {
          elem.style.display = 'block'; // Make it visible
          var height = elem.scrollHeight + 'px'; // Get it's height
          elem.style.display = ''; //  Hide it again
          return height;
        };
        var height = getHeight(); // Get the natural height
        elem.classList.add('is-visible'); // Make the element visible
        elem.style.height = height; // Update the max-height
        // Once the transition is complete, remove the inline max-height so the content can scale responsively
        window.setTimeout(function () {
          elem.style.height = '';
        }, 350);
      };
      // Hide an element
      var hide = function (elem) {
        // Give the element a height to change from
        elem.style.height = elem.scrollHeight + 'px';
        // Set the height back to 0
        window.setTimeout(function () {
          elem.style.height = '0';
        }, 1);
        // When the transition is complete, hide it
        window.setTimeout(function () {
          elem.classList.remove('is-visible');
        }, 350);
      };
      // Toggle element visibility
      var toggle = function (elem, timing) {
        // If the element is visible, hide it
        if (elem.classList.contains('is-visible')) {
          hide(elem);
          return;
        }
        // Otherwise, show it
        show(elem);
      };
      var accordToggles = document.getElementsByClassName('js-accord_toggle');
      accordToggles.forEach((el) => {
        el.onclick = function() {
          toggle(this.nextElementSibling)
        }
      })
    }
  }
</script>
<style scoped lang="scss">
  .accord {
    border: 4px solid $c-white;
    margin-bottom: 20px;
    width: 100%;
    &--button {
      background-color: transparent;
      border: none;
      color: $c-white;
      font-family: $ff-montserrat;
      font-size: 20px;
      font-weight: 900;
      padding: 10px 16px;
      text-transform: uppercase;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
    &--content {
      display: none;
      height: 0;
      overflow: hidden;
      padding: 0 16px;
      transition: height 350ms ease-in-out;
      &.is-visible {
        display: block;
        height: auto;
      }
    }
  }
</style>