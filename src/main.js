import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  BootstrapVue,
  IconsPlugin,
  AvatarPlugin,
  FormSpinbuttonPlugin,
  SidebarPlugin,
} from "bootstrap-vue";
import VueScrollTo from "vue-scrollto";

import "/src/Style/style.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(AvatarPlugin);
Vue.use(FormSpinbuttonPlugin);
Vue.use(SidebarPlugin);

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -95,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
