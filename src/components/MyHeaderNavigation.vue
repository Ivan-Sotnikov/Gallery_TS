<template>
  <v-navigation-drawer width="300" bottom temporary >
    <v-card width="300" class="mx-auto"> 
    <!-- <v-list nav dense>
      <v-list-item v-for="(item, i) in items">
        <v-list-item
          v-if="item.link"
          :id="i"
          :prepend-icon="item.icon"
          :title="item.header"
          :disabled="item.disabled"
          @click="redirect(item.link, item.linkParam)"
          width="100%"
        >
        </v-list-item>
        <v-list-group v-else color="blue" :id="i">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="item.header"
              :value="item.header"
              :prepend-icon="item.icon"
              :disabled="item.disable"
            >
            </v-list-item>
          </template>
          <v-list-item
            v-for="(subItem, a) in item.subtree"
            :id="a"
            :title="subItem.header"
            :disabled="subItem.disabled"
            @click="redirect(subItem.link, subItem.linkParam)"
            width="100%"
          >
          </v-list-item>
        </v-list-group>
      </v-list-item>
    </v-list> -->
    <v-list v-model:opened="open">
      <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>

      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Users" value="Users"></v-list-item>
        </template>

        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Admin" value="Admin"></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"
          ></v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Actions" value="Users"></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"
          ></v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script lang="ts">
import headerMenu from "@/data/headerMenu";
import { useRouter } from "vue-router";

export default {
  name: "my-header-navigation",

  setup() {
    const router = useRouter();
    const items = headerMenu;
    const redirect = (link:string, linkParam:any) => {
      if (link.indexOf("http") != -1) {
        window.location.href = link;
        return;
      }
      router.push({ name: link, params: linkParam });
    };



  const  open= ['Users']
     const admins= [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ]
    const  cruds= [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ]


    return { items, redirect, open,admins,cruds};
  },
};
</script>
