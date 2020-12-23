<template>
    <sidebar-menu
      :menu="menu"
      :collapsed="crrWidth < 800"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SidebarMenu } from 'vue-sidebar-menu';

export default defineComponent({
  name: 'DashboardNavegation',
  components: {
    SidebarMenu,
  },
  data() {
    return {
      crrWidth: document.body.clientWidth,
      menu: [
        {
          header: true,
          title: 'Hello Maria!',
          hiddenOnCollapse: true,
        },
        {
          href: '/dashboard',
          title: 'Dashboard',
          icon: 'fa fa-user',
        },
        {
          href: '/dashboard/listings',
          title: 'Mis Propiedades',
          icon: 'fa fa-chart-area',
        },
      ],
    };
  },
  methods: {
    updateWidth() {
      this.crrWidth = document.body.clientWidth;
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateWidth);
  },
});
</script>

<style lang="scss">
a em, a i{
  border: 0;
}
.v-sidebar-menu {
  height: 100vh;
}
.v-sidebar-menu.vsm_expanded {}
.v-sidebar-menu.vsm_collapsed {}
.v-sidebar-menu .vsm--menu {
  height: 100vh;
  padding-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(238, 238, 238, 0.5);
}
.v-sidebar-menu .vsm--header {
  margin: 0.5rem 2rem;
}
.v-sidebar-menu .vsm--item {}
.v-sidebar-menu .vsm--item.vsm--item_open {}
.v-sidebar-menu .vsm--link {}
.v-sidebar-menu .vsm--link.vsm--link_active {}
.v-sidebar-menu .vsm--link.vsm--link_exact-active {}
.v-sidebar-menu .vsm--link.vsm--link_mobile-item {}
.v-sidebar-menu .vsm--link.vsm--link_level-[n] {}
.v-sidebar-menu .vsm--link.vsm--link_disabled {}
.v-sidebar-menu .vsm--title {}
.v-sidebar-menu .vsm--icon {}
.v-sidebar-menu .vsm--arrow {}
.v-sidebar-menu .vsm--arrow.vsm--arrow_open {}
.v-sidebar-menu .vsm--badge {}
.v-sidebar-menu .vsm--header {}
.v-sidebar-menu .vsm--list {}
.v-sidebar-menu .vsm--dropdown>.vsm--list {}
.v-sidebar-menu .vsm--mobile-item {}
.v-sidebar-menu .vsm--mobile-bg {}
.v-sidebar-menu .vsm--toggle-btn {}
</style>
