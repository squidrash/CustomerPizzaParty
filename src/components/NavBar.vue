<template>
  <div class="navbar_block">
    <div class="navbar__row">
      <div class="navbar__column navbar__column_title">
        <router-link tag="div" class="link_style" to="/menu">
          <div class="navbar__item navbar__item_title">PizzaParty</div>
        </router-link>
      </div>

      <div class="navbar__column navbar__column_menu">
        <router-link tag="div" class="link_style" to="/menu">
          <div class="navbar__item navbar__item_menu">Меню</div>
        </router-link>
      </div>

      <div class="navbar__column navbar__column_cart">
        <router-link tag="div" class="link_style" to="/cart">
          <div class="navbar__item">Корзина</div>
        </router-link>
      </div>

      <div class="navbar__column" v-b-toggle.sidebar-right>
        <div class="navbar__item navbar__item_profile">
          <div class="navbar__profile"></div>
        </div>
      </div>
    </div>

    <div>
      <b-sidebar
        style="top:55px"
        id="sidebar-right"
        title="Профиль"
        right
        shadow
        backdrop
      >
        <div>
          <div class="sidebar__column">
            <router-link
              tag="div"
              to="/profile/personal"
              exact-active-class="exact-active"
            >
              <div class="sidebar__row">
                <div class="sidebar__item">Личные данные</div>
              </div>
            </router-link>

            <router-link
              tag="div"
              to="/profile/addresses"
              exact-active-class="exact-active"
            >
              <div class="sidebar__row">
                <div class="sidebar__item">Адреса доставки</div>
              </div>
            </router-link>

            <router-link
              to="/profile/orders"
              exact-active-class="exact-active"
              tag="div"
            >
              <div class="sidebar__row">
                <div class="sidebar__item">Мои заказы</div>
              </div>
            </router-link>

            <div class="sidebar__row">
              <div class="sidebar__item">Выход</div>
            </div>
          </div>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
