<template>
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
  <v-container class="w-100">
    <v-row>
      <template v-for="item in props.galleyImages">
        <v-col cols="12" md="3">
          <v-hover v-slot="{ isHovering, props }">
            <v-card v-bind="props">
              <v-card-title
                :class="{ 'text-info': isHovering }"
                class="text-center text-uppercase"
              >
                {{ item.title.split(" ", 1).join(" ") }}
              </v-card-title>
              <v-img
                :src="item.thumbnailUrl"
                :class="{ imageHover: !isHovering }"
              >
                <transition>
                  <div
                    v-if="isHovering"
                    class="d-flex flex-column align-center justify-end h-100"
                  >
                    <v-btn
                      class="mb-4"
                      icon="mdi-magnify"
                      variant="outlined"
                      @click="
                        $router.push({
                          name: 'PicturesPage',
                          params: {
                            category: `${$route.params.category}`,
                            id: `${item.id}`,
                          },
                        })
                      "
                    />
                    <div
                      class="text-center h-25 px-3 bg-grey-darken-3 w-100 text-uppercase"
                    >
                      {{ item.title }}
                    </div>
                  </div>
                </transition>
              </v-img>
            </v-card>
          </v-hover>
          <v-card-text class="text-right">
            {{ Math.round(Math.random() * 1000) }}
            <v-icon @click="alert = true" icon="mdi-heart-outline" />
          </v-card-text>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ImageFetch } from "@/models/types";

const props = defineProps({
  galleyImages: {
    type: Array<ImageFetch>,
    default: () => {
      return [];
    },
    required: true,
  },
});

const alert = ref<boolean>(false);
</script>
<style scoped>
.imageHover {
  opacity: 0.8;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
