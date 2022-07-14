<template>
  <v-card class="mx-auto" width="400">
    <v-card-title class="text-uppercase">
      {{ props.title?.split(" ", 3).join(" ") }}
    </v-card-title>
    <v-img class="mx-3" :src="props.url" aspect-ratio="1" />
    <my-picture-comments :comments="props.comments" />
  </v-card>
</template>

<script lang="ts" setup>
import MyPictureComments from "@/components/MyPictureComments.vue";
import type { UsersComment } from "@/models/types";
const props = defineProps({
  comments: { type: Array<UsersComment>, },
  url: { type: String },
  title: { type: String },
});
</script>
