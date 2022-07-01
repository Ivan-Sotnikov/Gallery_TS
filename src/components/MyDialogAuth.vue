<template>
  <div>
    <v-card max-width="500">
      <v-card-item v-if="isNewUser">
        <v-card-title>Registration form</v-card-title>
        <v-card-subtitle class="mb-10"
          >Enter below your credentials:
        </v-card-subtitle>

        <v-form
          class="w-75 ma-auto"
          ref="form"
          v-model="isValid"
          lazy-validation
        >
          <v-text-field
            type="text"
            v-model="userNewName"
            name="User Name"
            label="Name"
            prepend-icon="mdi-account"
            density="comfortable"
            variant="underlined"
            required
            clearable
            color="blue"
          />
          <v-text-field
            autofocus
            type="text"
            v-model="userNewEmail"
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
            autofocus
            v-model="userNewPassword"
            name="User Password"
            label="Password"
            prepend-icon="mdi-key"
            density="comfortable"
            variant="underlined"
            required
            clearable
            color="blue"
            autocomplete="on"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
        <v-card-actions>
          <v-btn @click="userRegister" color="blue">Register</v-btn>
          <v-btn @click="isNewUser = false">Allready have account?</v-btn>
        </v-card-actions>
      </v-card-item>
      <v-card-item v-else>
        <v-card-title>Login</v-card-title>
        <v-card-subtitle>Enter your email and password</v-card-subtitle>

        <v-form
          class="w-75 ma-auto"
          ref="form"
          v-model="isValid"
          lazy-validation
        >
          <v-text-field
            type="text"
            v-model="userExistingEmail"
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
            autofocus
            v-model="userExistingPassword"
            name="User Password"
            label="Password"
            prepend-icon="mdi-key"
            density="comfortable"
            variant="underlined"
            required
            clearable
            color="blue"
            autocomplete="on"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
        <v-card-actions>
          <v-btn @click="userLogIn" color="blue">Log In</v-btn>
          <v-btn @click="isNewUser = true">Not registered?</v-btn>
        </v-card-actions>
      </v-card-item>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from "vue";
let showPassword = ref<boolean>(false);
let userNewName = ref<string>("");
let userNewEmail = ref<string>("");
let userNewPassword = ref<string>("");
let userExistingEmail = ref<string>("");
let userExistingPassword = ref<string>("");
let isValid = ref<boolean>(true);
let isNewUser: Ref<Boolean> = ref(true);
//здесь присутствует 2 вида задания типа ref с целью проверки работоспособности каждого из способов
//для разных форм авторизации (новый/существующий пользователь) указаны одинаковые переменные для упрощения
function userRegister(): void {
  console.log(
    "user want to register : " + userNewName.value + "+" + userNewEmail.value + "+" + userNewPassword.value
  );

  //функция для отправки данных на сервер и авторизации пользователя
}
function userLogIn(): void {
  console.log(
    "user want to login : " + userExistingEmail.value + "+" + userExistingPassword.value
  );
  //функция для регистрации пользователя
}
</script>
