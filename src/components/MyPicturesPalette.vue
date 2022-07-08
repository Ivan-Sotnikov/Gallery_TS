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
  <v-container>
    <v-row>
      <template v-for="item in props.images" :id="item.id">
        <v-col cols="12" md="3">
          <v-hover v-slot="{ isHovering, props }">
            <v-card v-bind="props">
              <v-card-title
                :class="{ 'text-info': isHovering }"
                class="text-center text-uppercase"
                >{{ item.title.split(" ", 1).join(" ") }}</v-card-title
              >
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
                      @click="showDialog(item.url,item.title)"
                    ></v-btn>
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
                <span> {{Math.round(Math.random() * 1000) }}</span>
                <v-icon @click="like">mdi-heart-outline</v-icon></v-card-text
              >
        </v-col>
      </template>
    </v-row>
  </v-container>
  <v-dialog v-model="dialogPicture.dialog">
    <my-picture-dialog v-bind="dialogPicture"></my-picture-dialog>
  </v-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import MyPictureDialog from "@/components/MyPictureDialog.vue";

const props = defineProps(["images"]);
const alert = ref(false);

const dialogPicture=reactive({
  dialog:false,
  url:'',
  title:'',
  comments:[]
})

async function showDialog(url:string,title:string) {
   await fetch(
    `https://jsonplaceholder.typicode.com/comments?_limit=${Math.round(Math.random()*5)}`
  ).then(r=>r.json()).then(json=>dialogPicture.comments=json);
  dialogPicture.dialog=true;
  dialogPicture.url=url;
  dialogPicture.title=title
}

function like() {
  alert.value = true;
}
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
