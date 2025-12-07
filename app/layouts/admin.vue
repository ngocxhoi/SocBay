<template>
  <UDashboardGroup>
    <UDashboardSidebar
      v-model:collapsed="collapsed"
      :min-size="16"
      :max-size="16"
      :collapsed-size="4"
      collapsible
      resizable
      class="data-[collapsed=true]:[&>div]:mx-auto data-[collapsed=true]:[&>div]:px-0"
    >
      <template #header="{ collapsed }">
        <div class="w-full flex items-end justify-between">
          <AppBrand :collapsed="collapsed" />
        </div>
      </template>

      <template #default="{ collapsed }">
        <UButton
          :label="collapsed ? undefined : 'Search...'"
          icon="i-lucide-search"
          color="neutral"
          variant="outline"
          block
          :square="collapsed"
        >
          <template v-if="!collapsed" #trailing>
            <div class="flex items-center gap-0.5 ms-auto">
              <UKbd value="meta" variant="subtle" />
              <UKbd value="K" variant="subtle" />
            </div>
          </template>
        </UButton>

        <UNavigationMenu
          variant="pill"
          highlight
          :collapsed="collapsed"
          :items="items[0]"
          orientation="vertical"
        />
      </template>
    </UDashboardSidebar>

    <UDashboardPanel>
      <UDashboardNavbar title="Admin Dashboard">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>

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
      </UDashboardNavbar>
      <slot />
    </UDashboardPanel>
  </UDashboardGroup>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[][] = [
  [
    {
      label: "Dashboard",
      icon: "i-lucide-house",
      to: "/admin/dashboard",
    },
    {
      label: "Verify",
      icon: "i-lucide-check",
      to: "/admin/verify",
    },
    {
      label: "Charge",
      icon: "i-lucide-cable",
      to: "/admin/charge",
    },
    {
      label: "Listing",
      icon: "i-lucide-list",
      to: "/admin/listing",
    },
    {
      label: "Transaction",
      icon: "i-lucide-credit-card",
      to: "/admin/transaction",
    },
    {
      label: "Withdraw",
      icon: "i-lucide-credit-card",
      to: "/admin/withdraw",
    },
  ],
];

const collapsed = ref(false);
defineShortcuts({
  c: () => (collapsed.value = !collapsed.value),
});
</script>
