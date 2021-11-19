<template>
    <div class="table-size-l">
        <b-table fixed small hover :items='customer.orders' :fields='fields'>
            <template #cell(address)="row">
                <template v-if="row.item.address === undefined">
                    Нет адресса
                </template>
                <template v-else>
                    г {{row.item.address.city}}, ул {{row.item.address.street}},
                    д {{row.item.address.numberOfBuild}}, 
                    <template v-if="row.item.address.numberOfEntrance !== undefined">
                        подъезд {{row.item.address.numberOfEntrance}}, кв {{row.item.address.apartment}}
                    </template>
                </template>
            </template>

            <template #cell(dishes)="row">
                <template v-if="row.item.dishes.length === 0">
                    Блюдо(а) было(и) удалено(ы)
                </template>
                <template v-else-if="row.item.dishes.length === 1">
                    {{row.item.dishes[0].productName}}<br>
                </template>
                <template v-else>
                    {{row.item.dishes[0].productName}},
                    {{row.item.dishes[1].productName}}, ...<br>
                </template>
                <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                    {{ row.detailsShowing ? 'Скрыть' : 'Показать'}} детали
                </b-button>
            </template>

            <template #row-details="row">
                <b-card>
                    <template v-for="dish in row.item.dishes">
                        <b-row class="mb-2" :key='dish.id'>
                            <b-col  class="text-sm-right"><b>Название:</b></b-col>
                            <b-col>{{ dish.productName }}</b-col>
                            <b-col class="text-sm-right"><b>Цена:</b></b-col>
                            <b-col>{{ dish.price }}</b-col>
                            <b-col  class="text-sm-right"><b>Количество:</b></b-col>
                            <b-col>{{ dish.quantity }}</b-col>
                            <b-col  class="text-sm-right"><b>Итого:</b></b-col>
                            <b-col>{{ dish.quantity * dish.price }}</b-col>

                        </b-row>
                    </template>
                </b-card>
            </template>
        </b-table>

        
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'CustomerOrders',
    data() {
        return {
            fields: [
                {
                    key: 'status',
                    label: 'Статус',
                    sortable: true
                },
                {
                    key: 'creatTime',
                    label: 'Дата создания',
                    sortable: true
                },
                {
                    key: "address",
                    label: "Адрес доставки",
                    sortable: true
                },
                {
                    key: "dishes",
                    label: "Блюда",
                    sortable: true
                },
                {
                    key: "totalSum",
                    label: "Сумма"
                }
            ],
        }
    },
    computed: {
        ...mapState( {
        customer: 'customer'
        })
        
    }
}
</script>