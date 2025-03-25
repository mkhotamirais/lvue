<script setup>
defineProps({
  user: String,
});
</script>

<template>
  <Head title=" | About" />
  <div>about {{ user }}</div>
</template>