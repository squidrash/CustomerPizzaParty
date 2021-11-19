<template>
<div>
  <div v-b-hover="handleHover">
    <b-card
      :title="dish.productName"
      :img-src="imageKek"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem; 
            max-height: 26rem; 
            height: 26rem;"
      class="mb-2"
    >

      <b-card-text v-if="isHovered">
        <p v-if="dish.shortDescription=== undefined"> Тут будет какое-то описание блюда. что в него входит  и тому подобное.</p>
        <p v-else> {{dish.shortDescription}}</p>
        
      </b-card-text>

      <b-card-text style="bottom: 20px;">{{dish.price}}₽   
      <b-button v-if="isHovered" variant="success" @click="addToCart">В корзину</b-button>
      </b-card-text>
    </b-card>
  </div>
</div>
</template>

<script>

export default {
    name: 'DishCard',
    props:['dish'],
    data(){
      return {
        isHovered: false,
        imageKek: "https://www.chefmarket.ru/blog/wp-content/uploads/2019/05/delicious-burger-e1558527589911.jpg"
      }
    },
     methods: {
      handleHover(hovered) {
        this.isHovered = hovered
      },
      addToCart(){
        console.log(this.dish)
        this.$emit('add-to-cart',this.dish)
      }
    }
}
</script>