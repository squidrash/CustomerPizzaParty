<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UserProfile",
  components: {},
  methods: {
    ...mapActions(["getCustomer"]),
  },
  mounted() {
    this.getCustomer(1);
  },
};
</script>
