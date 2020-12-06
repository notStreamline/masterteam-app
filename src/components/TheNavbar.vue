<template>
  <div :class="{scrolling: scrollPosition > 50}" class="navbar-area">
      <div class="navbar container nav-container">
        <div class="navbar-section">
          <div class="navbar-brand text-bold mr-2">
            LOGO
          </div>
        </div>
        <div class="navbar-section">
          <menu-item v-for="(r,i) in routes" :key="i" :route="r"/>
        </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  /**
   * TODO: Agregar Mobile navbar
   */
  name: 'the-navbar',
  data: () => ({
    scrollPosition: 0,
  }),
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  components: {
    MenuItem: () => import(/* webpackChunkName: "menu-item" */ './MenuItem.vue'),
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
});
</script>

<style lang="scss">
/* Your CSS goes here */
.navbar-area{
  padding: 0;
  padding: .4rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9999;
  -webkit-transition: all .4s;
  -o-transition: all .4s;
  transition: all .4s;
  padding: 10px 0;
  a{
    color: black;
  }
  a:focus, a:hover, a:active {
    text-decoration: none;
    color: black;
  }
}

.scrolling{
  background-color: rgba($color: white, $alpha: 0.9);
}

@media only screen and (max-width: 1399px) and (min-width: 1200px){
  .nav-container {
    max-width: 95%;
  }
}
</style>
