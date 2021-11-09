<template>
    <div id='nav'>
        <SideBar/>
        <router-view/>
    </div>
</template>

<script>
    
    import SideBar from '@/components/SideBar.vue'
    import {mapActions } from 'vuex'
    
    export default {
        name:'UserProfile',
        components: {
            SideBar
        },
        methods:{
        ...mapActions([
        'getCustomer'
        ])
        },
        mounted() {
            this.getCustomer(1)
        }
    }
</script>