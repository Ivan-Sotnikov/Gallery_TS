<template>
  <v-card-item>
    <v-card-title>Login</v-card-title>
    <v-card-subtitle>Enter your email and password:</v-card-subtitle>
    <v-form class="mr-5" v-model="isValidForm">
      <v-text-field
        :rules="validationEmailAuth"
        type="text"
        v-model="existingUserCredentials.email"
        name="User Email"
        label="Email"
        prepend-icon="mdi-at"
        density="comfortable"
        variant="underlined"
        required
        clearable
        color="blue"
      />
      <v-text-field
        :rules="validationPasswordAuth"
        :append-inner-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="isShowPassword ? 'text' : 'password'"
        @click:append="isShowPassword = !isShowPassword"
        v-model="existingUserCredentials.password"
        name="User Password"
        label="Password"
        prepend-icon="mdi-key"
        density="comfortable"
        variant="underlined"
        required
        clearable
        color="blue"
        autocomplete="on"
      />
    </v-form>
    <v-card-actions class="d-flex flex-column">
      <v-btn @click="fakeLogIn(existingUserCredentials)" color="blue">
        Log In
      </v-btn>
    </v-card-actions>
  </v-card-item>
</template>

<script setup lang="ts">
import {
  validationEmailAuth,
  validationPasswordAuth,
} from "@/data/validationRules";
import type { AuthForm } from "@/models/types";
import { reactive, ref } from "vue";

const emit = defineEmits<{(emit:'logIn',value:AuthForm):void}>();

const isShowPassword = ref<boolean>(false);
const isValidForm = ref<boolean>(false);

const existingUserCredentials = reactive<AuthForm>({
  email: "",
  password: "",
});

function fakeLogIn(existingUser: AuthForm): void {
  if (!isValidForm.value) return;
  emit("logIn", existingUser);
}
</script>
