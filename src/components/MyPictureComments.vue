<template>
  <div>Comments:</div>
  <div>
    <div v-for="item in localProps.comments?.value">
      <v-card>
        <v-card-title>
          <v-avatar icon="mdi-account"></v-avatar>
          <span>{{ item.email }}</span>
        </v-card-title>
        <v-card-text>{{ item.body }}</v-card-text>

        <v-card-actions class="float-right">
          <v-btn> <v-icon>mdi-reply</v-icon></v-btn>
          <v-btn> <v-icon>mdi-heart</v-icon></v-btn>
        </v-card-actions>
      </v-card>
      <v-divider thickness="2"></v-divider>
    </div>
    <div>
      <v-card>
        <v-card-title>Leave your comment:</v-card-title>
        <v-card-text>
          <v-form>
            //добавь здесь формы для инпута и текст филд
            //добавь валидацию и кнопки отправки в кард экшн
            //затем нужно пушить в массив с комментами
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps(["comments"]);
const localProps=toRefs(props)

</script>
