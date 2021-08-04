<template>
    <div>
        <b-table small hover :items='items' :fields='fields'>
            
            <template #cell(price)="row">
                {{row.item.quantity * row.item.price}} ₽
            </template>

            

            
        </b-table>
        <b-button size="sm" variant='success' class="mr-2">
            Оформить Заказ {{totalSum}} ₽
        </b-button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'ShoppingCart',
    data() {
        return {
            fields:[
                {
                    key: 'productName',
                    label: '',
                },
                {
                    key: 'quantity',
                    label: ''
                },
                {
                    key: 'price',
                    label: '',
                },
                
            ]
        }
    },
    computed: {
        ...mapState({
            items:'cart'
        }),
        totalSum(){
            let sum = 0
            for(let dish of this.items){

                sum += dish.price * dish.quantity
            }
            return sum
        }
    },
    methods:{
        ...mapActions({})
    },
    mounted(){
    }
}
</script>