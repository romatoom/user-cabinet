<template>
  <div class="sidebar">
    <div class="user-short-info">
      <img class="avatar" :src="avatarURL" />

      <div v-if="user" class="info-block">
        <span class="name">{{ user.name }}</span>
        <span class="email">{{ user.email }}</span>
      </div>
    </div>

    <div class="nav-list">
      <router-link
        v-for="link in navigationData"
        :key="link.path"
        :to="link.path"
        class="nav-item"
      >
        <inline-svg :src="link.iconPath" />
        {{ link.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { navigationData } from "@/router.js";
import getUserInfo from "@/api/userInfo.js";

import InlineSvg from "vue-inline-svg";

export default {
  DEFAULT_AVATAR_IMAGE: "/images/default-avatar.jpg",

  name: "SideBar",

  components: {
    InlineSvg,
  },

  data() {
    return {
      user: null,
    };
  },

  props: {},

  computed: {
    navigationData,

    avatarURL() {
      return this.user?.avatarURL ?? this.$options.DEFAULT_AVATAR_IMAGE;
    },
  },

  async mounted() {
    this.user = await getUserInfo();
  },
};
</script>

<style lang="scss" scoped>
.user-short-info {
  padding: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  & img.avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    object-fit: cover;
    overflow: hidden;
  }

  & .info-block {
    display: flex;
    flex-direction: column;

    & .name {
      font-weight: bold;
    }
  }
}

.nav-list {
  display: flex;
  flex-direction: column;

  & .nav-item {
    color: var(--dark);
    padding: 20px;
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    border-top: 1px solid var(--light);

    &.router-link-active {
      color: var(--primary);

      & svg {
        fill: var(--primary);
      }
    }
  }
}
</style>
