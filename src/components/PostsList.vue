<template>
  <template v-if="!isPostLoading">
    <div v-if="posts" class="posts-list">
      <div v-for="post in posts" :key="post.id" class="post-item">
        <div class="post-id">{{ post.id }}</div>

        <div class="main-info">
          <div class="post-title" @click="togglePostBodyVisibility(post.id)">
            {{ post.title }}
          </div>

          <div class="post-author-id">ID автора: {{ post.userId }}</div>

          <div v-show="isPostShowed(post.id)" class="post-body">
            {{ post.body }}
          </div>
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
      showedPostsIDs: [],
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

  methods: {
    togglePostBodyVisibility(postID) {
      if (this.isPostShowed(postID)) {
        this.showedPostsIDs = this.showedPostsIDs.filter((id) => id !== postID);
      } else {
        this.showedPostsIDs.push(postID);
      }
    },

    isPostShowed(postID) {
      return this.showedPostsIDs.includes(postID);
    },
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

    & > .post-id {
      font-size: 40px;
      color: var(--light);
    }

    & .main-info {
      & > .post-title {
        font-weight: bold;
        cursor: pointer;

        &:hover {
          color: var(--primary);
        }
      }

      & > .post-author-id {
        color: var(--grey);
      }

      & > .post-body {
        margin-top: 20px;
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
