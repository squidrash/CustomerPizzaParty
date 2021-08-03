<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>PizzaParty</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

     <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/">Меню</router-link></b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link to="/cart">
              <b-icon icon="basket"></b-icon> Корзина
          </router-link>
        </b-nav-item>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>
                <b-avatar variant="primary"></b-avatar>
            </em>
          </template>
          <b-dropdown-item><router-link to="/profile">Личные данные</router-link></b-dropdown-item>
          <b-dropdown-item>Адреса</b-dropdown-item>
          <b-dropdown-item>Заказы</b-dropdown-item>
          <b-dropdown-item>Выход</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name: 'NavBar'
    
}
</script>