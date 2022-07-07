<template>
  <div>
    <v-card width="350">
      <transition name="fade" mode="out-in">
        <v-card-item v-if="isNewUser">
          <v-card-title>Registration form</v-card-title>
          <v-card-subtitle class="mb-10"
            >Enter below your credentials:
          </v-card-subtitle>
          <v-alert
            type="error"
            closable
            v-model="isAlertVisible"
            class="mb-5"
          >
            Oops, something goes wrong! <br />Try again later.</v-alert
          >
          <v-form class="mr-5" ref="form" v-model="isValid" lazy-validation>
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
              :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append-inner="showPassword = !showPassword"
            />
          </v-form>
          <v-card-actions class="d-flex flex-column">
            <v-btn class="pa-0" @click="userRegister" color="blue"
              >Register</v-btn
            >
            <v-btn @click="isNewUser = false">Allready have account?</v-btn>
          </v-card-actions>
        </v-card-item>
        <v-card-item v-else>
          <v-card-title>Login</v-card-title>
          <v-card-subtitle>Enter your email and password:</v-card-subtitle>
          <v-alert
            type="error"
            closable
            :model="isAlertVisible"
            class="mb-5"
          >
            Oops, something goes wrong! <br />Try again later.</v-alert
          >
          <v-form class="mr-5" ref="form" v-model="isValid" lazy-validation>
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
              :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            />
          </v-form>
          <v-card-actions class="d-flex flex-column">
            <v-btn @click="userLogIn" color="blue">Log In</v-btn>
            <v-btn @click="isNewUser = true">Not registered?</v-btn>
          </v-card-actions>
        </v-card-item>
      </transition>
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
let isNewUser: Ref<boolean> = ref(true);
let isAlertVisible: Ref<boolean> = ref(false);
//здесь присутствует 2 вида задания типа ref с целью проверки работоспособности каждого из способов
function userRegister(): void {
  console.log(
    "user want to register : " +
      userNewName.value +
      "+" +
      userNewEmail.value +
      "+" +
      userNewPassword.value
  );
  isAlertVisible.value = true;

  //функция для отправки данных на сервер и авторизации пользователя
}
function userLogIn(): void {
  console.log(
    "user want to login : " +
      userExistingEmail.value +
      "+" +
      userExistingPassword.value
  );
  isAlertVisible.value = true;
  //функция для регистрации пользователя
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
