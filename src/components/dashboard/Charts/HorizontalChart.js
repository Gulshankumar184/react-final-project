import React, { Component } from "react";
import Chart from "react-apexcharts";
import styles from "./ChartStyles.module.css";

class HorizontalChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            borderRadius: 1,
            horizontal: true,
            distributed: true,
            barHeight: "40%",
          },
        },
        chart: {
          id: "apexchart-example",
          toolbar: {
            show: false,
          },
          foreColor: "#fff",
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: Object.keys(
            JSON.parse(localStorage.getItem("dashboardPage")).performance
          ),
        },
        colors: [
          "#00bfff8f",
          "#0000FF",
          "#4fff00fa",
          "#FFA500",
          "#e600ffd1",
          "#ff0036d1",
          "#e6ff00d1",
        ],
      },
      series: [
        {
          name: "featured",
          data: Object.values(
            JSON.parse(localStorage.getItem("dashboardPage")).performance
          ),
        },
      ],
    };
  }

  render() {
    return (
      <div className={styles.chartcontainer}>
        <h2>Performance</h2>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
        />
      </div>
    );
  }
}

export default HorizontalChart;
