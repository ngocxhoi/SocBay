<template>
  <div class="mt-10 mb-8">
    <div class="text-3xl font-bold mb-2">Tin nhắn</div>
    <div class="text-gray-600">Chat với người bán</div>
  </div>

  <div class="relative max-w-xl my-8 py-8">
    <UInput
      placeholder="Tìm kiếm tin nhắn"
      size="xl"
      icon="lucide:search"
      class="w-full"
      v-model="search"
    />
  </div>

  <template v-if="isLoading">
    <div class="text-center text-gray-500 py-20">Loading messages...</div>
  </template>

  <div v-else class="space-y-2">
    <UChip
      v-for="chat in filteredChats"
      inset
      position="top-left"
      :show="!chat.isLastMessageRead"
      @click="openChat(chat)"
      class="w-full cursor-pointer hover:shadow-xl dark:hover:shadow dark:shadow-gray-600"
    >
      <UCard class="w-full">
        <div class="w-full flex items-start justify-between">
          <div v-if="chat" class="flex flex-col">
            <UUser
              size="2xl"
              :name="chat.listing!.title"
              :description="chat.chatUser!.name"
              :avatar="{
            src: chat.chatUser!.image,
            icon: 'i-lucide-image',
          }"
            />

            <p
              class="mt-4 pl-14"
              :class="{ 'text-gray-500': chat.isLastMessageRead }"
            >
              {{ chat.lastMessage }}
            </p>
          </div>

          <p class="text-sm text-gray-500">{{ formatDate(chat.createdAt) }}</p>
        </div>
      </UCard>
    </UChip>
  </div>

  <Chat v-model:open="open" :chat="chatData" />
</template>

<script lang="ts" setup>
import { dummyChats } from "~/assets/dummy";

const isLoading = ref(false);
const search = ref("");
const open = ref(false);
const chatData = ref<Chat | null>(null);

const filteredChats = computed(() => {
  if (!search.value) return dummyChats;
  return dummyChats.filter((chat) => {
    return chat
      .listing!.title.toLowerCase()
      .includes(search.value.toLowerCase());
  });
});

const openChat = (chat: Chat) => {
  open.value = true;
  chatData.value = chat;
};
</script>
