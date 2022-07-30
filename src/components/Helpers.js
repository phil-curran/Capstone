// helper functions
export const numberFixer = (arg) => {
  let hours = arg[0];
  let minutes = arg[1] / 60;
  return hours + minutes;
};

export const timeFixer = (arg) => {
  if (arg % 1 == 0) {
    return `${arg}:00`;
  } else {
    let hours = arg - (arg % 1);
    let minutes = (arg % 1) * 60;
    minutes = Math.round((minutes * 100) / 100);
    return `${hours}:${minutes}`;
  }
};

export const keys = [
  "sleepScore",
  "totalDuration",
  "deepDuration",
  "lightDuration",
  "REMDuration",
  "awakeDuration",
  "timeToBed",
  "timeToWake",
];

export const values = [
  "avgSleepScore",
  "avgDuration",
  "avgDeepDuration",
  "avgLightDuration",
  "avgREMDuration",
  "avgAwakeDuration",
  "avgTimeToBed",
  "avgTimeToWake",
];

export const display = (arg) => {
  if (isNaN(arg)) return "";
  else return arg;
};
