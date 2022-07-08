<template>
  <v-card class="mx-auto" width="400">
    <v-card-title class="text-uppercase">{{props.title.split(" ", 3).join(" ")}}</v-card-title>
    <v-img class="mx-3" :src="props.url" aspect-ratio="1"></v-img>
    <my-picture-comments :comments="props.comments"></my-picture-comments>
  <v-card-item>
    
  </v-card-item>
    
  </v-card>
</template>

<script lang="ts" setup>
import MyPictureComments from '@/components/MyPictureComments.vue';
const props = defineProps(['comments','url','title'])


</script>