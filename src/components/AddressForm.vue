<template>
  <div>
    <b-modal 
      id ="modal-address" 
      ref="my-modal" size="sm" 
      title="Форма адреса"
      @hidden="resetModal"
      @ok="handleOk">
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            label="Город"
            label-for="city-input"
            invalid-feedback="Введите город"
            :state="cityState"
          >
            <b-form-input
              id="city-input"
              v-model="address.city"
              placeholder="Введите город"
              :state="cityState"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Улица"
            label-for="street-input"
            invalid-feedback="Введите улицу"
            :state="streetState"
          >
            <b-form-input
              id="street-input"
              v-model="address.street"
              placeholder="Введите улицу"
              :state="streetState"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Номер дома"
            label-for="numberOfBuild-input"
            invalid-feedback="Введите номер дома"
            :state="numberOfBuildState"
          >
            <b-form-input
              id="numberOfBuild-input"
              v-model="address.numberOfBuild"
              placeholder="Введите номер дома"
              :state="numberOfBuildState"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Подъезд"
            label-for="numberOfEntrance-input"
          >
            <b-form-input
              id="numberOfEntrance-input"
              v-model="address.numberOfEntrance"
              placeholder="Введите номер подъезда"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            label="Квартира"
            label-for="apartment-input"
          >
            <b-form-input
              id="apartment-input"
              v-model="address.apartment"
              placeholder="Введите номер квартиры"
            ></b-form-input>
          </b-form-group>
        </form>
    </b-modal>
  </div>
</template>

<script>
    //import pizzaApi from '@/api/pizzaApi'

  export default {
    name: 'AddressForm',
    props:['addressProp'],
    data(){
      return{
        cityState: null,
        streetState: null,
        numberOfBuildState: null
      }
    },
    computed:{
      address(){
        const cloneAddress = {...this.addressProp}
        return cloneAddress
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.cityState = valid
        this.streetState = valid
        this.numberOfBuildState = valid
        return valid
      },
      resetModal() {
        this.cityState = null
        this.streetState = null
        this.numberOfBuildState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      async handleSubmit() {
        if (!this.checkFormValidity()) {
          return
        }
        //await pizzaApi.address.createAddressCustomer(this.address,1)
        this.$emit('submit-action', this.address)

        this.$nextTick(() => {
          this.$bvModal.hide('modal-address')
        })
      }
    }
  }
</script>