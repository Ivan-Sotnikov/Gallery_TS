<template>
  <div class="text-center my-10">
    <div class="text-h4">Welcome in {{ galleryOnPage.category }} section.</div>
    <div class="text-h6 mt-5">Choose the gallery...</div>
  </div>
  <div class="text-center">
    <div>Galleries on page</div>
    <v-radio-group v-model="imagesOnPage" inline>
      <v-radio label="12" value="12" />
      <v-radio label="24" value="24" />
      <v-radio label="48" value="48" />
    </v-radio-group>
  </div>
  <my-gallery-palette :galleyImages="galleryOnPage.images" />
  <v-pagination
    v-model="galleryOnPage.currentPage"
    :length="15"
    total-visible="6"
  />
</template>

<script lang="ts" setup>
import MyGalleryPalette from "@/components/MyGalleryPalette.vue";
import type { GalleryItem } from "@/models/types";
import { reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const galleryOnPage = reactive<GalleryItem>({
  category: "",
  images: [],
  currentPage: 1,
  startFromPage: 1,
});

const imagesOnPage = ref<string>("24");

function switchCategory(): void {
  switch (route.params.category) {
    case "new":
      galleryOnPage.category = "new galleries";
      galleryOnPage.startFromPage = 0;
      galleryOnPage.currentPage = 1;
      break;
    case "popular":
      galleryOnPage.category = "popular galleries";
      galleryOnPage.startFromPage = 5;
      galleryOnPage.currentPage = 1;
      break;
    case "hiRes":
      galleryOnPage.category = "high resolution galleries";
      galleryOnPage.startFromPage = 10;
      galleryOnPage.currentPage = 1;
      break;
    default:
      galleryOnPage.category = "unknown galleries";
      galleryOnPage.startFromPage = 1;
      galleryOnPage.currentPage = 1;
  }
}
switchCategory();

async function fetchGalleries(): Promise<void> {
  await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${
      galleryOnPage.currentPage + galleryOnPage.startFromPage
    }&_limit=${imagesOnPage.value}`
  )
    .then((r) => r.json())
    .then((json) => (galleryOnPage.images = json));
}
fetchGalleries();
//для имитации "разных" галерей используется переменная galleryStartPage. Данные на сервере представляют из себя единый поток (5к картинок), разделение на галереи нет. Поэтому  введена переменная для имитации.

watch(
  () => route.params.category,
  () => {
    switchCategory();
    fetchGalleries();
  }
);

watch(
  () => galleryOnPage.currentPage,
  () => fetchGalleries()
);

watch(imagesOnPage, () => fetchGalleries());
</script>
