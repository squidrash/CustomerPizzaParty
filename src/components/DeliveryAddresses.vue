<template>
    <div class="table-size">
        <b-table fixed small hover :items='customer.addresses' :fields='fields'>
        </b-table>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'DeliveryAddresses',
    data() {
        return {
            fields:[
                {
                    key: 'city',
                    label: 'Город',
                    sortable: true
                },
                {
                    key: 'street',
                    label: 'Улица',
                    sortable: true
                },
                {
                    key: 'numberOfBuild',
                    label: 'Номер дома',
                    sortable: true
                },
                {
                    key: 'numberOfEntrance',
                    label: 'Номер подъезда',
                    sortable: true
                },

                {
                    key: 'apartment',
                    label: 'Квартира',
                    sortable: true
                },
            ]
        }
    },
    computed: {
        ...mapState('customerM', {
        customer: 'customer'
        })
        
    }
}
</script>