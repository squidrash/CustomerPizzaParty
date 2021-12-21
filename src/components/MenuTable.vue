<template>
<div>
    <div class="special-offer-block">
        <div 
        v-for="offer in offers"
        :key="offer.id"
        >
            <special-offer-card :specialOffer="offer"/>
        </div>
    </div>

    <div class="dishes-block">
        <div 
        v-for="dish in dishes" 
        :key="dish.id"
        >
            <dish-card :dish="dish" @add-to-cart="addToCartForm"/>
        </div>
    </div>

    <div>
        <add-to-cart-form :selectDish="currentDish" @add-to-cart="addToCart"/>
    </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import DishCard from '@/components/DishCard.vue'
import SpecialOfferCard from '@/components/SpecialOfferCard.vue'
import AddToCartForm from '@/components/AddToCartForm.vue'

export default {
    name:'MenuTable',
    components:{
        DishCard,
        AddToCartForm,
        SpecialOfferCard
    },
    data() {
        return{
            quantity:1,
            currentDish:{}
        }
    },
    computed:{
    ...mapState( {
        dishes: 'menu',
        offers: 'specialOffers'
        })
    },
    methods: {
        ...mapActions([
        'addToCartVX',
        'getMenu',
        'getOffers'
        ]),
        addToCart(dish){
            console.log(dish)
            this.addToCartVX(dish)
        },
        addToCartForm(dish){
            this.currentDish = dish
            this.$bvModal.show('add-to-cart-form')
        }

        
    },
    mounted(){
        this.getMenu()
        this.getOffers()
    }
}
</script>