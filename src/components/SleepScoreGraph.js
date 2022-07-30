import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

// sleepScore={sleepData.avgSleepScore}
// sleepData={sleepData}
// refreshData={refreshData}

const SleepScoreGraph = (props) => {
  const { sleepScore, refreshData } = props;

  const sleepScoreDifference = 100 - sleepScore;

  const data = {
    labels: ["", ""],
    datasets: [
      {
        data: [sleepScore, sleepScoreDifference],
        backgroundColor: ["rgb(41, 128, 185)", "rgb(236, 240, 241)"],
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

export default SleepScoreGraph;
