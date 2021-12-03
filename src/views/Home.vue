<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <br/>
    <h2 class="vue">Vue.Js</h2>
    <h2> {{vue_data.forks_count}} </h2>
    <h2> {{vue_data.watchers}} </h2>
    <h2> {{vue_data.stargazers_count}} </h2>
  </div>
</template>

<style>
.vue {
  text-decoration: underline;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "JS Framework Watcher",
      vue_data: "",
    };
  },
  created: function () {
    this.vueID();
  },

  methods: {
    // vueID
    vueID: function () {
      axios.get("https://api.github.com/repos/vuejs/vue").then((response) => {
        console.log("id", response.data);
        this.vue_data = response.data;
      });
    },
  },
};
</script>