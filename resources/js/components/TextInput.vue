<script setup>
const model = defineModel({
  type: null,
  required: true,
});

defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  message: String,
});
</script>

<template>
  <div class="mb-3">
    <label>{{ name }}</label>
    <input
      :type="type"
      class="border"
      v-model="model"
      :class="message ? 'ring !ring-red-500' : ''"
    />
    <small class="error" v-if="message">{{ message }}</small>
  </div>
</template>