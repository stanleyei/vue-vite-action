import { defineStore } from 'pinia';

export const useShoppingCartStore = defineStore('shoppingCart', {
  state: () => ({
    count: 0,
    cartData: [],
  }),
  actions: {
    initCart() {
      const cart = JSON.parse(localStorage.getItem('cart')) ?? [];
      this.cartData = cart;
      this.count = cart?.length ?? 0;
    },
    updateCart(product) {
      // 檢查該產品是否已在購物車中
      const existingProduct = this.cartData.find((item) => item.id === product.id);

      if (existingProduct) {
        // 如果產品已存在，更新其數量
        existingProduct.quantity += product.quantity;
      } else {
        // 如果產品不存在，將其加入購物車
        this.cartData.push(product);
      }

      // 將更新後的購物車資料存回 localStorage
      localStorage.setItem('cart', JSON.stringify(this.cartData));

      this.count = this.cartData.length;
    },
  },
});
