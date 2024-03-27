<template>
  <template v-if="!loading">
    <div v-if="postsExists" class="posts-list">
      <div
        v-for="post in posts"
        :key="post.id"
        class="post-item"
        :class="{
          inactive: isPostInactive(post),
        }"
      >
        <div class="post-id">{{ post.id }}</div>

        <div class="main-info">
          <div class="post-title" @click="togglePostBodyVisibility(post)">
            {{ post.title }}
          </div>

          <div class="post-author-id">ID автора: {{ post.userId }}</div>

          <div v-show="isPostShowed(post)" class="post-body">
            {{ post.body }}
          </div>
        </div>

        <div class="delete-btn" @click="handleClickDeletePost(post)">
          Удалить
        </div>
      </div>
    </div>

    <div v-else-if="postsEmpty" class="data-container">
      Нет записей для отображения
    </div>

    <div v-else class="data-container">Ошибка загрузки постов</div>
  </template>

  <div v-else class="data-container">
    <div class="loader">Загрузка...</div>
  </div>
</template>

<script>
export default {
  name: "PostsList",

  props: {
    posts: {
      type: [Array, null],
      required: true,
    },

    loading: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    postsExists() {
      return this.posts?.length > 0;
    },

    postsEmpty() {
      return this.posts?.length === 0;
    },
  },

  emits: {
    "delete-post": (postID) => {
      return typeof postID === "number" && postID > 0;
    },
  },

  data() {
    return {
      showedPostsIDs: [],
      inactivePostsIDs: [],
    };
  },

  methods: {
    isPostShowed({ id }) {
      return this.showedPostsIDs.includes(id);
    },

    isPostInactive({ id }) {
      return this.inactivePostsIDs.includes(id);
    },

    togglePostBodyVisibility(post) {
      if (this.isPostShowed(post)) {
        this.showedPostsIDs = this.showedPostsIDs.filter(
          (showedID) => showedID !== post.id
        );
      } else {
        this.showedPostsIDs.push(post.id);
      }
    },

    handleClickDeletePost({ id }) {
      if (
        this.isPostInactive(id) ||
        !confirm("Действительно ли вы хотите удалить новость?")
      )
        return;

      this.inactivePostsIDs.push(id);
      this.$emit("delete-post", id);
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

    &.inactive {
      background-color: var(--very-light);
      pointer-events: none;

      & .delete-btn {
        cursor: none;
      }
    }

    & > div {
      padding: 20px;
    }

    & > .post-id {
      font-size: 40px;
      color: var(--light);
    }

    & .main-info {
      width: 100%;

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

    & > .delete-btn {
      color: var(--danger);
      cursor: pointer;
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
