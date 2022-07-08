<template>
  <div>
    Gallery {{}}
  </div>
  <my-pictures-palette :images="images"></my-pictures-palette>
  <div v-intersect="fetchImages" ></div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import MyPicturesPalette from '@/components/MyPicturesPalette.vue'

const imagePage=ref<number>(50)
let images=ref([])


async function fetchImages() {
  imagePage.value++
  await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${imagePage.value}
      &_limit=10`
  )
    .then((r) => r.json())
    .then((json) => images.value = images.value.concat(json))
  
}
onMounted(()=>fetchImages())

</script>
