<template>
  <v-app>
    <my-header />
    <v-main>
      <router-view v-slot="{ Component }">
        <suspense>
          <template #default>
            <div>
              <component :is="Component" />
            </div>
          </template>
        </suspense>
      </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import MyHeader from "@/components/MyHeader.vue";
</script>
