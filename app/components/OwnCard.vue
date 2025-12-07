<template>
  <div
    class="relative overflow-hidden shadow hover:shadow-xl transition-all border border-gray-500/20 flex flex-col items-center w-full rounded-lg bg-white dark:bg-slate-900"
    :class="`shadow-[${color}]`"
  >
    <div class="flex items-center justify-between w-full p-4">
      <div class="flex items-center justify-between gap-3">
        <div
          class="rounded-full flex items-center justify-center size-12 p-2"
          :style="{ backgroundColor: bg }"
        >
          <Icon :name="icon" class="size-full" :style="{ color: color }" />
        </div>
        <p class="text-lg">{{ listing.title }}</p>
      </div>
    </div>
    <div class="flex flex-col items-center gap-2 w-full p-4 pb-2 rounded-b-lg">
      <div class="flex items-start w-full justify-between pb-4 border-b">
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-1">
            <Icon name="lucide:users" class="size-6 text-gray-300" />
            <h3 class="font-semibold">
              {{ formatNumber(Number(listing.followers_count)) }}
            </h3>
            <p class="text-sm text-gray-500">followers</p>
          </div>
          <div class="flex items-center gap-1">
            <Icon name="lucide:chart-line" class="size-6 text-gray-300" />
            <h3 class="font-semibold">
              {{ formatNumber(Number(listing.engagement_rate)) }}%
            </h3>
            <p class="text-sm text-gray-500">engagement</p>
          </div>
        </div>
        <p
          v-if="status == 'active'"
          class="text-green-600 flex items-center gap-1"
        >
          <Icon name="lucide:circle-check" /> Hoạt động
        </p>
        <p
          v-if="status == 'inactive'"
          class="text-gray-600 flex items-center gap-1"
        >
          <Icon name="lucide:circle-x" /> Không hoạt động
        </p>
        <p v-if="status == 'ban'" class="text-red-600 flex items-center gap-1">
          <Icon name="lucide:circle-x" /> Bị cấm
        </p>
        <p
          v-if="status == 'sold'"
          class="text-yellow-600 flex items-center gap-1"
        >
          <Icon name="lucide:dollar-sign" /> Đã bán
        </p>
        <p
          v-if="status == 'pending'"
          class="text-indigo-600 flex items-center gap-1"
        >
          <Icon name="lucide:clock-3" /> Đợi duyệt
        </p>
      </div>
    </div>

    <div
      class="mt-auto w-full h-full flex items-center justify-between px-4 pb-2"
    >
      <h1 class="text-2xl font-bold">
        {{ convertToVND(listing.price) }}
      </h1>
      <div class="flex gap-2">
        <UButton
          icon="lucide:trash"
          color="neutral"
          variant="outline"
          class="cursor-pointer"
        />
        <UButton
          icon="lucide:edit"
          color="neutral"
          variant="outline"
          class="cursor-pointer"
        />
        <UButton
          icon="lucide:eye"
          color="neutral"
          variant="outline"
          class="cursor-pointer"
        />
      </div>
    </div>

    <div class="w-full h-10 -bottom-5" :style="{ backgroundColor: color }" />
  </div>
</template>

<script lang="ts" setup>
import { platformIcons } from "~/assets/dummy";

const props = defineProps<{ listing: Listing }>();

const icon = computed(() => {
  return platformIcons[props.listing.platform].icon;
});
const color = computed(() => {
  return platformIcons[props.listing.platform].color;
});
const bg = computed(() => {
  return platformIcons[props.listing.platform].bg;
});
const status = computed(() => {
  return props.listing.status;
});
</script>

<style></style>
