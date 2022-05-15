<template>
  <div class="wrapper">
    <ShoppingCart />
  </div>
</template>
<script>
import ShoppingCart from "@/components/ShoppingCart.vue";
export default {
  name: "Cart",
  components: {
    ShoppingCart,
  },
};
</script>
