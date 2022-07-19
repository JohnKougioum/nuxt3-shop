import { defineNuxtPlugin } from "#app";
import Skeleton from "primevue/skeleton";
import PrimeVue from "primevue/config";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Skeleton", Skeleton);
});
