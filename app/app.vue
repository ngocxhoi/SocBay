<template>
  <UApp>
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
useHead({
  titleTemplate: (titleChunk: string | undefined): any => {
    return titleChunk ? `${titleChunk} | ${appConfig.title}` : appConfig.title;
  },
});
</script>
