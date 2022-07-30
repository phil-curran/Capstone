import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const SleepLineGraph = (props) => {
  const { sleepData, refreshData } = props;

  const dates = sleepData.map((sleep) => sleep.date);
  const sleepScores = sleepData.map((scores) => scores.sleepScore);
  const sleepDurations = sleepData.map((durations) => durations.totalDuration);
  const sleepDeepDurations = sleepData.map(
    (durations) => durations.deepDuration
  );
  const sleepLightDurations = sleepData.map(
    (durations) => durations.lightDuration
  );
  const sleepREMDurations = sleepData.map((durations) => durations.REMDuration);
  const sleepAwakeDurations = sleepData.map(
    (durations) => durations.awakeDuration
  );
  const sleepTimeToBed = sleepData.map((durations) => durations.timeToBed);
  const sleepTimeToWake = sleepData.map((durations) => durations.timeToWake);

  let tension = 0.4;
  let borderwidth = 4;

  const data = {
    labels: dates,

    datasets: [
      {
        label: "Sleep Scores",
        data: sleepScores,
        fill: true,
        borderColor: "rgba(26, 188, 156,1.0)",
        borderWidth: borderwidth,
        tension: tension,
      },
      {
        label: "Sleep Duration",
        data: sleepDurations,
        fill: false,
        borderColor: "rgba(241, 196, 15,1.0)",
        borderWidth: borderwidth,
        tension: tension,
      },
      {
        label: "Deep Sleep Duration",
        data: sleepDeepDurations,
        fill: false,
        borderColor: "rgba(243, 156, 18,1.0)",
        borderWidth: borderwidth,
        tension: tension,
      },
      {
        label: "Light Sleep Duration",
        data: sleepLightDurations,
        fill: false,
        borderColor: "rgba(46, 204, 113,1.0)",
        borderWidth: borderwidth,
        tension: tension,
      },
      {
        label: "REM Sleep Duration",
        data: sleepREMDurations,
        fill: false,
        borderColor: "rgba(230, 126, 34,1.0)",
        borderWidth: borderwidth,
        tension: tension,
      },
      {
        label: "Awake Durations Duration",
        data: sleepAwakeDurations,
        fill: false,
        borderColor: "rgba(41, 128, 185,1.0)",
        borderWidth: borderwidth,
        tension: tension,
      },
      {
        label: "Time To Bed",
        data: sleepTimeToBed,
        fill: false,
        borderColor: "rgba(231, 76, 60,1.0)",
        borderWidth: borderwidth,
        tension: tension,
      },
      {
        label: "Time Awake",
        data: sleepTimeToWake,
        fill: false,
        borderColor: "rgba(155, 89, 182,1.0)",
        borderWidth: borderwidth,
        tension: tension,
      },
    ],
  };

  const options = {
    backgroundColor: "rgba(189, 195, 199, 0.1)",
  };

  refreshData();

  return <Line data={data} options={options} />;
};

export default SleepLineGraph;
