<template>
  <div class="p-10 grid grid-cols-5 gap-4">
    <UCard class="h-fit">
      <h3>Account</h3>
      <div class="w-full flex items-center justify-between">
        <h1 class="text-xl font-bold">5</h1>
        <Icon name="i-lucide-chart-line" size="24" />
      </div>
    </UCard>
    <UCard class="h-fit">
      <h3>Tổng doanh thu</h3>
      <div class="w-full flex items-center justify-between">
        <h1 class="text-xl font-bold">{{ convertToVND(70000) }}</h1>
        <Icon name="i-lucide-circle-dollar-sign" size="24" />
      </div>
    </UCard>
    <UCard class="h-fit">
      <h3>Account hoạt động</h3>
      <div class="w-full flex items-center justify-between">
        <h1 class="text-xl font-bold">3</h1>
        <Icon name="i-lucide-chart-bar" size="24" />
      </div>
    </UCard>
    <UCard class="h-fit">
      <h3>Tổng số người dùng</h3>
      <div class="w-full flex items-center justify-between">
        <h1 class="text-xl font-bold">7</h1>
        <Icon name="i-lucide-users" size="24" />
      </div>
    </UCard>

    <UCard class="col-span-5">
      <template #header>
        <h3 class="px-4 text-lg font-semibold">Hoạt động gần đây</h3>
      </template>
      <UTable sticky :data="data" class="flex-1 max-h-full" />
    </UCard>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "admin",
});

const data = ref([
  {
    id: "4600",
    date: "2024-03-11T15:30:00",
    status: "paid",
    email: "james.anderson@example.com",
    amount: 594,
  },
  {
    id: "4599",
    date: "2024-03-11T10:10:00",
    status: "failed",
    email: "mia.white@example.com",
    amount: 276,
  },
  {
    id: "4598",
    date: "2024-03-11T08:50:00",
    status: "refunded",
    email: "william.brown@example.com",
    amount: 315,
  },
  {
    id: "4597",
    date: "2024-03-10T19:45:00",
    status: "paid",
    email: "emma.davis@example.com",
    amount: 529,
  },
  {
    id: "4596",
    date: "2024-03-10T15:55:00",
    status: "paid",
    email: "ethan.harris@example.com",
    amount: 639,
  },
  {
    id: "4595",
    date: "2024-03-10T15:55:00",
    status: "paid",
    email: "ethan.harris@example.com",
    amount: 639,
  },
  {
    id: "4594",
    date: "2024-03-10T15:55:00",
    status: "paid",
    email: "ethan.harris@example.com",
    amount: 639,
  },
]);
</script>
