<template>
  <v-container>
    <div class="text-h2 text-center ma-10">Hello!</div>
    <div class="text-h5 text-center ma-10">
      We have a few gallerias for you...
    </div>
  </v-container>
  <v-container>
    <div class="my-10">
      <my-carousel-gallery v-bind="newGalleriesCarousel"
        >New galleries</my-carousel-gallery
      >
    </div>
    <div class="my-10">
      <my-carousel-gallery v-bind="popularGalleriesCarousel"
        >Most popular galleries</my-carousel-gallery
      >
    </div>
    <div class="my-10">
      <my-carousel-gallery v-bind="hiResGalleriesCarousel"
        >High resolution galleries</my-carousel-gallery
      >
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import MyCarouselGallery from "@/components/MyCarouselGallery.vue";
import { onMounted, reactive, ref } from "vue";
import type { carouselGallery } from "@/models/types";

const newGalleriesCarousel = reactive<carouselGallery>({
  galleryCategory: "new",
});
const popularGalleriesCarousel = reactive<carouselGallery>({
  galleryCategory: "popular",
});
const hiResGalleriesCarousel = reactive<carouselGallery>({
  galleryCategory: "hiRes",
});

onMounted(async () => {
  newGalleriesCarousel.galleryPreview = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_page=1&_limit=5"
  ).then((r) => r.json());
  popularGalleriesCarousel.galleryPreview = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_page=6&_limit=5"
  ).then((r) => r.json());
  hiResGalleriesCarousel.galleryPreview = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_page=11&_limit=5"
  ).then((r) => r.json());
});
</script>
