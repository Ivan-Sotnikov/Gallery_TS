<template>
  <v-container>
    <div class="text-h2 text-center ma-10">Hello!</div>
    <div class="text-h5 text-center ma-10">
      We have a few gallerias for you...
    </div>
    <div class="my-10" v-for="(item, id) in homePageCaorusel" :key="id">
      <my-carousel-gallery v-bind="item" />
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import MyCarouselGallery from "@/components/MyCarouselGallery.vue";
import homePageCaorusel from "@/data/homePageCaorusel";
</script>
