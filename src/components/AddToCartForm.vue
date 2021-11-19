<template>
  <div>
    <b-modal id="add-to-cart-form" centered hide-footer hide-header>
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="localImage" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="selectDish.productName">
              <b-card-text v-if="selectDish.description !== undefined">
                {{selectDish.description}}
                Тут будет какое-то описание 
              </b-card-text>
              <b-card-text v-else>
                У блюда пока нет описания
              </b-card-text>
              <b-form-spinbutton v-model="quantity" class="w-75" size='sm' wrap min="1" max="10" placeholder="--"></b-form-spinbutton>
              <b-button size="sm" variant="success" @click="test"> Добавить <b-icon icon="cart-plus" aria-hidden="true"></b-icon></b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-modal>
  </div>
</template>
<script>
export default {
    name: 'AddToCartForm',
    props:['selectDish'],
    data(){
      return {
        localImage: require('../assets/Гиро.jpg'),
        quantity: 1,

      }
    },
    methods:{
      test(){
        let dish = {...this.selectDish}
        dish.quantity = this.quantity
        console.log('из компонента')
        console.log(dish)
        this.$emit('add-to-cart',dish)
        this.$bvModal.hide('add-to-cart-form')
      }
    }
    
}
</script>