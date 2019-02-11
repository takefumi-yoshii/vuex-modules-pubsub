import Vue from "vue";
import App from "./App.vue";
import store from "./stores/index";
import runService from "./services/index"

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

runService(store)
