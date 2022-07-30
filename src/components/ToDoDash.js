import $ from "jquery";
import "./App.css";

const ToDoDash = () => {
  $(document).ready(function () {
    $(".ui.accordion").accordion();
    $(".ui.checkbox").checkbox("toggle");
  });

  const weekdayModel = {
    dataOne: "test",
    dataTwo: "test",
    periods: {
      bootup: {
        title: "Bootup",
        startTime: "",
        endTime: "",
        tasks: [
          {
            id: 1,
            title: "Journal",
            description: "Record any dreams",
            completed: false,
          },
          {
            id: 2,
            title: "Track Data",
            description: "Record sleep, weight, internet usage data",
            completed: false,
          },
          {
            id: 3,
            title: "Hydrate",
            description: "Electrolyte formula",
            completed: false,
          },
          {
            id: 4,
            title: "Supplement Stack",
            description: "Take them",
            completed: false,
          },
          {
            id: 5,
            title: "Email Sort",
            description: "Clean, prioritize, add to plan",
            completed: false,
          },
          {
            id: 6,
            title: "Day Planning",
            description: "Assign tasks to work blocks",
            completed: false,
          },
        ],
      },
      workBlockOne: {
        title: "Work Block One",
        startTime: "",
        endTime: "",
        tasks: [
          {
            id: 1,
            title: "Work",
            description: "do some work",
            completed: false,
          },
        ],
      },
      lunch: {
        title: "Lunch",
        startTime: "",
        endTime: "",
        tasks: [
          {
            id: 1,
            title: "Eat",
            description: "keto",
            completed: false,
          },
          {
            id: 2,
            title: "Take midday supplements",
            description: "",
            completed: false,
          },
          {
            id: 3,
            title: "Email check-in",
            description: "clean, sort, organize, add to plan",
            completed: false,
          },
          {
            id: 4,
            title: "Reprioritize",
            description: "adjust todo list",
            completed: false,
          },
          {
            id: 5,
            title: "Meditation",
            description: "clear your head",
            completed: false,
          },
        ],
      },
      workBlockTwo: {
        title: "Work Block Two",
        startTime: "",
        endTime: "",
        tasks: [
          {
            id: 1,
            title: "Work",
            description: "do some work",
            completed: false,
          },
        ],
      },
      workShutdown: {
        title: "Work Shutdown",
        startTime: "",
        endTime: "",
        tasks: [
          {
            id: 1,
            title: "Email check-in",
            description: "clean, sort, organize, add to plan",
            completed: false,
          },
          {
            id: 2,
            title: "Reprioritize",
            description: "adjust todo list",
            completed: false,
          },
          {
            id: 3,
            title: "Plan tomorrow",
            description: "move daytime todos to tomorrow",
            completed: false,
          },
        ],
      },
    },
    notes: [],
  };

  // array of period objects
  let periodsArray = Object.entries(weekdayModel.periods);

  const result = periodsArray.map((item, index) => {
    let period = item[1];
    return (
      <div key={index} className="checklist-block">
        <div className="ui styled fluid accordion">
          <div className="title">
            <i className="dropdown icon"></i>
            {period.title}
          </div>
          <div className="content">
            <table className="ui celled fluid table">
              <tbody>
                {period.tasks.map((task, taskIndex) => {
                  return (
                    <tr key={taskIndex} className="row">
                      <td>
                        <div className="ui checkbox">
                          <input
                            type="checkbox"
                            name="example"
                            value={task.title}
                            checked={task.completed}
                            onChange={() => {
                              task.completed = !task.completed;
                            }}
                          />
                          <label>
                            {task.title}: {task.description}
                          </label>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <h1 className="ui center aligned header">ToDo</h1>
      {result}
    </>
  );
};

export default ToDoDash;
