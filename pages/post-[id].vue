<script setup>
const route = useRoute();

const {
  data: product,
  pending,
  refresh,
} = await useFetch(`https://fakestoreapi.com/products/${route.params.id}`);

refresh();
</script>

<template>
  <div>
    <NuxtLink to="/">
      <h1 class="m-4 hover:underline">Back to Home</h1>
    </NuxtLink>
    <div v-if="pending" id="skeleton" class="m-10">
      <CardSkeleton />
    </div>
    <div v-else>
      <Head>
        <Title>{{ product.title }}</Title>
        <Meta name="description" :content="product.description" />
      </Head>
      <div class="m-10">
        <ItemTitle :title="product.title" :category="product.category" />
        <div class="flex flex-row">
          <img class="w-64" :src="product.image" alt="" />
          <div class="mx-20 my-10 w-3/5 flex flex-col justify-between">
            <p>{{ product.description }}</p>

            <span class="text-end text-xl font-medium"
              >{{ product.price }} €</span
            >
          </div>
        </div>
      </div>

      <client-only>
        <Test />
      </client-only>
    </div>
  </div>
</template>
