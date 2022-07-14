<template>
  <div>
    <v-card width="350">
      <transition name="fade" mode="out-in">
        <my-dialog-new-user @register="loginFakeError" v-if="isNewUser" />
        <my-dialog-existing-user @logIn="loginFakeError" v-else />
      </transition>

      <v-btn class="mx-auto" @click="isNewUser = !isNewUser">
        {{ isNewUser ? "I have an account" : "I don't have an account" }}
      </v-btn>
      <transition name="fade" mode="out-in">
        <v-alert type="error" closable v-model="isAlertVisible" class="ma-5">
          Oops, something goes wrong! <br />Try again later.
        </v-alert>
      </transition>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import MyDialogExistingUser from "@/components/MyDialogExistingUser.vue";
import MyDialogNewUser from "@/components/MyDialogNewUser.vue";
import type { RegForm, AuthForm } from "@/models/types";

const isNewUser = ref<boolean>(true);
const isAlertVisible = ref<boolean>(false);

function loginFakeError(user: RegForm | AuthForm) {
  console.log(user);
  isAlertVisible.value = true;
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.test {
  transition: all 5s;
}
</style>
