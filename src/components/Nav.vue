<template>
  <nav
    class="nav"
    id="js-nav"
    aria-label="Main Navigation"
  >
    <a
      v-for="section in sections"
      v-bind:key=section.title
      :href="'#' + section.title.toLowerCase()"
    >
      {{ section.title }}
    </a>
  </nav>
</template>

<script>
  export default {
    name: 'Nav',
    props: {
      title: String,
      sections: Array
    },
    mounted () {
      var sticky = {
        getDistance: function(h) {
            var topDist = h.offsetTop;
            return topDist;
          },
        init: function() {
          var that = this;
          var h = document.getElementById("js-nav");
          var stuck = false;
          var stickPoint = that.getDistance(h);
          window.onscroll = function() {
            var distance = that.getDistance(h) - window.pageYOffset;
            var offset = window.pageYOffset;
            if ( (distance <= 0) && !stuck) {
              h.style.position = 'fixed';
              h.style.top = '0px';
              stuck = true;
            } else if (stuck && (offset <= stickPoint)){
              h.style.position = 'static';
              stuck = false;
            }
          }
        }
      }
      this.$nextTick()
        .then(function() {
          sticky.init()
        })
    }
  }

</script>

<style scoped lang="scss">
  nav {
    background-color: $c-black;
    width: 100%;
  }
  a {
    display: inline-block;
    padding: 10px 15px;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    &:link,
    &:visited {
      color: $c-white;
      text-decoration: none;
    }
    &:after {
      content: "";
      position: absolute;
    }
  }
</style>