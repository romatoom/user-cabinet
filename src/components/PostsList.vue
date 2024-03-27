<template>
  <template v-if="!isPostLoading">
    <div v-if="posts" class="posts-list">
      <div v-for="post in posts" :key="post.id" class="post-item">
        <div class="post-id">{{ post.id }}</div>

        <div class="main-info">
          <div class="post-title">{{ post.title }}</div>
          <div class="post-author-id mb-20">ID автора: {{ post.userId }}</div>
          <div class="post-body">{{ post.body }}</div>
        </div>
      </div>
    </div>

    <div v-else class="data-container">Ошибка загрузки постов</div>
  </template>

  <div v-else class="data-container">
    <div class="loader">Загрузка...</div>
  </div>
</template>

<script>
import { getPosts } from "@/api/posts.js";

export default {
  name: "PostsList",

  data() {
    return {
      posts: null,
      isPostLoading: null,
    };
  },

  async mounted() {
    try {
      this.isPostLoading = true;
      this.posts = await getPosts();
    } finally {
      this.isPostLoading = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.posts-list {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;

  & > .post-item {
    padding: 20px 0;
    border-bottom: 1px solid var(--light);
    display: flex;
    flex-direction: row;
    align-items: center;

    & > div {
      padding: 20px;
    }

    & .main-info {
      & > .post-id {
        font-size: 20px;
      }

      & > .post-title {
        font-weight: bold;
      }

      & > .post-author-id {
        color: var(--grey);
      }
    }
  }

  & > .post-item:last-child {
    border-bottom: none;
  }
}

.data-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: #fff;
}
</style>
