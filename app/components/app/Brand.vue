<template>
  <NuxtLink to="/" class="flex items-center gap-1">
    <UButton color="neutral" variant="outline">
      <p class="text-xl font-bold text-primary-foreground">
        <span class="text-primary">S</span>
        <span>B</span>
      </p>
    </UButton>
    <p v-if="!collapsed" class="text-3xl font-bold">
      <span class="text-primary">Soc</span>
      <span>Bay</span>
    </p>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{ collapsed?: boolean }>();
</script>

<style></style>
