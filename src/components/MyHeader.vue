<template>
  <v-app-bar prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
    <v-toolbar-title>{{ $route.meta.titleRus }}</v-toolbar-title>
    <v-spacer />
    <v-btn icon>
      <v-icon
        variant="text"
        @click="
          dialog = true;
        "
        >mdi-account</v-icon
      >
    </v-btn>
  </v-app-bar>
  <my-header-navigation v-model="drawer" />
  <v-dialog v-model="dialog">
    <my-dialog-auth />
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, type Ref } from "vue";
import MyHeaderNavigation from "@/components/MyHeaderNavigation.vue";
import MyDialogAuth from "@/components/MyDialogAuth.vue";

const drawer: Ref<boolean> = ref(false);
const dialog: Ref<boolean> = ref(false);
</script>
