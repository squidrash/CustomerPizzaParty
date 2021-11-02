<template>
    <div class="main">
        <h1>Личные данные</h1>
        <p>Имя: {{user.name}}</p>
        <p>Фамилия: {{user.lastName}}</p>
        <p>Телефон: {{user.phone}}</p>
        <p>Скидка: {{user.discount}}</p>
    </div>

</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'CustomerInfo',
        computed:{
            ...mapState('customerM', {
                user: 'customer'
            })
        }
    }
</script>