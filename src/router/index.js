import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../views/Menu.vue'
import Cart from '../views/Cart.vue'
import UserProfile from '../views/UserProfile.vue'
import CustomerInfo from '@/components/CustomerInfo.vue'
// import CustomerOrders from '@/components/CustomerOrders.vue'
import CustomerOrders1 from '@/components/CustomerOrders1.vue'

// import OrderCard from '@/components/OrderCard.vue'
import DeliveryAddresses from '@/components/DeliveryAddresses.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile,
    children: [
      {
        path: 'personal',
        name: 'CustomerInfo',
        component: CustomerInfo
      },
      // {
      //   path: 'orders',
      //   name: 'CustomerOrders',
      //   component: CustomerOrders
      // },
      {
        path: 'orders',
        name: 'CustomerOrders1',
        component: CustomerOrders1
      },
      // {
      //   path: 'orders',
      //   name: 'OrderCard',
      //   component: OrderCard
      // },
      {
        path: 'addresses',
        name: 'DeliveryAddresses',
        component: DeliveryAddresses
      }

    ]
  }
]



const router = new VueRouter({
  routes
})

export default router
