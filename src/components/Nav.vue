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
      :class="section.color + ' js-nav_item'"
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
          // @TODO define a way of setting the current indicator
          var navItems = document.getElementsByClassName('js-nav_item'),
              navItemsLength = navItems.lenght;
          for ( var i = 0; i < navItemsLength; i++ ) {
            // @TODO just a placeholder
            // if ( i === 0 ) {
              navItems[i].classList.add('current');
            // }
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
    position: relative;
    width: 100%;
    z-index: 100;
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
      bottom: 0;
      content: "";
      height: 4px;
      left: 0;
      position: absolute;
      transition: height 0.2s ease-out;
      right: 0;
    }
    &:hover,
    &:active,
    &:focus {
      &:after {
        height: 8px;
      }
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