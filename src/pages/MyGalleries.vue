<template>
  <div class="text-center my-10">
    <div class="text-h4">Welcome in {{ galleryCategory }} section.</div>
    <div class="text-h6 mt-5">Choose the gallery...</div>
  </div>
  <my-gallery-palette :galleyImages="galleryImages"></my-gallery-palette>
  <v-pagination
    v-model="galleryPage"
    :length="15"
    total-visible="6"
  ></v-pagination>
</template>

<script lang="ts" setup>
import MyGalleryPalette from "@/components/MyGalleryPalette.vue";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const galleryCategory = ref<string>("");
const galleryImages = ref<[]>([]);
const galleryPage = ref(1);
const galleryStartPage = ref(1);
const imagesOnPage = ref(20);
//для имитации "разных" галерей используется переменная galleryStartPage. Данные на сервере представляют из себя единый поток (5к картинок), разделение на галереи нет. Поэтому  введена переменная для имитации.

async function fetchGalleries() {
  await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${
      galleryPage.value + galleryStartPage.value
    }&_limit=${imagesOnPage.value}`
  )
    .then((r) => r.json())
    .then((json) => (galleryImages.value = json));
}

function switchCategory() {
  switch (route.params.category) {
    case "new":
      galleryCategory.value = "new galleries";
      galleryStartPage.value = 1;
      galleryPage.value = 1;
      break;
    case "popular":
      galleryCategory.value = "popular galleries";
      galleryStartPage.value = 6;
      galleryPage.value = 1;
      break;
    case "hiRes":
      galleryCategory.value = "high resolution galleries";
      galleryStartPage.value = 11;
      galleryPage.value = 1;
      break;
    default:
      galleryCategory.value = "unknown galleries";
      galleryStartPage.value = 1;
      galleryPage.value = 1;
  }
}

onMounted(() => {
  switchCategory();
  fetchGalleries();
});
watch(
  () => route.params.category,
  () => {
    switchCategory();
    fetchGalleries();
  }
);
watch(galleryPage, () => fetchGalleries());
</script>
