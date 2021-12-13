// CommitChart.js
import { Bar } from "vue-chartjs";
import axios from "axios";

export default {
  extends: Bar,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ["Vue", "React", "Ember", "Angular", "Svelte"],
      datasets: [
        {
          label: "GitHub Commits",
          backgroundColor: "#f87979",
          data: [this.vue_data, this.react_data, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
        },
      ],
    });
  },
  data: function () {
    return {
      vue_data: [],
      angular_data: 2,
      ember_data: [],
      svelte_data: [],
      react_data: 13,
    };
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
