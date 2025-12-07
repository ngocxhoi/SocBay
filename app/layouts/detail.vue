<template>
  <UContainer>
    <AppNavbar />

    <UDashboardNavbar title="Quay lại chợ trang trước" class="px-0!">
      <template #toggle>
        <UButton
          @click="router.replace('/marketplace')"
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
          right: 'lg:col-span-3',
          center: 'lg:col-span-7',
        }"
      >
        <slot />

        <template #right>
          <UPageAside class="sticky top-80">
            <UCard class="shadow">
              <template #header>
                <h2 class="">Thong tin người bán</h2>
              </template>

              <slot name="seller" />
            </UCard>
          </UPageAside>
        </template>
      </UPage>
    </UMain>

    <AppFooter />
  </UContainer>
</template>

<script lang="ts" setup>
const router = useRouter();

const { clearFilter } = useFilter();
</script>
