<template>
  <div class="main">
    <div class="customer_info">
      <h1>Профиль</h1>

      <p>Имя: {{ user.name }}</p>
      <p>Фамилия: {{ user.lastName }}</p>
      <p>Телефон: {{ user.phone }}</p>
      <p>Скидка: {{ user.discount }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CustomerInfo",
  computed: {
    ...mapState({
      user: "customer",
    }),
  },
};
</script>
