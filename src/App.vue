<template>
  <side-bar class="sidebar" />
  <div class="page">
    <router-view />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>

<style lang="scss" scoped>
#app {
  & .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: var(--side-bar-width);
    padding: 20px;
    background-color: var(--sidebar-bg-color);
  }

  & .page {
    padding-left: 400px;
    padding: 20px 20px 20px calc(var(--side-bar-width) + 20px);
    background-color: var(--page-bg-color);
    min-height: 100vh;
  }
}
</style>
