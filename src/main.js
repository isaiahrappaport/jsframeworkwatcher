import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
// import PureVueChart from "pure-vue-chart";
// import CommitChart from "path/to/component/CommitChart";

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
