<template>
  <div
    class="relative overflow-hidden shadow hover:shadow-xl transition-all border border-gray-500/20 flex flex-col items-center w-full rounded-lg bg-white dark:bg-slate-900"
    :class="`shadow-[${color}]`"
    v-if="listing"
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
          <p class="my-1">{{ nameToTag(listing.owner?.name) }}</p>
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

      <h1 class="text-2xl font-bold">
        {{ convertToVND(listing.price) }}
      </h1>
    </div>

    <div class="w-full mt-6 mb-4 px-4">
      <UCollapsible v-model:open="isShowDetail" class="flex flex-col gap-2">
        <UButton
          :label="isShowDetail ? 'Thu gọn' : 'Xem chi tiết'"
          color="neutral"
          variant="subtle"
          :icon="isShowDetail ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
          block
          class="w-48 ml-auto"
        />

        <template #content>
          <UFormField label="Email">
            <UInput
              class="w-full"
              :default-value="order.credential.originalCredential[0].value"
              :type="show.email ? 'text' : 'password'"
            >
              <template #trailing>
                <UButton
                  color="neutral"
                  variant="link"
                  :icon="show.email ? 'i-lucide-eye' : 'i-lucide-eye-off'"
                  @click="show.email = !show.email"
                />
              </template>
            </UInput>
          </UFormField>
          <UFormField label="Mật khẩu" class="mt-2">
            <UInput
              class="w-full"
              :type="show.pass ? 'text' : 'password'"
              :default-value="order.credential.originalCredential[1].value"
            >
              <template #trailing>
                <UButton
                  color="neutral"
                  variant="link"
                  :icon="show.pass ? 'i-lucide-eye' : 'i-lucide-eye-off'"
                  @click="show.pass = !show.pass"
                />
              </template>
            </UInput>
          </UFormField>
        </template>
      </UCollapsible>
      <p class="text-sm mt-1 text-right">
        Taì khoản đăng lúc {{ formatDate(listing.createdAt) }}
      </p>
    </div>

    <div class="w-full h-3 -bottom-5" :style="{ backgroundColor: color }" />
  </div>
</template>

<script lang="ts" setup>
import { platformIcons } from "~/assets/dummy";

const props = defineProps<{ order: Order }>();
const { order } = toRefs(props);

const isShowDetail = ref(false);
const show = ref({
  email: false,
  pass: false,
});

const listing = computed(() => {
  return order.value.listing;
});

const icon = computed(() => {
  return platformIcons[listing.value!.platform].icon;
});
const color = computed(() => {
  return platformIcons[listing.value!.platform].color;
});
const bg = computed(() => {
  return platformIcons[listing.value!.platform].bg;
});
const status = computed(() => {
  return listing.value!.status;
});
</script>

<style></style>
