<template>
  <v-btn
    variant="text"
    class="text-h4 text-decoration-underline mt-10 mb-5"
    @click="
      router.push({
        name: 'GalleriesPage',
        params: { category: props.galleryCategoryUrl },
      })
    "
  >
    {{ props.carouselName }}
  </v-btn>
  <v-carousel
    progress
    hide-delimiter-background
    hide-delimiters
    v-model="slideNumber"
  >
    <v-carousel-item v-for="item in props.carouselPreviews" :key="item.id">
      <v-card>
        <v-card-title class="text-center">
          {{ item.title.split(" ", 2).join(" ").toUpperCase() }}
        </v-card-title>
        <v-img :src="item.thumbnailUrl" />
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
import router from "@/pages/router";
import { ref } from "vue";

const props = defineProps([
  "galleryCategoryUrl",
  "carouselName",
  "carouselPreviews",
]);
const slideNumber = ref<number>(0);
</script>
