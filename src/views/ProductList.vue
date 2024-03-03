<!-- 商品列表頁面，利用卡片的形式陳列商品並顯示商品名稱、商品圖片、敘述、加入購物車按鈕及可以增加減少購買數量 -->

<script>
import CountButton from '@/components/CountButton.vue';
import productData from '@/assets/json/MOCK_DATA.json';
import iconShoppingCart from '@/assets/images/icon-shopping-cart.svg';
import iconMesh from '@/assets/images/icon-mesh.png';
import iconMeshGrey from '@/assets/images/icon-mesh-grey.png';
import iconList from '@/assets/images/icon-list.png';
import iconListGrey from '@/assets/images/icon-list-grey.png';

export default {
  components: {
    CountButton,
  },
  data() {
    return {
      productData,
      imgIcon: {
        iconShoppingCart,
        iconMesh,
        iconMeshGrey,
        iconList,
        iconListGrey,
      },
    };
  },
  methods: {

  },
};
</script>
<template>
  <div class="w-full px-5">
    <h1 class="mb-3 text-3xl font-bold">商品列表</h1>

    <!-- 切換列表呈現 -->
    <nav class="flex justify-end items-center">
      <button type="button">
        <img :src="imgIcon.iconMesh" alt="卡片顯示">
        <img :src="imgIcon.iconMeshGrey" alt="卡片顯示(灰)">
      </button>
      <button type="button">
        <img :src="imgIcon.iconList" alt="條列顯示">
        <img :src="imgIcon.iconListGrey" alt="條列顯示(灰)">
      </button>
    </nav>

    <!-- 卡片式列表 -->
    <section class="flex gap-5 flex-wrap justify-center">
      <div class="w-1/2 xl:w-1/6 border-[1px] rounded-lg flex flex-col md:w-1/3">
        <img class="rounded-t-lg w-full" src="" alt="商品圖片" />

        <div class="bg-slate-100 h-[250px] bg-opacity-30 px-3 flex flex-col gap-3 pt-3">
          <h2>Bytecard</h2>
          <p>Immunization not carried out because of caregiver refusal</p>
          <p>價格: 954</p>
        </div>

        <div class="flex items-center gap-5 mb-5 px-3">
          數量:
          <CountButton class="w-[150px] h-[35px]" />
        </div>

        <button type="button" class="flex justify-center items-center gap-x-2 bg-[#50468c] text-white rounded-b-lg px-4 py-1">
          <img :src="imgIcon.iconShoppingCart" alt="購物車圖示" width="20">
          <span>加入購物車</span>
        </button>
      </div>
    </section>

    <!-- 條列式列表 -->
    <section class="px-32">
      <div class="grid grid-cols-5 border-y font-bold py-1 gap-x-3">
        <div class="text-center">商品圖片</div>
        <div>商品名稱</div>
        <div class="text-center">商品描述</div>
        <div class="text-center">價錢</div>
        <div>操作</div>
      </div>

      <div class="grid grid-cols-5 py-1 border-b min-h-[80px] gap-x-3 lg:first:border-t lg:!py-3">
        <img src="" alt="商品圖示" class="h-full object-cover">
        <div class="flex items-center">Bytecard</div>
        <div class="flex items-center">Immunization not carried out because of caregiver refusal</div>
        <div class="flex justify-center items-center">$ 954</div>
        <div class="flex justify-center items-center lg:flex-wrap lg:!justify-between lg:pt-6 md:!pt-0">
          <div class="flex flex-col gap-y-4">
            <CountButton class="w-[150px] h-[35px]" />
            <div class="flex justify-center items-center gap-x-2 bg-[#50468c] text-white rounded-full px-4 py-1 cursor-pointer md:p-0 w-[150px]">
              <img :src="imgIcon.iconShoppingCart" class="py-1" alt="購物車圖示" width="20">
              <span>加入購物車</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
