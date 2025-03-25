<script setup>
import { Link, useForm } from "@inertiajs/vue3";
import TextInput from "../../components/TextInput.vue";

const form = useForm({
  name: null,
  email: null,
  password: null,
  password_confirmation: null,
  avatar: null,
  preview: null,
});

const submit = () => {
  form.post(route("register"), {
    onError: () => form.reset("password", "password_confirmation"),
  });
};

const change = (e) => {
  form.avatar = e.target.files[0];
  form.preview = URL.createObjectURL(e.target.files[0]);
};
</script>

<template>
  <Head titlt="Register" />
  <h1>Register</h1>
  <form @submit.prevent="submit">
    <div>
      <label for="avatar">Avatar</label>
      <input type="file" id="avatar" @input="change" />
      <p>{{ form.errors.avatar }}</p>
      <img
        v-if="form.preview"
        :src="form.preview ? form.preview : 'storage/avatars/default.jpg'"
        alt=""
        class="w-32"
      />
    </div>
    <TextInput name="name" v-model="form.name" :message="form.errors.name" />
    <TextInput name="email" v-model="form.email" :message="form.errors.email" />
    <TextInput
      name="password"
      v-model="form.password"
      type="password"
      :message="form.errors.password"
    />
    <TextInput
      name="password_confirmation"
      v-model="form.password_confirmation"
      type="password"
      :message="form.errors.password_confirmation"
    />

    <div class="mb-3">
      <p>Already a user <Link :href="route('login')">Login</Link></p>
    </div>

    <button type="submit" class="border">
      {{ form.processing ? "loading.." : "Register" }}
    </button>
  </form>
</template>