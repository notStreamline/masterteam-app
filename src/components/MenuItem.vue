<template>
  <div>
    <li v-if="isVisible" class="menu-item btn btn-link">
      <router-link
        exact-active-class="text-success"
        :to="{name: route.name}"
        class="nav-link"
      >{{name}}</router-link>
    </li>
  </div>
</template>

<script>
export default {
  /**
   * TODO: add the ts tag in the script. Correct the errors
   */
  name: 'MenuItem',
  props: {
    route: Object,
  },
  computed: {
    isVisible() {
      return this.route?.meta?.visible !== false;
    },
    name() {
      return this.route.name
        .toLowerCase()
        .split('-')
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(' ');
    },
  },
};
</script>

<style scoped lang="scss">
/* The CSS goes here */
.nav-link {
  text-decoration: none;
}
</style>
