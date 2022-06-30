<template>
  <v-app-bar prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
    </v-app-bar-nav-icon>
    <v-toolbar-title>{{ $route.meta.titleRus }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon variant="text" @click="dialog = true">mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
  <my-header-navigation v-model="drawer"></my-header-navigation>
  <v-dialog v-model="dialog">
    <my-dialog-auth></my-dialog-auth>
    <my-dialog-picture></my-dialog-picture>s
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import MyHeaderNavigation from "@/components/MyHeaderNavigation.vue";
import MyDialogAuth from "@/components/MyDialogAuth.vue";
import MyDialogPicture from "@/components/MyDialogPicture.vue";

let drawer = ref(false);
let dialog = ref(false);
</script>
