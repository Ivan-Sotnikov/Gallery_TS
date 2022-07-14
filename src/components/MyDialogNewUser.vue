<template>
  <v-card-item>
    <v-card-title>Registration form</v-card-title>
    <v-card-subtitle class="mb-10"
      >Enter below your credentials:
    </v-card-subtitle>

    <v-form class="mr-5" v-model="isValidForm">
      <v-text-field
        type="text"
        v-model="newUserCredenitans.name"
        name="User Name"
        label="Name"
        prepend-icon="mdi-account"
        density="comfortable"
        variant="underlined"
        required
        clearable
        color="blue"
        :rules="validationNameAuth"
      />
      <v-text-field
        type="text"
        v-model="newUserCredenitans.email"
        name="User Email"
        label="Email"
        prepend-icon="mdi-at"
        density="comfortable"
        variant="underlined"
        required
        clearable
        color="blue"
        :rules="validationEmailAuth"
      />
      <v-text-field
        v-model="newUserCredenitans.password"
        name="User Password"
        label="Password"
        prepend-icon="mdi-key"
        density="comfortable"
        variant="underlined"
        required
        clearable
        color="blue"
        autocomplete="on"
        :rules="validationPasswordAuth"
        :append-inner-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="isShowPassword ? 'text' : 'password'"
        @click:append-inner="isShowPassword = !isShowPassword"
      />
    </v-form>
    <v-card-actions class="d-flex flex-column">
      <v-btn
        class="pa-0"
        @click="fakeRegister(newUserCredenitans)"
        color="blue"
      >
        Register
      </v-btn>
    </v-card-actions>
  </v-card-item>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { RegForm } from "@/models/types";
import {
  validationNameAuth,
  validationEmailAuth,
  validationPasswordAuth,
} from "@/data/validationRules";

const emit = defineEmits<{ (emit: "register", value: RegForm): void }>();

const isShowPassword = ref<boolean>(false);
const isValidForm = ref<boolean>(false);

const newUserCredenitans = reactive<RegForm>({
  name: "",
  email: "",
  password: "",
});
function fakeRegister(newUser: RegForm): void {
  if (!isValidForm.value) {
    return;
  }
  emit("register", newUser);
}
</script>
