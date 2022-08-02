import React, { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import $ from "jquery";
import Icon from "@mdi/react";
import {
  mdiMonitorDashboard,
  mdiFormatListChecks,
  mdiNotebookOutline,
  mdiBedClock,
  mdiWeightPound,
  mdiChartLine,
} from "@mdi/js";
import "./App.css";

import Dashboard from "./Dashboard";
import ToDoDash from "./ToDoDash";
import JournalDash from "./JournalDash";
import SleepDash from "./SleepDash";
import WeightDash from "./WeightDash";
import InternetDash from "./InternetDash";

const Home = () => {
  const { user, logOut } = useUserAuth();
  const [activePane, setActivePane] = useState(<Dashboard />);
  $(document).ready(() => {
    // sidebar visibility: show on hamburger click
    $(".sidebarMenu").click(() => {
      $(".ui.sidebar")
        .sidebar("setting", "transition", "overlay")
        .sidebar("toggle");
    });

    // sidebar visibility: hide on item click
    $(".sidebar.menu .item").click(() => {
      $(".ui.sidebar").sidebar("toggle");
    });
  });

  let homeBtn = $("#homeBtn");
  let todoBtn = $("#todoBtn");
  let journalBtn = $("#journalBtn");
  let sleepTrackerBtn = $("#sleepTrackerBtn");
  let weightTrackerBtn = $("#weightTrackerBtn");
  let internetUsageBtn = $("#internetUsageBtn");

  let buttons = [
    homeBtn,
    todoBtn,
    journalBtn,
    sleepTrackerBtn,
    weightTrackerBtn,
    internetUsageBtn,
  ];

  let contents = [
    <Dashboard />,
    <ToDoDash />,
    <JournalDash />,
    <SleepDash />,
    <WeightDash />,
    <InternetDash />,
  ];

  buttons.forEach((button) => {
    button.click(() => {
      let position = buttons.indexOf(button);
      contents.forEach((content) => {
        if (contents.indexOf(content) === position) {
          setActivePane(content);
        }
      });
    });
  });

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* hamburger menu */}
      <div className="row">
        <a className="item sidebarMenu">
          <button className="ui icon button sidebarMenu">
            <i className="sidebar icon"></i>
          </button>
        </a>
      </div>
      <div className="row">
        <button className="ui icon button" onClick={handleLogOut}>
          <i className="sign-out icon"></i>
        </button>
      </div>
      {/* actual sidebar */}
      <div className="ui container bottom attached pushable">
        <div className="ui inverted labeled icon left inline vertical sidebar menu">
          <a id="homeBtn" className="item">
            <Icon
              path={mdiMonitorDashboard}
              title="Dashboard"
              color="#e74c3c"
              size={1.5}
            />
          </a>
          <a id="todoBtn" className="item">
            <Icon
              path={mdiFormatListChecks}
              title="To Do"
              color="#f1c40f"
              size={1.5}
            />
          </a>
          <a id="journalBtn" className="item">
            <Icon
              path={mdiNotebookOutline}
              title="Journal"
              color="#1abc9c"
              size={1.5}
            />
          </a>
          <a id="sleepTrackerBtn" className="item">
            <Icon path={mdiBedClock} title="Sleep" color="#3498db" size={1.5} />
          </a>
          <a id="internetUsageBtn" className="item">
            <Icon
              path={mdiChartLine}
              title="Internet Usage"
              color="#e67e22"
              size={1.5}
            />
          </a>
          <a id="weightTrackerBtn" className="item">
            <Icon
              path={mdiWeightPound}
              title="Weight"
              color="#9b59b6"
              size={1.5}
            />
          </a>
        </div>
        <p></p>
        <div className="pusher segment">
          <div className="ui segment">{activePane}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
