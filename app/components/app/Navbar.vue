<template>
  <UHeader mode="slideover" class="[&>div]:px-0!">
    <template #title>
      <AppBrand />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <div class="flex gap-4">
        <UColorModeButton />

        <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
          <UButton
            color="neutral"
            variant="ghost"
            to="https://github.com/ngocxhoi"
            target="_blank"
            icon="i-simple-icons-github"
            aria-label="GitHub"
          />
        </UTooltip>

        <UChip :show="false">
          <UButton
            @click="navigateTo('/my-order')"
            icon="lucide:shopping-bag"
            color="neutral"
            variant="ghost"
            class="cursor-pointer"
          />
        </UChip>

        <SignedOut>
          <SignInButton mode="modal">
            <UButton color="neutral">Đăng nhập</UButton>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="[&_ul]:space-y-2"
      />
    </template>
  </UHeader>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Trang chủ",
    to: "/",
    icon: "i-lucide-home",
  },
  {
    label: "Marketplace",
    to: "/marketplace",
    icon: "i-lucide-store",
  },
  {
    label: "Message",
    to: "/chat",
    icon: "i-lucide-message-square",
  },
  {
    label: "My Listings",
    to: "/my-listing",
    icon: "i-lucide-list",
  },
]);
</script>

<style scoped>
a {
  transition: all 0.3s ease;
}

ul:has(a:hover) a:not(:hover) {
  opacity: 0.5;
}
</style>
