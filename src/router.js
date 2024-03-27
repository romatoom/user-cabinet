import { createWebHistory, createRouter } from "vue-router";

const HomePage = () => import("@/components/pages/HomePage.vue");
const AddPostPage = () => import("@/components/pages/AddPostPage.vue");

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home",
    meta: {
      title: "Все новости",
      iconPath: "/icons/home.svg",
    },
  },

  {
    path: "/add-post",
    component: AddPostPage,
    name: "add-post",
    meta: {
      title: "Добавить запись",
      iconPath: "/icons/add-post.svg",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const navigationData = () =>
  routes.map((router) => ({
    path: router.path,
    title: router.meta.title,
    iconPath: router.meta.iconPath,
  }));

export { router, navigationData };
