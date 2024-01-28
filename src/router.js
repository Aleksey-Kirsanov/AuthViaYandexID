import { createRouter, createWebHashHistory } from "vue-router";
import WelcomePage from "/src/layouts/WelcomePage.vue";
import MainPage from "/src/layouts/MainPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: WelcomePage,
      children: [
        {
          path: "main",
          component: MainPage,
        },
      ],
    },
  ],
});
