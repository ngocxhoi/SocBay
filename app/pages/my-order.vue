<template>
  <div class="max-w-2xl mx-auto mt-10 mb-8 w-full">
    <h1 class="text-3xl font-bold mb-2">Đơn hàng</h1>

    <p v-if="dummyOrders.length == 0" class="text-center my-10">
      Không có đơn hàng
    </p>

    <div v-else class="py-8 w-full space-y-8">
      <OrderCard v-for="order in dummyOrders" :order="order" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { dummyOrders } from "~/assets/dummy";
</script>
