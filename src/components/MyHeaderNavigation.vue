<template>
  <v-navigation-drawer width="300" bottom temporary>
    <v-list>
      <template v-for="(item, i) in items" :key="item.key">
        <v-list-item
          v-if="item.link"
          :id="i"
          :prepend-icon="item.icon"
          :title="item.header"
          :disabled="item.isDisable"
          @click="redirect(item)"
          width="100%"
        />
        <v-list-group v-else color="blue" :id="i">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="item.header"
              :value="item.header"
              :prepend-icon="item.icon"
              :disabled="item.isDisable"
            />
          </template>
          <v-list-item
            v-for="(subItem, a) in item.subtree"
            :id="a"
            :title="subItem.header"
            :disabled="subItem.isDisable"
            @click="redirect(subItem)"
            width="100%"
            variant="tonal"
          />
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import headerMenu from "@/data/headerMenu";
import { useRouter } from "vue-router";
import type { HeaderNavButton } from "@/models/types";

const router = useRouter();

const items: Array<HeaderNavButton> = headerMenu;
const redirect = (item: HeaderNavButton): void => {
  if (item.link?.indexOf("http") == 0) {
    window.location.href = item.link || "";
    return;
  }
  router.push({ name: item.link, params: item.linkParam });
};
</script>
