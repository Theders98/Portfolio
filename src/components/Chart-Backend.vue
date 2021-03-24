<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  name: "ChartBackend",
  props: ["data"],
  mounted() {
    // color list below came from https://stackoverflow.com/a/45489530/52160
    // reformat in the way the lib wants
    let chartData = {
      labels: [],
      datasets: [
        {
          label: "Views by Category",
          data: [],
          backgroundColor: [
            "#41B883",
            "#D6002F",
            "#183353",
            "#F7DF1E",
            "#7377AD",
            "#65B743"
          ]
        }
      ]
    };

    for (let category in this.data) {
      chartData.labels.push(category);
      chartData.datasets[0].data.push(this.data[category]);
    }

    this.renderChart(chartData, {
      responsive: true,
      maintainAspectRatio: false
    });
  }
};
</script>