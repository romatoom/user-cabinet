<template>
  <h1 class="mb-20">Все новости</h1>
  <PostsList
    :loading="isPostLoading"
    :posts="posts"
    @delete-post="handleDeletePost"
  />
</template>

<script>
import { getPosts, deletePost } from "@/api/posts.js";
import PostsList from "@/components/PostsList.vue";

export default {
  components: {
    PostsList,
  },

  data() {
    return {
      isPostLoading: false,
      posts: null,
    };
  },

  async mounted() {
    this.loadPosts();
  },

  methods: {
    async loadPosts() {
      try {
        this.isPostLoading = true;
        this.posts = await getPosts();
      } finally {
        this.isPostLoading = false;
      }
    },

    async handleDeletePost(postID) {
      try {
        const result = await deletePost(postID);
        if (!result.ok) return;

        this.posts = this.posts.filter((post) => post.id !== postID);
      } catch (err) {
        //
      }
    },
  },
};
</script>
