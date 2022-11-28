<template>
  <div class="h-full bg-gray-700 pb-20">
    <div class="h-full flex flex-column justify-center items-center text-center text-white font-bold">
      <div class="text-8xl">404</div>
      <div class="text-4xl text-white font-bold">找不到這個頁面哦</div>
      <div class="mt-10">
        <v-btn dark x-large color="orange" @click="$router.push({ name: 'landing' })">回到首頁</v-btn>
      </div>
    </div>
  </div>
</template>
