<template>
  <div v-if="items.length !== 0" class="container">
    <b-button
      size="sm"
      @click="submitEmptyCart"
      variant=""
      class="mr-2 cart__button"
    >
      Очистить корзину
    </b-button>

    <div class="cart_address">
      <AddressCard
        :addresses="customer.addresses"
        @address-selected="isBtnDisabled = false"
        @address-canceled="isBtnDisabled = true"
      />
    </div>

    <div>
      <DishesList
        :dishes="items"
        :discountSum="discountSum"
        @remove-dish="removeDish"
        @edit-dishes="resetPromocode"
      />
    </div>

    <div class="cart_promocode">
      <div class="cart_promocode__input">
        <b-form-input
          size="sm"
          v-model="promocode.value"
          placeholder="Введите промокод"
        />
      </div>
      <div class="cart_promocode__button">
        <b-button
          size="sm"
          class="mr-2"
          style="min-width: 95px"
          :variant="promocodeVariantBtn"
          @click="checkOffer"
          >{{
            promocode.isActive === true ? "Отменить" : "Применить"
          }}</b-button
        >
      </div>
      <div class="cart_promocode__big_button">
        <b-button
          :disabled="isBtnDisabled"
          size="sm"
          :variant="createOrderVarionBtn"
          @click="submitCreateOrder"
        >
          Оформить Заказ
        </b-button>
      </div>
    </div>
    <ModalConfirm :modalTitle="modalTitle" @submit-action="onSubmit" />
    <b-modal
      id="alert-promocode"
      hide-footer
      size="sm"
      title="Ошибка!"
      header-bg-variant="warning"
    >
      {{ alertMessage }}
    </b-modal>
  </div>
  <div v-else>
    <h1>Корзина пуста</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import pizzaApi from "@/api/pizzaApi";

import ModalConfirm from "@/components/ModalConfirm.vue";
import DishesList from "@/components/DishesList.vue";
import AddressCard from "@/components/AddressCard.vue";
export default {
  name: "ShoppingCart",
  components: {
    ModalConfirm,
    DishesList,
    AddressCard,
  },
  data() {
    return {
      modalTitle: "",
      modalAction: "",
      variant: "primary",
      discountSum: 0,
      alertMessage: "",
      promocode: {
        isActive: false,
        value: "",
      },
      isBtnDisabled: true,
    };
  },
  computed: {
    ...mapState({
      customer: "customer",
    }),
    ...mapState("cartM", {
      items: "cart",
    }),
    totalSum() {
      let sum = 0;
      for (let dish of this.items) {
        sum += dish.price * dish.quantity;
      }
      return sum;
    },
    promocodeVariantBtn() {
      if (this.promocode.isActive === true) {
        return "primary";
      } else {
        return "success";
      }
    },
    createOrderVarionBtn() {
      if (this.isBtnDisabled === true) {
        return "";
      } else {
        return "success";
      }
    },
  },
  methods: {
    ...mapActions("cartM", ["removeDishVX", "emptyCartVX", "getCustomer"]),
    ...mapActions(["getCustomer", "setPromocode", "createOrderVX"]),
    submitCreateOrder() {
      this.modalTitle = "Подтвердить заказ?";
      this.modalAction = "create";
      this.$bvModal.show("modal-confirm");
    },
    submitEmptyCart() {
      this.modalTitle = "Очистить корзину?";
      this.modalAction = "empty";
      this.$bvModal.show("modal-confirm");
    },
    removeDish(Id) {
      console.log(Id);
      this.removeDishVX(Id);
    },
    onSubmit() {
      if (this.modalAction === "create") {
        this.createOrder();
      }
      this.emptyCart();
    },
    createOrder() {
      // const order = pizzaApi.order.createOrder(this.items);
      // console.log(order);
      this.createOrderVX();
    },
    emptyCart() {
      this.emptyCartVX();
    },

    async checkOffer() {
      if (this.promocode.isActive === true) {
        this.resetPromocode();
        return;
      }
      if (this.promocode.value === "") {
        return;
      }
      console.log("список блюд");
      console.log(this.items);
      console.log("");
      let result = await pizzaApi.specialOffer.checkComplianceSpecialOffer(
        this.items,
        this.promocode.value
      );
      if (result.status !== 200) {
        this.alertMessage = result.data;
        this.$bvModal.show("alert-promocode");
        return;
      }
      console.log(result);
      this.promocode.isActive = true;
      this.discountSum = result.data.discountSum;
      this.setPromocode(this.promocode.value);
    },
    resetPromocode() {
      if (this.promocode.isActive === true) {
        this.discountSum = 0;
        this.promocode.isActive = false;
        this.setPromocode("");
      }
    },
  },
  mounted() {
    this.getCustomer(1);
  },
};
</script>
