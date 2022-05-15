<template>
  <div>
    <div class="main">
      <order-card
        v-for="order in customer.orders"
        :key="order.id"
        :order="order"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import OrderCard from "@/components/OrderCard.vue";
export default {
  name: "CustomerOrders",
  components: {
    OrderCard,
  },
  computed: {
    ...mapState({
      customer: "customer",
    }),
  },
};
</script>
