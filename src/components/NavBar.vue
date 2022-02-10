<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="success">
        <b-navbar-brand>PizzaParty</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><router-link to="/menu">Меню</router-link></b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <router-link to="/cart">
                <b-icon icon="basket"></b-icon>
                Корзина
              </router-link>
            </b-nav-item>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>
                  <b-avatar variant="primary"></b-avatar>
                </em>
              </template>
              <b-dropdown-item
                ><router-link to="/profile/personal"
                  >Личные данные</router-link
                ></b-dropdown-item
              >
              <b-dropdown-item
                ><router-link to="/profile/addresses"
                  >Адреса</router-link
                ></b-dropdown-item
              >
              <b-dropdown-item
                ><router-link to="/profile/orders"
                  >Заказы</router-link
                ></b-dropdown-item
              >
              <b-dropdown-item>Выход</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div>
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
