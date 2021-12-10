// CommitChart.js
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ["react"],
      datasets: [
        {
          label: "GitHub Commits",
          backgroundColor: "#f87979",
          data: [this.react_data],
        },
      ],
    });
  },
  data: function () {
    return {
      react_data: "",
    };
  },
};
