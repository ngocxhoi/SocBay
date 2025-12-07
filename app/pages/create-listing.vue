<template>
  <div class="max-w-2xl mx-auto mt-10 mb-8">
    <div>
      <h1 class="text-3xl font-bold mb-2">Taoj sản phẩm</h1>
      <p class="text-gray-600">Danh sách các sản phẩm bạn đã đăng</p>
    </div>

    <UForm class="mt-4 mb-20 space-y-4">
      <UCard>
        <template #header>
          <h2 class="text-lg font-semibold">Thông tin cơ bản</h2>
        </template>

        <div class="w-full grid md:grid-cols-2 gap-4">
          <UFormField label="Tên sản phẩm" required>
            <UInput placeholder="eg. My Product" class="w-full" />
          </UFormField>

          <UFormField label="Nền tảng" required>
            <USelectMenu
              v-model="selectedPlatform"
              :options="platforms"
              class="w-full"
            />
          </UFormField>

          <UFormField label="Username" required>
            <UInput placeholder="eg. @username" class="w-full" />
          </UFormField>

          <UFormField label="Niche" required>
            <USelectMenu
              v-model="selectedNiche"
              :options="niches"
              class="w-full"
            />
          </UFormField>
        </div>
      </UCard>

      <UCard>
        <template #header>
          <h2 class="text-lg font-semibold">Chi tiết sản phẩm</h2>
        </template>

        <div class="w-full grid md:grid-cols-3 gap-4">
          <UFormField label="Lượng Follower" required>
            <USelectMenu v-model="selectedPlatform" class="w-full" />
          </UFormField>

          <UFormField label="Engagement Rate" required>
            <UInput placeholder="4" class="w-full" />
          </UFormField>

          <UFormField label="Monthly Views" required>
            <UInput placeholder="10000" class="w-full" />
          </UFormField>
        </div>

        <div class="w-full grid md:grid-cols-2 gap-4 my-4">
          <UFormField label="Quốc gia" required>
            <UInput class="w-full" />
          </UFormField>

          <UFormField label="Độ tuổi" required>
            <USelect placeholder="4" class="w-full" />
          </UFormField>
        </div>

        <UCheckboxGroup size="lg" v-model="value" :items="items" />
      </UCard>

      <UCard>
        <template #header>
          <h2 class="text-lg font-semibold">Giá & Mô tả sản phẩm</h2>
        </template>

        <UFormField label="Giá" required>
          <UInput placeholder="10000" class="w-full" />
        </UFormField>

        <UFormField label="Mô tả sản phẩm" required class="mt-4">
          <UTextarea
            :rows="10"
            autoresize
            placeholder="Mô tả sản phẩm"
            class="w-full"
          />
        </UFormField>
      </UCard>

      <UCard>
        <template #header>
          <h2 class="text-lg font-semibold">Ảnh chụp & Minh chứng</h2>
        </template>

        <UFileUpload
          label="Drop your image here"
          description="SVG, PNG, JPG or GIF (max. 2MB)"
        />
      </UCard>

      <div class="w-full flex items-center justify-end gap-4">
        <UButton size="lg" color="neutral" variant="outline" label="Hủy" />
        <UButton size="lg" color="primary" label="Tạo sản phẩm" />
      </div>
    </UForm>
  </div>
</template>

<script lang="ts" setup>
const selectedPlatform = ref("youtube");
const platforms = [
  { value: "youtube", label: "Youtube" },
  { value: "instagram", label: "Instagram" },
  { value: "tiktok", label: "Tiktok" },
  { value: "facebook", label: "Facebook" },
  { value: "twitter", label: "Twitter" },
  { value: "linkedin", label: "Linkedin" },
  { value: "pinterest", label: "Pinterest" },
  { value: "snapchat", label: "Snapchat" },
  { value: "twitch", label: "Twitch" },
  { value: "discord", label: "Discord" },
];

const selectedNiche = ref("lifestyle");
const niches = [
  { value: "lifestyle", label: "Lifestyle" },
  { value: "fitness", label: "Fitness" },
  { value: "food", label: "Food" },
  { value: "travel", label: "Travel" },
  { value: "tech", label: "Tech" },
  { value: "gaming", label: "Gaming" },
  { value: "fashion", label: "Fashion" },
  { value: "beauty", label: "Beauty" },
  { value: "business", label: "Business" },
  { value: "education", label: "Education" },
  { value: "entertainment", label: "Entertainment" },
  { value: "music", label: "Music" },
  { value: "art", label: "Art" },
  { value: "sports", label: "Sports" },
  { value: "health", label: "Health" },
  { value: "finance", label: "Finance" },
  { value: "other", label: "Other" },
];

const items = ref([
  "Account is verified on the platform",
  "Account is monetized",
]);
const value = ref([]);
</script>

<style></style>
