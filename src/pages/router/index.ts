import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component:()=> import("@/pages/MyHomePage.vue"),
    meta: { titleRus: "Главная страница" },
  },
  {
    path: "/galleries/:category/gallery/:id",
    name: "PicturesPage",
    component:()=> import("@/pages/MyPictures.vue"),
    meta: { titleRus: "Галерея" },
  },
  {
    path: "/galleries/:category",
    name: "GalleriesPage",
    component:()=> import("@/pages/MyGalleries.vue"),
    meta: { titleRus: "Галереи" },
  },
  {
    path: "/about",
    name: "About",
    component:()=> import("@/pages/MyAbout.vue"),
    meta: { titleRus: "О нас" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
//lazy load!!!!
