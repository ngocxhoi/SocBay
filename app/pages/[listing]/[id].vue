<template>
  <NuxtLayout name="detail">
    <div class="h-fit w-full py-8">
      <UCard class="w-full">
        <div class="flex justify-between w-full">
          <div class="flex items-start gap-4">
            <div
              class="rounded-full flex items-center justify-center size-12 p-2"
              :style="{ backgroundColor: bg }"
            >
              <Icon :name="icon" class="size-full" :style="{ color: color }" />
            </div>

            <div class="flex-1 space-y-1">
              <h2 class="text-2xl font-semibold">
                {{ listing?.title }}
                <span><Icon name="lucide:external-link" class="size-6" /></span>
              </h2>
              <div>
                <UBadge variant="soft" color="neutral" size="lg">
                  @<span>{{ listing?.username }}</span> .<span
                    class="capitalize"
                    >{{ listing?.platform }}</span
                  >
                </UBadge>
              </div>
              <div
                v-if="listing?.verified || listing?.monetized"
                class="flex gap-2"
              >
                <UBadge
                  v-if="listing?.verified"
                  variant="soft"
                  color="info"
                  label="Verified"
                  icon="lucide:circle-check"
                />
                <UBadge
                  v-if="listing?.monetized"
                  variant="soft"
                  color="success"
                  label="Monetized"
                  icon="lucide:circle-check"
                />
              </div>
            </div>
          </div>
          <div class="pl-4 flex items-center justify-center">
            <span class="text-2xl font-semibold">{{
              convertToVND(listing?.price)
            }}</span>
          </div>
        </div>
      </UCard>
    </div>

    <div class="size-full py-8 space-y-4">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Ảnh chụp màn hình & Minh chứng</h2>
        </template>

        <UCarousel
          v-slot="{ item }"
          arrows
          :items="items"
          class="w-full max-w-xs mx-auto"
        >
          <NuxtImg :src="item" width="320" height="320" class="rounded-lg" />
        </UCarousel>
      </UCard>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Thông tin tài khoản</h2>
        </template>
        <div class="grid grid-cols-4">
          <div class="flex flex-col items-center gap-1">
            <Icon name="lucide:users" size="24" />
            <span class="text-lg font-semibold">{{
              formatNumber(listing.followers_count)
            }}</span>
            <span class="text-sm">Followers</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <Icon name="lucide:chart-line" size="24" />
            <span class="text-lg font-semibold"
              >{{ listing.engagement_rate }}%</span
            >
            <span class="text-sm">Engagement</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <Icon name="lucide:eye" size="24" />
            <span class="text-lg font-semibold">{{
              formatNumber(listing.monthly_views)
            }}</span>
            <span class="text-sm">Monthly Views</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <Icon name="lucide:calendar" size="24" />
            <span class="text-lg font-semibold">{{
              formatDate(listing.createdAt)
            }}</span>
            <span class="text-sm">Listed</span>
          </div>
        </div>
      </UCard>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Mô tả</h2>
        </template>
        <p>{{ listing.description }}</p>
      </UCard>

      <UCard class="mb-20">
        <template #header>
          <h2 class="text-xl font-semibold">Thông tin tài khoản</h2>
        </template>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <p class="font-semibold">Niche</p>
            <p class="capitalize">{{ listing.niche }}</p>
          </div>
          <div>
            <p class="font-semibold">Country</p>
            <p class="flex items-center gap-1">
              <Icon name="lucide:map-pin" size="20" /> {{ listing.country }}
            </p>
          </div>
          <div>
            <p class="font-semibold">Audience Age</p>
            <p>{{ listing.age_range }}</p>
          </div>
          <div>
            <p class="font-semibold">Platform Verified</p>
            <p v-if="listing.verified">Yes</p>
            <p v-else>No</p>
          </div>
          <div>
            <p class="font-semibold">Monetized</p>
            <p v-if="listing.monetized">Yes</p>
            <p v-else>Disabled</p>
          </div>
          <div>
            <p class="font-semibold">Status</p>
            <p>{{ formatDate(listing.status) }}</p>
          </div>
        </div>
      </UCard>
    </div>

    <template #seller>
      <UUser
        size="2xl"
        :name="owner.name"
        :description="owner.email"
        :avatar="{
          src: owner.image,
          icon: 'i-lucide-image',
        }"
      />

      <p class="text-gray-500 text-sm my-2">
        Thành viên từ: {{ formatDate(owner.createdAt) }}
      </p>

      <UButton
        block
        label="Liên hệ"
        color="info"
        icon="lucide:mail"
        class="mb-2 cursor-pointer"
        size="lg"
        variant="outline"
        @click="navigateTo('/chat?user=' + owner.id)"
      />
      <UButton
        block
        label="Mua tài khoản"
        color="primary"
        size="lg"
        icon="lucide:shopping-cart"
        class="cursor-pointer"
      />
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { platformIcons, dummyListings } from "~/assets/dummy";
definePageMeta({
  layout: false,
});
useSeoMeta({
  title: "Account",
});

const listing = dummyListings[0]!;
const owner = listing.owner! as User;
const items = computed(() =>
  listing?.images.map((image) => "/" + image + ".jpg")
);
const iconData = platformIcons[listing.platform];

const icon = computed(() => {
  return iconData.icon;
});
const color = computed(() => {
  return iconData.color;
});
const bg = computed(() => {
  return iconData.bg;
});
</script>
