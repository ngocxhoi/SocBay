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
        <div>
          <p class="text-lg">{{ listing.title }}</p>
          <p>{{ nameToTag(listing.owner?.name) }}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center gap-2 w-full p-4 pb-2 rounded-b-lg">
      <div class="flex items-center w-full justify-between">
        <div class="flex items-center gap-1">
          <Icon name="lucide:users" class="size-6 text-gray-300" />
          <h3 class="text-2xl font-semibold">
            {{ formatNumber(Number(listing.followers_count)) }}
          </h3>
          <p class="text-sm text-gray-500">followers</p>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="lucide:chart-line" class="size-6 text-gray-300" />
          <h3 class="text-2xl font-semibold">
            {{ formatNumber(Number(listing.engagement_rate)) }}%
          </h3>
          <p class="text-sm text-gray-500">engagement</p>
        </div>
      </div>
      <div class="flex items-center w-full justify-start gap-2 my-4">
        <UBadge variant="soft" size="lg" color="neutral">
          <span class="capitalize">{{ listing.niche }}</span>
        </UBadge>
        <UBadge
          icon="lucide:map-pin"
          :label="listing.country ?? 'Unknown'"
          size="lg"
          variant="subtle"
          color="neutral"
        />
      </div>
      <div class="line-clamp-2 pb-4 border-b">
        {{ listing.description }}
      </div>
    </div>

    <div
      class="mt-auto w-full h-full flex items-center justify-between px-4 pb-2"
    >
      <h1 class="text-2xl font-bold">
        {{ convertToVND(listing.price) }}
      </h1>
      <UButton
        @click="navigateTo(`/${listing.platform}/${listing.id}`)"
        size="xl"
        variant="solid"
        label="Xem thêm"
      />
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
</script>

<style></style>
