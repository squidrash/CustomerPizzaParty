<template>
    <div class="table-size">
        <b-table fixed small hover :items='customer.addresses' :fields='fields'>
            <template #cell(address)="row">
                <template>
                    г {{row.item.city}}, ул {{row.item.street}},
                    д {{row.item.numberOfBuild}}, 
                    <template v-if="row.item.numberOfEntrance !== undefined">
                        подъезд {{row.item.numberOfEntrance}}, кв {{row.item.apartment}}
                    </template>
                </template>
            </template>
            <template #cell(more)="row">
                
                <b-button size="sm" class="mr-2" variant="primary" @click="editAddress(row.item)">
                    Изменить
                </b-button>
                <b-button size="sm" class="mr-2" variant="danger" @click="submitRemoveAddress(row.item)">
                    Удалить
                </b-button>
            </template>
        </b-table>
        <b-button size="sm" class="mr-2" variant="success" @click="addAddress">
            Добавить
        </b-button>
        <AddressForm :addressProp="address" @submit-action="onSubmit"/>
        <ModalConfirm :modalTitle="'Удалить адрес?'" @submit-action="onSubmitRemove"/>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import AddressForm from '@/components/AddressForm.vue'
import ModalConfirm from '@/components/ModalConfirm.vue'
import pizzaApi from '@/api/pizzaApi'

export default {
    name: 'DeliveryAddresses',
    components: {
        AddressForm,
        ModalConfirm
    },
    data() {
        return {
            fields:[
                {
                    key: 'address',
                    label: 'Адрес',
                    sortable: true
                },
                {
                    key: 'more',
                    label: ''
                },
                
            ],
            address:{
            },
            addressAction:''
        }
    },
    computed: {
        ...mapState( {
        customer: 'customer'
        })
        
    },
    methods:{

        ...mapActions([
        'getCustomer'
        ]),
        doSomething(item){
            console.log(item)
            this.address = item
            
            //this.$bvModal.show('modal-address')
        },
        addAddress(){
            this.address = {}
            this.addressAction = 'add'
            this.$bvModal.show('modal-address')
        },
        editAddress(item){
            console.log(item)
            this.address = item
            this.addressAction = 'edit'

            this.$bvModal.show('modal-address')
        },
        submitRemoveAddress(item){
            this.address = item
            this.$bvModal.show('modal-confirm')
        },
        async onSubmit(address){
            if(this.addressAction === 'add'){
                await pizzaApi.customer.createCustomerAddress(1,address)
            }
            else if (this.addressAction === 'edit'){
                await pizzaApi.customer.editCustomerAddress(1,address.id,address)
            }
            this.getCustomer(1)
        },
        async onSubmitRemove(){
            await pizzaApi.customer.removeCustomerAddress(1,this.address.id)
            this.getCustomer(1)
        }
    }
}
</script>