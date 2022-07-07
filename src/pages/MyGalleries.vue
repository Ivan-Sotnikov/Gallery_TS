<template>
  <div class="text-center my-10">
    <div class="text-h4">Welcome in {{ galleryCategory }} section.</div>
    <div class="text-h6 mt-5">Choose the gallery...</div>
  </div>
  <my-gallery-palette :galleyImages="galleryImages"></my-gallery-palette>
</template>

<script lang="ts" setup>

import MyGalleryPalette from "@/components/MyGalleryPalette.vue";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

let galleryCategory = ref<string>("");
const galleryImages = ref([]);
const galleryStartPage = ref();
const imagesOnPage = ref(20);
//для имитации "разных" галерей используется переменная galleryStartPage. Данные на сервере представляют из себя единый поток (5к картинок), разделение на галереи нет. Поэтому  введена переменная для имитации.

function switchCategory() {
  switch (route.params.category) {
    case "new":
      galleryCategory.value = "new galleries";
      galleryStartPage.value = 1;
      break;
    case "popular":
      galleryCategory.value = "popular galleries";
      galleryStartPage.value = 6;
      break;
    case "hiRes":
      galleryCategory.value = "high resolution galleries";
      galleryStartPage.value = 11;
      break;
    default:
      galleryCategory.value = "unknown galleries";
      galleryStartPage.value = 1;
  }
  fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${galleryStartPage.value}&_limit=${imagesOnPage.value}`
  )
    .then((r) => r.json())
    .then((json) => (galleryImages.value = json));
}

onMounted(() => switchCategory());
watch(() => route.params.category, switchCategory);
</script>
