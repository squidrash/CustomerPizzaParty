<template>
<div>
    <div v-for="order in customer.orders"
        :key="order.id"
        >
        <order-card :order="order"/>
    </div>
</div>
</template>
<script>
import {mapState} from 'vuex'
import OrderCard from '@/components/OrderCard.vue'
export default {
    name: 'CustomerOrders1',
    components:{
        OrderCard
    },
    computed: {
        ...mapState( {
        customer: 'customer'
        })
    }
}
</script>