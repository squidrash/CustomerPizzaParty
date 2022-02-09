<template>
  <div>
    <p>Доставка</p>
    <div v-if="addressСonfirmed === false">
      <div>
        <b-form-group>
          <b-form-radio-group id="radio-group-2" v-model="isDelivery">
            <b-form-radio @change="eventSelect" value="false"
              >Заберу из ресторана</b-form-radio
            >
            <b-form-radio @change="eventCancel" value="true"
              >По адресу</b-form-radio
            >
          </b-form-radio-group>
        </b-form-group>
      </div>
      <div v-if="isDelivery !== 'false'">
        <div class="">
          <b-form-select v-model="selectedAddress">
            <b-form-select-option :value="null" disabled>
              Выберите адрес
            </b-form-select-option>

            <b-form-select-option
              v-for="ad in addresses"
              :key="ad.id"
              :value="ad"
            >
              г. {{ ad.city }}, ул. {{ ad.street }}, д. {{ ad.numberOfBuild
              }}<span v-if="ad.numberOfEntrance !== undefined"
                >, под. {{ ad.numberOfEntrance }}, кв. {{ ad.apartment }}</span
              >
            </b-form-select-option>

            <b-form-select-option :value="'new'">
              Новый адрес
            </b-form-select-option>
          </b-form-select>
        </div>

        <div class="">
          <b-button
            size="sm"
            class="cart_address__button"
            variant="success"
            v-if="selectedAddress !== 'new' && selectedAddress !== 'null'"
            @click="setAddress(selectedAddress)"
            >Подтвердить</b-button
          >

          <b-button
            size="sm"
            class="cart_address__button"
            variant="primary"
            v-if="selectedAddress === 'new'"
            @click="addNewAddress"
            >Добавить адрес</b-button
          >
        </div>
        <AddressForm :addressProp="address" @submit-action="onSubmit" />
      </div>
    </div>

    <div v-else>
      <p class="cart_address__p" @click="resetAddress">
        г. {{ selectedAddress.city }}, ул. {{ selectedAddress.street }}, д.
        {{ selectedAddress.numberOfBuild
        }}<span v-if="selectedAddress.numberOfEntrance !== undefined"
          >, под. {{ selectedAddress.numberOfEntrance }}, кв.
          {{ selectedAddress.apartment }}</span
        >
      </p>
    </div>
    <b-modal
      id="alert-address"
      hide-footer
      size="sm"
      title="Ошибка!"
      header-bg-variant="warning"
    >
      {{ alertMessage }}
    </b-modal>
  </div>
</template>

<script>
import AddressForm from "@/components/AddressForm.vue";
import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";
import pizzaApi from "@/api/pizzaApi";

export default {
  name: "AddressCard",
  props: ["addresses"],
  components: {
    AddressForm,
  },
  data() {
    return {
      isDelivery: true,
      // deliveryAddress: {},
      // selected: null,
      address: {},
      addressСonfirmed: false,

      alertMessage: "",
      showAlert: false,
    };
  },
  computed: {
    ...mapFields(["selectedAddress"]),
  },
  methods: {
    ...mapActions(["getCustomer", "setDeliveryAddress"]),

    addNewAddress() {
      this.$bvModal.show("modal-address");
    },
    async onSubmit(address) {
      let result = await pizzaApi.customer.createCustomerAddress(1, address);
      console.log(result);
      if (result.status !== 200) {
        this.alertMessage = result.data;
        this.$bvModal.show("alert-address");
        return;
      }
      await this.getCustomer(1);
      this.setAddress(this.addresses[this.addresses.length - 1]);
    },
    setAddress(address) {
      console.log(address);
      // this.deliveryAddress = address;
      this.selectedAddress = address;
      this.addressСonfirmed = true;
      this.setDeliveryAddress(address.id);
      this.eventSelect();
    },
    resetAddress() {
      this.addressСonfirmed = false;
      this.setDeliveryAddress(0);
      this.eventCancel();
    },
    eventSelect() {
      this.$emit("address-selected");
    },
    eventCancel() {
      this.$emit("address-canceled");
    },
  },
};
</script>
