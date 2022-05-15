<template>
  <div class="delivery_addresses">
    <div class="delivery_addresses__title">Мои адреса</div>

    <div class="delivery_addresses_card">
      <div
        v-for="address in addresses"
        :key="address.id"
        class="delivery_addresses__row"
      >
        <div
          class="delivery_addresses__column delivery_addresses__column_address"
        >
          <div class="delivery_addresses__item">
            {{ address.city }}, ул {{ address.street }}, д
            {{ address.numberOfBuild }}
            <template v-if="address.numberOfEntrance !== undefined">
              , подъезд {{ address.numberOfEntrance }}, кв
              {{ address.apartment }}
            </template>
          </div>
        </div>
        <div
          class="delivery_addresses__column delivery_addresses__column_remove"
        >
          <div class="delivery_addresses__item">
            <button class="remove-btn">
              <b-icon
                @click="submitRemoveAddress(address.id)"
                icon="x"
                font-scale="1.5"
                variant="secondary"
              ></b-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
    <ModalConfirm
      :modalTitle="'Удалить адрес?'"
      @submit-action="onSubmitRemove"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import AddressForm from "@/components/AddressForm.vue";
import ModalConfirm from "@/components/ModalConfirm.vue";
import pizzaApi from "@/api/pizzaApi";

export default {
  name: "DeliveryAddresses",
  components: {
    ModalConfirm,
  },
  data() {
    return {
      addressId: 0,
    };
  },
  computed: {
    ...mapState({
      addresses: (state) => state.customer.addresses,
    }),
  },
  methods: {
    ...mapActions(["getCustomer"]),

    submitRemoveAddress(id) {
      this.addressId = id;
      //   console.log(id);
      this.$bvModal.show("modal-confirm");
    },
    async onSubmitRemove() {
      await pizzaApi.customer.removeCustomerAddress(1, this.addressId);
      this.getCustomer(1);
    },
  },
};
</script>
<style>
.delivery_addresses {
  padding: 50px 10px 10px 10px;
}
.delivery_addresses_card {
  border-radius: 5px;
  width: 100%;
  min-height: 500px;
  padding: 24px 48px;
  margin: 0;

  box-shadow: 0 0 5px;
}
.delivery_addresses__title {
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 16px;
}
.delivery_addresses__row {
  font-size: 15px;
  display: flex;
  padding: 14px 0px 12px 10px;
}
.delivery_addresses__column {
}
.delivery_addresses__column_address {
  text-align: left;
  flex: 1 1 auto;
}
.delivery_addresses__column_remove {
  flex: 0 0 30px;
}
.delivery_addresses__item {
}
.remove-btn {
  border: 0px;
  background-color: #ffffff;
  width: 30px;
  height: 30px;
  padding: 0px;
}
</style>
