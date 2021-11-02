<template>
  <div class="sidenav">
    <b-nav vertical class="w-100">
      <b-nav-item active><router-link to="/profile/personal">Личные данные</router-link></b-nav-item>
      <b-nav-item><router-link to="/profile/orders">Заказы</router-link></b-nav-item>
      <b-nav-item><router-link to="/profile/addresses">Адреса доставки</router-link></b-nav-item>
      <b-nav-item disabled>Выйти</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
  export default {
    name:'SideBar',
  }
</script>