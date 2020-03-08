<template>
  <nav
    class="nav"
    id="js-nav"
    aria-label="Main Navigation"
  >
    <a
      v-for="(section, sectionIndex) in sections"
      v-bind:key="section['section-title'] + '_' + sectionIndex"
      :href="'#' + section['section-title'].toLowerCase()"
      :class="section['section-color'] + ' js-nav_item'"
    >
      {{ section['section-title'] }}
    </a>
  </nav>
</template>

<script>
  export default {
    name: 'Nav',
    computed: {
      sections() {
        return this.$store.state.sections
      }
    },
    mounted () {
      var sticky = {
        navData: [],
        getDistance: function(h) {
            var topDist = h.offsetTop;
            return topDist;
          },
        setNavData: function() {
          var that = this;
          that.navData = [];
          let navItems = document.getElementsByClassName('js-nav_item');
          let navItemsLength = navItems.length;
          for ( var i = 0; i < navItemsLength; i++ ) {
            var navItem = navItems[i]
            var itemData = {
              top: 0,
              bottom: 0,
              navEl: navItem
            };
            var targetId = navItem.href.split('#').pop();
            var target = document.getElementById(targetId);
            var targetBounds = target.getBoundingClientRect();
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            itemData.top = Math.round(targetBounds.top + scrollTop, 10)
            itemData.bottom = Math.round(targetBounds.bottom + scrollTop, 10)
            that.navData.push(itemData)
          }
        },
        init: function() {
          var that = this,
              prevNavItem = false;
          that.setNavData()
          var h = document.getElementById("js-nav");
          var stuck = false;
          var stickPoint = that.getDistance(h);
          var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          var vm = vh / 2;
          window.onscroll = function() {
            var distance = that.getDistance(h) - window.pageYOffset;
            var curMiddle = Math.round(window.pageYOffset + vm, 10);
            var curEl = that.navData.filter(item => item.top < curMiddle && item.bottom > curMiddle);
            if ( curEl.length > 0 ) {
              // there is an element that matches
              curEl = curEl[0].navEl;
              if ( curEl !== prevNavItem ) {
                if ( prevNavItem ) {
                  prevNavItem.classList.remove('current');
                }
                curEl.classList.add('current');
                prevNavItem = curEl;
              }
            } else {
              if ( prevNavItem ) {
                prevNavItem.classList.remove('current');
                prevNavItem = false;
              }
            }
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
          document.onreadystatechange = () => {
            if (document.readyState === 'complete') {
              that.setNavData()
            }
          }
          window.addEventListener('resize', () => {
            that.setNavData()
          });
        }
      }
      this.$nextTick(function() {
        sticky.init()
      });
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
      transition: height 0.2s ease-out, color 0.2s ease-out;
      right: 0;
      z-index: -1;
    }
    &:hover,
    &:active,
    &:focus {
      &:after {
        height: 8px;
      }
    }
  }
  a.current {
    color: $c-black;
    &:after {
      height: 42px;
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