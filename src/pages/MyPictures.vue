<template>
  <div>Gallery</div>
  <my-pictures-palette :images="images" />
  <div v-intersect="fetchImages"></div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import MyPicturesPalette from "@/components/MyPicturesPalette.vue";
import type { ImageFetch } from "@/models/types";

const imagePage = ref<number>(50);
let images = ref<ImageFetch[]>([]);

async function fetchImages(): Promise<void> {
  await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${++imagePage.value}
      &_limit=10`
  )
    .then((r) => r.json())
    .then((json) => (images.value = images.value.concat(json)));
}
fetchImages();
</script>
