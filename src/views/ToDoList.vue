<script>
export default {
  data() {
    return {

    };
  },
  methods:{

  },
};
</script>

<template>
  <div class="w-full h-[calc(100dvh-40px)] flex justify-center items-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
    <div class="w-[70%] bg-white rounded">
      <section class="flex items-center flex-col justify-center">
        <div class="flex items-center justify-center gap-5 w-full p-6">
          <label class="flex-1">
            <input type="text" class="w-full h-10 px-3 border-2 border-black text-black rounded-md" placeholder="請填寫待辦事項">
          </label>
          <button class="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 h-10 px-3 rounded-md text-white" type="button">新增</button>
        </div>
      </section>

      <div class="w-full flex gap-2 px-6 border-b-2">
        <button class="tab active" type="button">
          全部
        </button>
        <button class="tab" type="button">
          已完成
        </button>
        <button class="tab" type="button">
          未完成
        </button>
      </div>

      <section class="w-full grid grid-cols-3 gap-4 py-3 px-6 text-black font-bold">
        <div>完成</div>
        <div>事項</div>
        <div class="text-center">功能</div>
      </section>

      <section class="overflow-x-auto h-[500px]">
        <ul class="flex items-center justify-between gap-5">
          <li class="w-full grid grid-cols-3 gap-4 items-center py-3 px-6 border-y-2">
            <label class="pl-3">
              <input type="checkbox">
            </label>
            <div>
              <span class="text-black">繳電話費</span>
            </div>
            <div class="flex justify-center gap-4">
              <button class="w-full bg-gradient-to-b from-green-500 to-blue-500 p-2 rounded-xl text-white font-bold" type="button">編輯</button>
              <button class="w-full bg-gradient-to-b from-red-500 to-orange-500 p-2 rounded-xl text-white font-bold" type="button">刪除</button>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.tab {
  @apply bg-[#000080] text-white rounded-t-md py-2 px-4 font-bold;
}

.tab.active {
  @apply bg-[#f1e394] text-black;
}
</style>
