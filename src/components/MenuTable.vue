<template>
    <div class="table-size">
        <b-table fixed small hover :items='items' :fields='fields' >
            
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
                        <b-col><b-form-spinbutton v-model="quantity" class="w-25" size='sm' wrap min="1" max="10" placeholder="--"></b-form-spinbutton>
                        </b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b-button size="sm" variant="success" @click="addToCart(row)"> Добавить <b-icon icon="cart-plus" aria-hidden="true"> </b-icon></b-button> 
                        </b-col>
                    </b-row>
                </b-card>
            </template>
        </b-table>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name:'MenuTable',
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
            ]
        }
    },
    computed:{
    ...mapState('menuM', {
        items: 'menu'
        })
    },
    methods: {
        ...mapActions('menuM', [
        'getMenu'
        ]),
        ...mapActions([
        'addToCartVX'
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
            console.log(dish)
            this.addToCartVX(dish)
            row.toggleDetails()
        }

        
    },
    mounted(){
        this.getMenu()
    }
}
</script>