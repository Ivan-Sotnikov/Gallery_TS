import { createRouter, createWebHashHistory } from "vue-router";

import GalleriesPage from "@/pages/MyGalleries.vue";
import HomePage from "@/pages/MyHomePage.vue";
import PicturesPage from "@/pages/MyPictures.vue";
import About from "@/pages/MyAbout.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: { titleRus: "Главная страница" },
  },
  {
    path: "/galleries/:category/gallery/:id",
    name: "PicturesPage",
    component: PicturesPage,
    meta: { titleRus: "Галерея" },
  },
  {
    path: "/galleries/:category",
    name: "GalleriesPage",
    component: GalleriesPage,
    meta: { titleRus: "Галереи" },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { titleRus: "О нас" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
