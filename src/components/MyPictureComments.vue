<template>
  <div class="ma-3 text-h6">Comments:</div>
  <div>
    <v-card v-if="localProps.comments?.value.length == 0" class="text-center">
      No comments yet. Be the first!
    </v-card>
    <div v-else>
      <div v-for="item in localProps.comments?.value">
        <v-card>
          <v-card-title>
            <v-avatar icon="mdi-account" />
            <span>{{ item.email }}</span>
          </v-card-title>
          <v-card-text>{{ item.body }}</v-card-text>
          <v-card-actions class="float-right">
            <v-btn @click="userComment.body += ` ${item.email} , `">
              <v-icon>mdi-reply</v-icon>
            </v-btn>
            <v-btn> <v-icon>mdi-heart</v-icon> </v-btn>
          </v-card-actions>
        </v-card>
        <v-divider thickness="2" />
      </div>
    </div>
    <div>
      <v-card>
        <v-card-title class="text-info">Leave your comment:</v-card-title>
        <v-card-text>
          <v-form v-model="isValidComment">
            <v-text-field
              :rules="validationEmailAuth"
              v-model="userComment.email"
              label="Your Email"
              auto-grow
              clearable
              required
            />
            <v-textarea
              :rules="validationCommentImage"
              clearable
              label="Comment"
              v-model="userComment.body"
            />
          </v-form>
          <v-card-actions class="float-right">
            <v-btn @click="leaveComment(userComment)"> Send </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, ref, reactive } from "vue";
import type { UsersComment } from "@/models/types";
import {
  validationCommentImage,
  validationEmailAuth,
} from "@/data/validationRules";

const props = defineProps({
  comments: {
    type: Array<UsersComment>,
    default: () => {
      return [];
    },
  },
});

const localProps = toRefs(props);
const isValidComment = ref<boolean>(false);
const userComment: UsersComment = reactive({
  email: "",
  body: "",
  id: localProps.comments?.value.length,
});

function leaveComment(comment: UsersComment): void {
  if (!isValidComment.value) return;
  localProps.comments?.value.push({ ...comment, id: ++userComment.id });
  (userComment.body = ""), (userComment.email = "");
  return;
}
</script>
