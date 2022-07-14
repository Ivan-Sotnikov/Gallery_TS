<template>
  <v-app-bar prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
    <v-toolbar-title>{{ $route.meta.titleRus }}</v-toolbar-title>

    <template v-slot:append>
      <v-btn icon>
        <v-icon variant="text" @click="toogleTheme">
          {{
            theme.global.current.value.dark
              ? "mdi-moon-waxing-crescent"
              : "mdi-weather-sunny"
          }}
        </v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon variant="text" @click="dialog = true" icon="mdi-account" />
      </v-btn>
    </template>
  </v-app-bar>
  <my-header-navigation v-model="drawer" />
  <v-dialog v-model="dialog">
    <my-dialog-auth />
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";
import MyHeaderNavigation from "@/components/MyHeaderNavigation.vue";
import MyDialogAuth from "@/components/MyDialogAuth.vue";
import { useTheme } from "vuetify/lib/framework.mjs";

const theme = useTheme();
const drawer = ref<boolean>(false);
const dialog = ref<boolean>(false);

function toogleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>
