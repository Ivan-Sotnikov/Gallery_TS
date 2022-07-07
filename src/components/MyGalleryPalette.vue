<template>
  <div>
    <v-alert
      closable
      type="info"
      title="You are not authorized!"
      text="Please log in to like or subscribe."
      height="140"
      prominent
      v-model="alert"
      toggle
    >
    </v-alert>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in props.galleyImages"
          :key="card.id"
          cols="12"
          md="4"
          lg="2"
        >
          <v-card v-bind="props">
            <v-card-title>{{
              card.title.split(" ", 1).join(" ").toUpperCase()
            }}</v-card-title>
            <v-card-subtitle>{{
              card.title.split(" ", 3).join(" ").toUpperCase()
            }}</v-card-subtitle>
            <v-hover v-slot="{ isHovering, props }">
              <v-img
                :src="card.thumbnailUrl"
                v-bind="props"
                :class="{'imageHover':!isHovering}"
              ></v-img>
              <div v-if="isHovering" > hello</div>
            </v-hover>
            <v-card-text class="text-right">
              {{ Math.round(Math.random() * 1000) }}
              <v-icon @click="like">mdi-heart-outline</v-icon></v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { functionTypeAnnotation } from "@babel/types";
import { ref, watch } from "vue";

const props = defineProps(["galleyImages"]);
const alert = ref(false);

function like() {
  alert.value = true;
}
</script>
<style scoped>
.imageHover{
  opacity: .8;
}
</style>
