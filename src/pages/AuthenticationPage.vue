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
        v-model="form.password"
        label="Пароль"
        lazy-rules
        type="password"
        :rules="[required]"
      />
      <q-btn style="margin: 0 auto; display: block;" label="Войти" type="submit"/>
  </q-form>
</template>

<script setup>
import { ref } from "vue"
import useValidators from "src/use/validators"

const { required } = useValidators();

const form = ref({
  email: '',
  password: ''
})

const Submit = () => {
  console.log(form.value)
}

</script>

<style lang="scss" scoped></style>
