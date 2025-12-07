<template>
  <div class="mt-10 mb-8 w-full">
    <div class="flex items-center justify-between w-full">
      <div>
        <h1 class="text-3xl font-bold mb-2">Danh sách sản phẩm</h1>
        <p class="text-gray-600">Danh sách các sản phẩm bạn đã đăng</p>
      </div>

      <UButton
        @click="navigateTo('/create-listing')"
        icon="lucide:plus"
        size="lg"
        color="primary"
        label="Thêm sản phẩm"
      />
    </div>

    <div
      class="py-8 w-full grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
    >
      <UCard>
        <p>Tổng sản phẩm</p>
        <div class="flex items-center justify-between">
          <p class="text-2xl font-bold">5</p>
          <div
            class="rounded-full flex items-center justify-center size-10 p-2 bg-blue-400/80"
          >
            <Icon name="lucide:eye" class="size-full" />
          </div>
        </div>
      </UCard>
      <UCard>
        <p>Danh sách sản phẩm đã hoạt động</p>
        <div class="flex items-center justify-between">
          <p class="text-2xl font-bold">3</p>
          <div
            class="rounded-full flex items-center justify-center size-10 p-2 bg-green-400/80"
          >
            <Icon name="lucide:circle-check" class="size-full" />
          </div>
        </div>
      </UCard>
      <UCard>
        <p>Đã bán</p>
        <div class="flex items-center justify-between">
          <p class="text-2xl font-bold">1</p>
          <div
            class="rounded-full flex items-center justify-center size-10 p-2 bg-blue-400/80"
          >
            <Icon name="lucide:check" class="size-full" />
          </div>
        </div>
      </UCard>
      <UCard>
        <p>Tổng doanh thu</p>
        <div class="flex items-center justify-between">
          <p class="text-2xl font-bold">{{ convertToVND(10000000) }}</p>
          <div
            class="rounded-full flex items-center justify-center size-10 p-2 bg-yellow-400/80"
          >
            <Icon name="lucide:dollar-sign" class="size-full" />
          </div>
        </div>
      </UCard>
    </div>

    <UTabs
      :items="items"
      variant="link"
      color="neutral"
      :ui="{ trigger: 'grow' }"
      class="gap-4 w-full"
    >
      <template #list>
        <div
          class="py-8 w-full grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          <OwnCard v-for="listing in dummyListings" :listing="listing" />
        </div>
      </template>

      <template #saved>
        <div
          class="py-8 w-full grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          <Card v-for="listing in dummyListings" :listing="listing" />
        </div>
      </template>
    </UTabs>
  </div>
</template>

<script lang="ts" setup>
import { dummyListings } from "~/assets/dummy";
import type { TabsItem } from "@nuxt/ui";

const items = ref<TabsItem[]>([
  {
    label: "Danh sách",
    icon: "i-lucide-list",
    slot: "list",
  },
  {
    label: "Đã lưu",
    icon: "i-lucide-star",
    slot: "saved",
  },
]);
</script>
