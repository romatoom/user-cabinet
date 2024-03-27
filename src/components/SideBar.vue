<template>
  <div class="sidebar">
    <router-link to="/">Все новости</router-link>
    <router-link to="/add-post">Добавить запись</router-link>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
