<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<template>
  <div class="w-1/2 h-[50dvh]">
    <nav class="flex">
      <button type="button" class="nav-btn active">號碼</button>
      <button type="button" class="nav-btn">中文名</button>
      <button type="button" class="nav-btn">英文名</button>
    </nav>
    <div class="flex items-center justify-center h-full border-2 border-white rounded-b rounded-tr">
      <h1 class="text-8xl font-bold">20</h1>
    </div>
  </div>
</template>

<style scoped>
.nav-btn {
  @apply border-x-2 border-t-2 border-white rounded-t px-10 py-1 font-bold;
}

.active {
  @apply bg-white text-black;
}
</style>
