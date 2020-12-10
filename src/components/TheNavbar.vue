<template>
  <nav class="fixed w-screen" :class="{scrolling: scrollPosition > 50}">
    <div class=" container max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button class="mobile-menu-btn" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
            <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow">
          </div>
        </div>
        <div class="right">
           <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a href="/" class="menu-item active">Dashboard</a>
              <a href="/About" class="menu-item">About</a>
              <a href="/alquilar" class="menu-item">Alquilar</a>
              <a href="#" class="menu-item">Calendar</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Menu open: "block", Menu closed: "hidden"
    -->
    <div class="hidden sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#" class="mobile-menu-item active">Dashboard</a>
        <a href="#" class="mobile-menu-item">Team</a>
        <a href="#" class="mobile-menu-item">Projects</a>
        <a href="#" class="mobile-menu-item">Calendar</a>
      </div>
        <MenuItem v-for="(r,i) in routes" :key="i" :route="r"/>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  /**
   * TODO: Agregar Mobile navbar
   */
  name: 'TheNavbar',
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

<style scoped lang="scss">
/* Your CSS goes here */
.menu-item{
  @apply text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium;
}

.menu-item .active{
  @apply bg-gray-900 text-white;
}

.mobile-menu{
  @apply origin-top-right absolute right-0 mt-2 w-48;
  @apply rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5;
}

.mobile-menu-btn{
  @apply inline-flex items-center justify-center p-2 rounded-md;
  @apply text-gray-400 hover:text-white hover:bg-gray-700;
  @apply focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white;
}

.mobile-menu-item .active{
  @apply bg-gray-900 text-white;
}

.mobile-menu-item{
  @apply text-gray-300 block px-3 py-2 rounded-md text-base font-medium;
  @apply hover:bg-gray-700 hover:text-white;
}

.btn-bell{
  @apply bg-gray-800 p-1 rounded-full text-gray-400;
  @apply hover:text-white;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
  @apply focus:ring-offset-gray-800 focus:ring-white;
}

.right {
  @apply absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0;
}

.scrolling{
  background-color: rgba($color: white, $alpha: 1);
}

@media only screen and (max-width: 1399px) and (min-width: 1200px){
  .nav-container {
    max-width: 95%;
  }
}
</style>
