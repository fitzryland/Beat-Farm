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
          // @TODO define a way of setting the current indicator
          var navItems = document.getElementsByClassName('js-nav_item'),
              navItemsLength = navItems.length,
              navData = [];
          for ( var i = 0; i < navItemsLength; i++ ) {
            var navItem = navItems[i]
            console.log('navItem');
            console.log(navItem);
            var itemData = {
              top: 0,
              bottom: 0,
              navEl: navItem
            };
            // @TODO add the top and bottom positions
            navData.push(itemData);
          }
          console.log('navData');
          console.log(navData);
          var that = this;
          var h = document.getElementById("js-nav");
          var stuck = false;
          var stickPoint = that.getDistance(h);
          var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          var vm = vh / 2;
          window.onscroll = function() {
            var distance = that.getDistance(h) - window.pageYOffset;
            var curMiddle = Math.round(window.pageYOffset + vm, 10);
            console.log('curMiddle');
            console.log(curMiddle);
            // @TODO filter navData array to see
            // if curMiddle is > it's top and < it's bottom
            // then set the current indicator
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