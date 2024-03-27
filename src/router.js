import { createWebHistory, createRouter } from "vue-router";

const HomePage = () => import("@/components/pages/HomePage.vue");
const AddPostPage = () => import("@/components/pages/AddPostPage.vue");

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/add-post", component: AddPostPage, name: "add-post" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
