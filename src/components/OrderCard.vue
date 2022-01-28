<template>
<div id="order-card" class="main">
<div class="order-card-block">

    <div class="order-card-head">
        <p>{{order.createTime|orderTime}}</p>
        <p v-if="order.address===undefined">
        Самовывоз из ресторана
        </p>
        <p v-else>
        г. {{order.address.city}},
         ул. {{order.address.street}},
          д. {{order.address.numberOfBuild}}
          <span 
            v-if="order.address.numberOfEntrance !== undefined"
            >
            , под. {{order.address.numberOfEntrance}},
            кв. {{order.address.apartment}}
            </span>
        </p>
        <p>{{order.status|status}}</p>
    </div>
    
    <div class="order-card-dishes">
        <table 
            role="table"
            >
        <tbody>    
            <tr 
                role="row"
                v-for="dish in order.dishes"
                :key="dish.id"
                >
                <td role="cell" class="first-column">{{dish.productName}}</td>
                <td role="cell" class="quantity-column">{{dish.quantity}}шт.</td> 
                <td role="cell" class="price-column">{{dish.price * dish.quantity}}₽</td>
            </tr>
        </tbody>
        <tfoot>
            <tr v-if="order.discountSum > 0">
                <td colspan="2" class="first-column">Размер скидки</td>
                <td class="price-column">{{order.discountSum}}₽</td>
            </tr>
            <tr>
                <td colspan="2" class="first-column">Итого</td>
                <td class="price-column">{{order.totalSum}}₽</td>
            </tr>
        </tfoot>
            
        </table>

    </div>
</div>
</div>
</template>

<script>
//import {mapState} from 'vuex'
export default {
    name:'OrderCard',
    props:['order'],
    filters:{
        status(value){
            if(!value) return '';
            switch(value){
                case 'New':
                return 'Новый';

                case 'Confirmed':
                return 'Подтвержден';

                case 'Preparing':
                return 'Готовится';

                case 'OnTheWay':
                return 'В пути';

                case 'Delivered':
                return 'Доставлен';

                case 'Cancelled':
                return 'Отменен';
        
            }
            return '';
        },
        orderTime(value){
            if(!value) return '';
            var date = new Date(value);

            var options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                timezone: 'UTC'
            };
            
            return date.toLocaleString('ru',options);
        }
    },
    //computed: {
    //    ...mapState( {
    //    customer: 'customer'
    //    })
    //}
}
</script>