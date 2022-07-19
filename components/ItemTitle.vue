<script setup lang="ts">
const props = defineProps({
  title: String,
  category: String,
});
</script>

<template>
  <h2 class="mb-4 capitalize text-2xl font-semibold">
    {{ title }}
    <span class="text-sm text-gray-600">/ {{ category }}</span>
  </h2>
</template>
