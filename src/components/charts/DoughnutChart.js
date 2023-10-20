import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const data = {
    labels: ["Direct", "Social", "Referral"],
    datasets: [
      {
        label: "# of Votes",
        data: [55, 30, 15],
        backgroundColor: ["#5672d8", "#60b6c9", "#5ec58f"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
}

export default DoughnutChart;
