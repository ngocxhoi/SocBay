<template>
  <UPage>
    <UPageHero
      headline="Mua bán tài khoản"
      description="Mua bán tài khoản Facebook, Instagram, Tiktok, Youtube, Twitter, và nhiều hơn nữa."
    >
      <template #title>
        <h1>
          <p>Mua & bán tài</p>
          <p class="text-blue-500">
            khoản mạng xã hội <span class="text-primary">Online</span>
          </p>
        </h1>
      </template>

      <template #footer>
        <div class="w-1/2 h-12 rounded px-4 border mx-auto flex items-center">
          <input
            type="text"
            class="size-full focus:outline-none text-lg"
            placeholder="Tìm kiếm tài khoản bạn muốn"
          />
          <UButton label="Tìm kiếm" size="xl" />
        </div>
      </template>
    </UPageHero>

    <UPageLogos
      title="Trusted by the best Social Media teams"
      marquee
      :items="[
        'i-simple-icons-github',
        'i-simple-icons-discord',
        'i-simple-icons-x',
        'i-simple-icons-instagram',
        'i-simple-icons-linkedin',
        'i-simple-icons-facebook',
      ]"
    />

    <AppPricing class="my-20" />

    <AppCTA class="mb-20" />
  </UPage>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Home",
});
</script>
