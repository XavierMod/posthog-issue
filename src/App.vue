<script setup lang="ts">
import posthog from "posthog-js";
import { onMounted, ref } from "vue";

const isRendered = ref(false);

onMounted(async () => {
  posthog.onFeatureFlags(() => {
    // This callback does not work for posthog versions above 1.2.
    isRendered.value = true;
  });
});
</script>

<template>
  {{ isRendered }}
</template>
