<template>
  <NuxtLayout name="market">
    <template #aside>
      <div class="size-full space-y-4 [&_fieldset]:space-y-2 [&_fieldset]:mt-4">
        <UInput
          size="xl"
          placeholder="Tìm kiếm bằng tên, tag, hoặc mô tả"
          class="w-full [&_input]:w-full"
        />

        <UFormField label="Nền tảng" size="xl">
          <UCheckboxGroup v-model="filters.platform" :items="items" size="lg" />
        </UFormField>

        <UFormField label="Khoảng giá" size="xl">
          <USlider
            v-model="filters.price"
            size="sm"
            class="my-4"
            :min="0"
            :max="1000000"
            :step="10000"
          />
          <div class="w-full flex item-center justify-between text-sm mt-2">
            <span>{{ convertToVND(filters.price[0]) }}</span>
            <span>{{ convertToVND(filters.price[1]) }}</span>
          </div>
        </UFormField>

        <UFormField label="Followers" size="xl">
          <USelect
            v-model="filters.miniumFlower"
            :items="miniumFlower"
            class="mt-6 [&,&_*]:w-full"
            trailing-icon="i-mdi-chevron-don"
          />
        </UFormField>

        <UFormField label="Niche" size="xl">
          <USelectMenu
            aria-placeholder="All Niches"
            multiple
            v-model="filters.niches"
            :items="niches"
            class="mt-6 [&,&_*]:w-full"
            trailing-icon="i-mdi-chevron-don"
          />
        </UFormField>

        <UFormField label="Accounts status" size="xl">
          <UCheckboxGroup v-model="filters.status" :items="status" size="lg" />
        </UFormField>
      </div>
    </template>

    <!-- Main -->
    <div class="size-full py-8 grid lg:grid-cols-2 xl:grid-cols-3 gap-2">
      <Card
        v-for="listing in dummyListings"
        :listing="listing"
        :key="listing.id"
      />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import type { CheckboxGroupItem } from "@nuxt/ui";
import { miniumFlower } from "~/assets/data/minium-flower";
import { niches } from "~/assets/data/niche";
import { platforms } from "~/assets/data/socialmedia";
import { dummyListings } from "~/assets/dummy";

definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Marketplace",
});

const items = computed<CheckboxGroupItem[]>(() =>
  platforms.map((platform) => ({
    label: platform.name,
    value: platform.value,
  }))
);

const status = ref<CheckboxGroupItem[]>([
  {
    label: "Verified accounts only",
    value: "verified-accounts-only",
  },
  {
    label: "Monetized accounts only",
    value: "monetized-accounts-only",
  },
]);

const { filters } = useFilter();
</script>
