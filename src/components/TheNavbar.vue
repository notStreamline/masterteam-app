<template>
  <div class="navbar-area">
    <nav class="navbar navbar-area">
      <div class="row container nav-container navbar-expand-lg">
        <div class="logo">
          LOGO
        </div>
        <ul class="navbar-nav">
          <menu-item v-for="(r,i) in routes" :key="i" :route="r"/>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  /**
   * Agregar Mobile navbar
   */
  name: 'the-navbar',
  components: {
    MenuItem: () => import(/* webpackChunkName: "menu-item" */ './MenuItem.vue'),
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
};
</script>

<style lang="scss">
/* Your CSS goes here */
.navbar-area{
  padding: 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9999;
  -webkit-transition: all .4s;
  -o-transition: all .4s;
  transition: all .4s;

  .navbar{
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .5rem 1rem;
  }

  .nav-container {
    background-color: transparent;
    padding: 22px 0px;
    -webkit-transition: all .4s;
    -o-transition: all .4s;
    transition: all .4s;
  }

  .navbar-nav {
    width: 100%;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: flex-end;
  }
    .menu-item {
      margin-right: 20px;
    }
}

.logo{
  padding: 10px;
}

@media only screen and (max-width: 1399px) and (min-width: 1200px){
  .navbar-area .nav-container {
    max-width: 95%;
  }
}
</style>
