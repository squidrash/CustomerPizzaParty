<template>
  <div>
    <b-modal 
      id="add-to-cart-form" 
      centered 
      hide-footer 
      hide-header 
      @hidden="resetModal"
    >
      <b-card no-body class="overflow-hidden" style="max-width: 700px;">
        <b-row >
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
              <b-form-spinbutton 
                v-model="quantity" 
                class="spinbutton" 
                size='sm' 
                wrap min="1" max="10" 
                placeholder="--"
              />

              <b-button 
                size="sm" 
                variant="success" 
                @click="add"
                style="width: 110px;"
              > 
              Добавить <b-icon icon="cart-plus" aria-hidden="true"/></b-button>
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
      add(){
        let dish = {...this.selectDish}
        dish.quantity = this.quantity
        this.$emit('add-to-cart',dish)
        this.$bvModal.hide('add-to-cart-form')
        this.quantity = 1
      },
      resetModal(){
        this.quantity = 1
      }
    }
    
}
</script>
<style>
.spinbutton{
  max-width: 110px;
  margin-bottom: 5px;
}
</style>