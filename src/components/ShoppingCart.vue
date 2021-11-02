<template>
    <div v-if="items.length !== 0" class="table-size">
        <b-button size="sm" @click="submitEmptyCart"  variant='' class="mr-2">
            Очистить корзину
        </b-button>

        <b-table fixed small hover :items='items' :fields='fields'>
           
            <template #cell(price)="row">
                {{row.item.quantity * row.item.price}} ₽
            </template>
            <template #cell(delete)="row">
                <b-button size="sm" variant='danger' class="mr-2" @click="removeDish(row.index)">
                        Удалить
                </b-button>
            </template>
            <template #cell(quantity)="row">
                <b-form-spinbutton style="width: 8rem" size="sm" v-model="row.item.quantity" min="1" max="10" ></b-form-spinbutton>
            </template>
        </b-table>
        <b-button size="sm" variant='success' class="mr-2" @click="submitCreateOrder">
            Оформить Заказ {{totalSum}} ₽
        </b-button>
        <ModalConfirm :modalTitle="modalTitle" @submitAction='onSubmit'/>

    </div>
    <div v-else>
        <h1>Корзина пуста</h1>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import ModalConfirm from '@/components/ModalConfirm.vue'
    import pizzaApi from '@/api/pizzaApi'
export default {
    name: 'ShoppingCart',
    components: {
        ModalConfirm
    },
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
                    label: ''
                },
                {
                    key:'delete',
                    label: ''
                }
                
            ],
            modalTitle: '',
            modalAction: ''
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
        ...mapActions([
        'removeDishVX',
        'emptyCartVX'
        ]),
        submitCreateOrder(){
            this.modalTitle = "Подтвердить заказ?"
            this.modalAction = 'create'
            this.$bvModal.show('modal-confirm')
        },
        submitEmptyCart(){
            this.modalTitle = "Очистить корзину?"
            this.modalAction = 'empty'
            this.$bvModal.show('modal-confirm')
        },
        removeDish(Id){
            console.log(Id)
            this.removeDishVX(Id)
        },
        onSubmit(){
            if(this.modalAction === 'create'){
                this.createOrder()
            }
            this.emptyCart()
        },
        createOrder(){
            const order =  pizzaApi.order.createOrder(this.items)
            console.log(order)
        },
        emptyCart(){
            this.emptyCartVX()
        },

        
        test(){
            console.log(this.items)
        }
    },
    mounted(){
    }
}
</script>