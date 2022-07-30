import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

const SleepBreakdownGraph = (props) => {
  const { sleepData, refreshData } = props;

  const data = {
    labels: ["Deep Sleep", "Light Sleep", "REM Sleep", "Time Awake"],
    datasets: [
      {
        data: [
          sleepData.avgDeepDuration,
          sleepData.avgLightDuration,
          sleepData.avgREMDuration,
          sleepData.avgAwakeDuration,
        ],
        backgroundColor: [
          "rgb(44, 62, 80)",
          "rgb(52, 152, 219)",
          "rgb(155, 89, 182)",
          "rgb(241, 196, 15)",
        ],
        hoverOffset: 0,
      },
    ],
  };

  const options = {
    rotation: 180,
    circumference: 360,
    cutout: 200,
  };

  refreshData();

  return <Doughnut data={data} options={options} />;
};

export default SleepBreakdownGraph;
