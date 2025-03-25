<script setup>
import { useForm } from "@inertiajs/vue3";
import TextInput from "../../components/TextInput.vue";

const form = useForm({
  email: null,
  password: null,
  remember: null,
});

const submit = () => {
  form.post(route("login"), {
    onError: () => form.reset("password", "remember"),
  });
};
</script>

<template>
  <Head titlt="Login" />
  <h1>Login</h1>
  <form @submit.prevent="submit">
    <TextInput name="email" v-model="form.email" :message="form.errors.email" />
    <TextInput
      name="password"
      v-model="form.password"
      type="password"
      :message="form.errors.password"
    />

    <div>
      <label for="remember">Remember me</label>
      <input type="checkbox" v-model="form.remember" />
    </div>

    <div class="mb-3">
      <p>
        Don't have an account? <Link :href="route('register')">Register</Link>
      </p>
    </div>

    <button type="submit" class="border">
      {{ form.processing ? "loading.." : "Login" }}
    </button>
  </form>
</template>