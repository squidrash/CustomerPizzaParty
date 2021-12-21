<template>
<div>
    <div class="table-size-l">
        <b-table fixed small hover :items='dishes' :fields='fields' >
            
            <template #cell(more)="row">
                <b-button size="sm" @click="showDetails(row)" class="mr-2">
                    {{ row.detailsShowing ? 'Скрыть' : 'Подробнее'}}
                </b-button>
            </template>

            <template #row-details="row">
                <b-card>
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Количество</b>
                        </b-col>
                        <b-col><b-form-spinbutton v-model="quantity" class="w-50" size='sm' wrap min="1" max="10" placeholder="--"></b-form-spinbutton>
                        </b-col>
                        <b-col sm="3"><b-button size="sm" variant="success" @click="addToCart(row)"> Добавить <b-icon icon="cart-plus" aria-hidden="true"></b-icon></b-button> 
                        </b-col>
                    </b-row>
                </b-card>
            </template>
        </b-table>
    </div>
        
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
                <dish-card :dish="dish" @add-to-cart="addToCartFrom"/>
            </div>
        </div>

        <div>
            <add-to-cart-form :selectDish="currentDish" @add-to-cart="addToCart2"/>
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
            fields: [
                {
                    key: 'productName',
                    label: 'Наименование',
                    sortable: true
                },
                {
                    key: 'price',
                    label: 'Цена',
                    sortable: true
                },
                {
                    key: 'more',
                    label: ''
                },
            ],
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
        showDetails(row){
            this.quantity = 1
            row.toggleDetails()
        },
        addToCart(row){
            console.log(row)
            let dish = {}
            dish.id = row.item.id
            dish.price = row.item.price
            dish.quantity = this.quantity
            dish.productName = row.item.productName
            this.addToCartVX(dish)
            row.toggleDetails()
        },
        addToCart2(dish){
            console.log(dish)
            this.addToCartVX(dish)
        },
        addToCartFrom(dish){
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