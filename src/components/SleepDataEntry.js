import { nanoid } from "nanoid";
import { numberFixer } from "./Helpers";

const DataForm = (props) => {
  const { onNewEntryCreation } = props;

  const handleNewDataEntry = (e) => {
    e.preventDefault();
    const newEntry = {
      sleepScore: parseInt(e.target.sleepScore.value),
      totalDuration: numberFixer([
        parseInt(e.target.totalHours.value),
        parseInt(e.target.totalMinutes.value),
      ]),
      deepDuration: numberFixer([
        parseInt(e.target.deepHours.value),
        parseInt(e.target.deepMinutes.value),
      ]),
      lightDuration: numberFixer([
        parseInt(e.target.lightHours.value),
        parseInt(e.target.lightMinutes.value),
      ]),
      REMDuration: numberFixer([
        parseInt(e.target.REMHours.value),
        parseInt(e.target.REMMinutes.value),
      ]),
      awakeDuration: numberFixer([
        parseInt(e.target.awakeHours.value),
        parseInt(e.target.awakeMinutes.value),
      ]),
      timeToBed: parseInt(e.target.timeToBedHours.value),
      timeToWake: numberFixer([
        parseInt(e.target.timeToWakeHours.value),
        parseInt(e.target.timeToWakeMinutes.value),
      ]),
      date: new Date().toLocaleDateString("en-US"),
      id: nanoid(),
    };
    console.log(newEntry);
    onNewEntryCreation(newEntry);
  };

  return (
    <form className="ui form" onSubmit={handleNewDataEntry}>
      <div className="fields">
        <div className="four wide field">
          <label className="label">Score</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="sleepScore"
              placeholder="Sleep Score"
            />
          </div>
        </div>
        <div className="four wide field">
          <label className="label">Total: Hours</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="totalHours"
              placeholder="Total Hours"
            />
          </div>
        </div>
        <div className="four wide field">
          <label className="label">Total: Minutes</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="totalMinutes"
              placeholder="Total Minutes"
            />
          </div>
        </div>{" "}
        <div className="four wide field">
          <label className="label">Deep Sleep: Hours</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="deepHours"
              placeholder="Deep Sleep Hours"
            />
          </div>
        </div>
      </div>
      <div className="fields">
        <div className="four wide field">
          <label className="label">Deep Sleep: Minutes</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="deepMinutes"
              placeholder="Deep Sleep Minutes"
            />
          </div>
        </div>

        <div className="four wide field">
          <div className="control">
            <label className="label">Light Sleep: Hours</label>
            <input
              className="input"
              type="number"
              name="lightHours"
              placeholder="Light Sleep Hours"
            />
          </div>
        </div>
        <div className="four wide field">
          <div className="control">
            <label className="label">Light Sleep: Minutes</label>
            <input
              className="input"
              type="number"
              name="lightMinutes"
              placeholder="Light Sleep Minutes"
            />
          </div>
        </div>
      </div>
      <div className="fields">
        <div className="four wide field">
          <div className="control">
            <label className="label">REM Sleep: Hours</label>
            <input
              className="input"
              type="number"
              name="REMHours"
              placeholder="REM Sleep Hours"
            />
          </div>
        </div>
        <div className="four wide field">
          <div className="control">
            <label className="label">REM Sleep: Minutes</label>
            <input
              className="input"
              type="number"
              name="REMMinutes"
              placeholder="REM Sleep Minutes"
            />
          </div>
        </div>
        <div className="four wide field">
          <div className="control">
            <label className="label">Awake: Hours</label>
            <input
              className="input"
              type="number"
              name="awakeHours"
              placeholder="Awake Hours"
            />
          </div>
        </div>
        <div className="four wide field">
          <div className="control">
            <label className="label">Awake: Minutes</label>
            <input
              className="input"
              type="number"
              name="awakeMinutes"
              placeholder="Awake Minutes"
            />
          </div>
        </div>
      </div>
      <div className="fields">
        <div className="four wide field">
          <div className="control">
            <label className="label">Bed Time: Hours</label>
            <input
              className="input"
              type="number"
              name="timeToBedHours"
              placeholder="Time To Bed"
            />
          </div>
        </div>
        <div className="four wide field">
          <div className="control">
            <label className="label">Bed Time: Minutes</label>
            <input
              className="input"
              type="number"
              name="timeToBedMinutes"
              placeholder="Time To Bed"
            />
          </div>
        </div>
        <div className="four wide field">
          <div className="control">
            <label className="label">Wake Time: Hour</label>
            <input
              className="input"
              type="number"
              name="timeToWakeHours"
              placeholder="Time Awake: Hour"
            />
          </div>
        </div>
        <div className="four wide field">
          <div className="control">
            <label className="label">Wake Time: Minutes</label>
            <input
              className="input"
              type="number"
              name="timeToWakeMinutes"
              placeholder="Time Awake Minutes"
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-12">
          <button type="submit" className="ui button">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default DataForm;
