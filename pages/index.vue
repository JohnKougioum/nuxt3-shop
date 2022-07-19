<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");

const title = ref("Blog Posts");
const description = ref("Find amazing blog posts because this is a test");

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div
      class="w-2/3 flex flex-row my-4 p-8 rounded-2xl shadow-2xl relative"
      v-for="product in products"
      :key="product.id"
    >
      <NuxtLink :to="`/post-${product.id}`">
        <ItemTitle :title="product.title" :category="product.category" />
        <div class="flex flex-row">
          <img class="w-28" :src="product.image" alt="" />
          <p class="pl-10">{{ product.description }}...</p>
        </div>
        <span class="absolute right-8 font-medium">{{ product.price }} €</span>
      </NuxtLink>
    </div>
  </div>
</template>
