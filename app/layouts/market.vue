<template>
  <UContainer>
    <AppNavbar />

    <UDashboardNavbar title="Quay lại trang chủ" class="px-0!">
      <template #toggle>
        <UButton
          @click="router.replace('/')"
          variant="link"
          icon="i-lucide-arrow-left"
          class="cursor-pointer"
        />
      </template>

      <template #right>
        <div class="lg:hidden">
          <UButton variant="link" label="Lọc" icon="i-lucide-filter" />
        </div>
      </template>
    </UDashboardNavbar>

    <UMain>
      <UPage
        :ui="{
          root: 'flex flex-col lg:grid lg:grid-cols-12 lg:gap-0 relative h-fit',
          left: 'lg:col-span-3',
          center: 'lg:col-span-9',
        }"
      >
        <template #left>
          <UPageAside class="sticky top-80">
            <UCard class="shadow">
              <template #header>
                <div class="flex item-center justify-between">
                  <UButton variant="link" icon="i-lucide-filter" label="Lọc" />
                  <UTooltip title="Clear filter">
                    <UButton
                      @click="clearFilter()"
                      variant="link"
                      icon="i-lucide-x"
                    />
                  </UTooltip>
                </div>
              </template>

              <slot name="aside" />
            </UCard>
          </UPageAside>
        </template>

        <slot />
      </UPage>
    </UMain>

    <AppFooter />
  </UContainer>
</template>

<script lang="ts" setup>
const router = useRouter();

const { clearFilter } = useFilter();
</script>
