<template>
  <v-app>
    <my-header> </my-header>
    <v-main> 
      <router-view>

      </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts" >
import MyHeader from '@/components/MyHeader.vue';
export default {
    name: "App",
    methods: {},
    components: { MyHeader }
};

</script>
