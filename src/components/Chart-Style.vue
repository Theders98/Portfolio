<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  name: "ChartStyle",
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
            "#72109C",
            "#059BFF",
            "#DC3287"
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