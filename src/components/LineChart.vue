<template>
  <canvas id="myChart" width="400" height="400"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  data() {
    return {
      //   線圖資料
      data: {
        // Utils.months({count: 7}),
        labels: ["jan", "feb", "mar", "apri", "may", "jun", "july"],
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1, //值越大越圓滑,
            datasetStrokeWidth: 5,
          },
        ],
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      },
      //   甜圈圖資料
      // data: {
      //   labels: ["Red", "Blue", "Yellow"],
      //   datasets: [
      //     {
      //        label: "My First Dataset",
      //        data: [300, 50, 100],
      //        backgroundColor: [
      //          "rgb(255, 99, 132)",
      //          "rgb(54, 162, 235)",
      //          "rgb(255, 205, 86)",
      //        ],
      //        hoverOffset: 4,
      //     },
      //   ],
      // }
    };
  },
  mounted() {
    // 全圖預設文字大小
    Chart.defaults.font.size = 20;
    const ctx = document.getElementById("myChart");
    // 線圖
    const myChart = new Chart(ctx, {
      type: "line",
      data: this.data,
      // options: this.options
      options: {
        scales: {
          x: {
            // type: "time",
            // min: new Date("2019-01-01").valueOf(),
            // max: new Date("2019-12-31").valueOf(),
          },
          y: {
            display: true, // 關閉 y 軸顯示資料
            beginAtZero: true, // 起始值
            min: 0, //  固定數值，最小是 0
            max: 200, // 最大值
            stepSize: 1,
            // ticks: {
            fontSize: 50,
            fontColor: "green",
            // }
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value) {
                return "$" + value;
              },
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              // This more specific font property overrides the global property
              font: {
                size: 30, //標籤文字大小
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", //文字字體
                color: '#fa0',
                padding: 20
              },
              color: '#fa0' //標籤顏色
            },
          },
        },
        layout: {
          padding: 150, //圖表最外層padding
        },
      },
    });
    myChart;

    // 甜甜圈圖
    // const myChart = new Chart(ctx, {
    //   type: "doughnut",
    //   data: this.data,
    // });
    // myChart

    // 長條圖
    // const myChart = new Chart(ctx, {
    //   type: "bar",
    //   data: {
    //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //     datasets: [
    //       {
    //         label: "# of Votes",
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //           "rgba(255, 99, 132, 0.2)",
    //           "rgba(54, 162, 235, 0.2)",
    //           "rgba(255, 206, 86, 0.2)",
    //           "rgba(75, 192, 192, 0.2)",
    //           "rgba(153, 102, 255, 2)",
    //           "rgba(255, 159, 64, 2)",
    //         ],
    //         borderColor: [
    //           "rgba(255, 99, 132, 1)",
    //           "rgba(54, 162, 235, 1)",
    //           "rgba(255, 206, 86, 1)",
    //           "rgba(75, 192, 192, 1)",
    //           "rgba(153, 102, 255, 1)",
    //           "rgba(255, 159, 64, 1)",
    //         ],
    //         borderWidth: 1,
    //       },
    //       {
    //         label: "# of Votes",
    //         data: [5, 19, 8, 5, 2, 7],
    //         backgroundColor: [
    //           "rgba(255, 99, 132, 0.2)",
    //           "rgba(54, 162, 235, 0.2)",
    //           "rgba(255, 206, 86, 0.2)",
    //           "rgba(75, 192, 192, 0.2)",
    //           "rgba(153, 102, 255, 2)",
    //           "rgba(255, 159, 64, 2)",
    //         ],
    //         borderColor: [
    //           "rgba(255, 99, 132, 1)",
    //           "rgba(54, 162, 235, 1)",
    //           "rgba(255, 206, 86, 1)",
    //           "rgba(75, 192, 192, 1)",
    //           "rgba(153, 102, 255, 1)",
    //           "rgba(255, 159, 64, 1)",
    //         ],
    //         borderWidth: 1,
    //       },
    //     ],
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //       },
    //     },
    //   },

    // });
    // myChart
  },
};
</script>
