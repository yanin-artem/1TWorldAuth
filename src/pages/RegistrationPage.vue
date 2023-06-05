<template>
  <q-form @submit="Submit()" style="width: 60%;margin: 0 auto;">
    <q-input
        filled
        v-model="form.email"
        label="Почта"
        lazy-rules
        type="email"
        :rules="[required]"
      />
      <q-input
        filled
        v-model="form.phone"
        label="Номер телефона"
        lazy-rules
        type="tel"
        mask="+7-###-### ## ##"
        :rules="[required]"
      />
      <q-input
        filled
        v-model="form.last_name"
        label="Фамилия"
        lazy-rules
        type="text"
        :rules="[required]"
      />
      <q-input
        filled
        v-model="form.first_name"
        label="Имя"
        lazy-rules
        type="text"
        :rules="[required]"
      />
      <q-input
        filled
        v-model="form.middle_name"
        label="Отчество"
        lazy-rules
        type="text"
      />
      <q-input
        filled
        v-model="form.password"
        label="Пароль"
        lazy-rules
        type="password"
        :rules="[required, passwordValid]"
      />
      <q-input
        filled
        v-model="form.confirmPassword"
        label="Подтверждение пароля"
        lazy-rules
        type="password"
        :rules="[required, equal(form.password, form.confirmPassword)]"
      />
      <q-btn style="margin: 0 auto; display: block;" label="Регистрация" type="submit"/>
  </q-form>
</template>

<script setup>
import { ref } from "vue"
import useValidators from "src/use/validators"
import { registration } from "src/sdk/registration"
import { useRouter } from "vue-router";

const { required, equal, passwordValid } = useValidators();
const router = useRouter()

const form = ref({
  email: '',
  first_name: '',
  middle_name: '',
  last_name: '',
  phone: '',
  password: '',
  confirmPassword: ''
})

const Submit = () => {
  registration(form.value)
  router.push({ name: "authentication" })
}

</script>

<style lang="scss" scoped></style>
