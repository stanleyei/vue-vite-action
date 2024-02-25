<script>
import vueLogo from '@/assets/images/logo.svg';

export default {
  data() {
    return {
      vueLogo,
      msg: '',
      selectedTab: 'logo',
    };
  },
  methods: {
    changeTab(tab, msg = '') {
      this.selectedTab = tab;
      this.msg = msg;
    },
    bgColor() {
      if (this.selectedTab === 'number') {
        return 'bg-red-500';
      }
      if (this.selectedTab === 'name') {
        return 'bg-blue-500';
      }
      if (this.selectedTab === 'food') {
        return 'bg-green-500';
      }
      return '';
    },
  },
};
</script>

<template>
  <div class="w-[700px] h-[50dvh]">
    <nav class="flex">
      <button type="button" class="nav-btn" :class="{ 'active': selectedTab === 'logo' }" @click="changeTab('logo')">Vue</button>
      <button type="button" class="nav-btn" :class="{ 'active': selectedTab === 'number' }" @click="changeTab('number', '0')">編號</button>
      <button type="button" class="nav-btn" :class="{ 'active': selectedTab === 'name' }" @click="changeTab('name', 'Stanley')">姓名</button>
      <button type="button" class="nav-btn" :class="{ 'active': selectedTab === 'food' }" @click="changeTab('food', '拉麵')">喜歡的食物</button>
    </nav>
    <div class="flex items-center justify-center h-full border-2 border-white rounded-b rounded-tr" :class="{ 'bg-red-500': selectedTab === 'number', 'bg-blue-500': selectedTab === 'name', 'bg-green-500': selectedTab === 'food' }">
      <img v-show="selectedTab === 'logo'" :src="vueLogo" alt="Vue Logo" class="w-1/2 h-1/2">
      <div v-show="selectedTab !== 'logo'" class="text-8xl">{{ msg }}</div>
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
