<template>
  <div class="home">
    <commit-chart :react_data="react_data" />
    <div class="vue-div">
      <h1>{{ message }}</h1>
      <br />
      <h2 class="title">Vue.Js</h2>
      <h2>Forks:</h2>
      <h4 class="data">{{ vue_data.forks_count }}</h4>
      <h2>Watchers:</h2>
      <h4 class="data">{{ vue_data.watchers }}</h4>
      <h2>Stars:</h2>
      <h4 class="data">{{ vue_data.stargazers_count }}</h4>
    </div>
    <br />
    <div class="angular">
      <h2 class="title">Angular.Js</h2>
      <h2>Forks:</h2>
      <h4 class="data">{{ angular_data.forks_count }}</h4>
      <h2>Watchers:</h2>
      <h4 class="data">{{ angular_data.watchers }}</h4>
      <h2>Stars:</h2>
      <h4 class="data">{{ angular_data.stargazers_count }}</h4>
    </div>
    <br />
    <div class="ember">
      <h2 class="title">Ember.Js</h2>
      <h2>Forks:</h2>
      <h4 class="data">{{ ember_data.forks_count }}</h4>
      <h2>Watchers:</h2>
      <h4 class="data">{{ ember_data.watchers }}</h4>
      <h2>Stars:</h2>
      <h4 class="data">{{ ember_data.stargazers_count }}</h4>
    </div>
    <br />
    <div class="svelte">
      <h2 class="title">Svelte.Js</h2>
      <h2>Forks:</h2>
      <h4 class="data">{{ svelte_data.forks_count }}</h4>
      <h2>Watchers:</h2>
      <h4 class="data">{{ svelte_data.watchers }}</h4>
      <h2>Stars:</h2>
      <h4 class="data">{{ svelte_data.stargazers_count }}</h4>
    </div>
    <br />
    <div class="react">
      <h2 class="title">React</h2>
      <h2>Forks:</h2>
      <h4 class="data">{{ react_data.forks_count }}</h4>
      <h2>Watchers:</h2>
      <h4 class="data">{{ react_data.watchers }}</h4>
      <h2>Stars:</h2>
      <h4 class="data">{{ react_data.stargazers_count }}</h4>
    </div>
  </div>
</template>

<style>
.title {
  text-decoration: underline;
}

.data {
  color: #42b983;
}
</style>

<script>
import axios from "axios";
import VueCharts from "vue-chartjs";
import CommitChart from "../components/CommitChart";

export default {
  mounted() {
    // Overwriting base render method with actual data.
  },
  components: { CommitChart },
  data: function () {
    return {
      message: "JS Framework Watcher",
      vue_data: "",
      angular_data: "",
      ember_data: "",
      svelte_data: "",
      react_data: "",
    };
  },
  created: function () {
    this.vueData();
    this.angularData();
    this.emberData();
    this.svelteData();
    this.reactData();
  },

  methods: {
    // vueData
    vueData: function () {
      axios.get("https://api.github.com/repos/vuejs/vue").then((response) => {
        console.log("vue", response.data);
        this.vue_data = response.data;
      });
    },
    // angularData
    angularData: function () {
      axios.get("https://api.github.com/repos/angular/angular.js").then((response) => {
        console.log("angular", response.data);
        this.angular_data = response.data;
      });
    },
    //emberData
    emberData: function () {
      axios.get("https://api.github.com/repos/emberjs/ember.js").then((response) => {
        console.log("ember", response.data);
        this.ember_data = response.data;
      });
    },
    // svelteData
    svelteData: function () {
      axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => {
        console.log("svelte", response.data);
        this.svelte_data = response.data;
      });
    },
    // reactData
    reactData: function () {
      axios.get("https://api.github.com/repos/facebook/react").then((response) => {
        console.log("react", response.data);
        this.react_data = response.data;
      });
    },
  },
};
</script>
