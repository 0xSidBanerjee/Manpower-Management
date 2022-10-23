import React from "react";
import "./DashboardProjectItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faClock, faBell } from "@fortawesome/free-regular-svg-icons";

export default function DashboardProjectItem({data}) {
  console.log(data);
  return (
    <div className="dashboard-project-item">
      <div className="dashboard-project-item-header">
        <button className="dashboard-project-item-header-button">
          <FontAwesomeIcon
            className="dashboard-project-item-header-button-icon"
            icon={faCirclePlay}
          />
        </button>
        <div className="dashboard-project-item-header-start">
          <p>Start from</p>
          <p>
            <FontAwesomeIcon
              className="dashboard-project-item-header-start-icon"
              icon={faClock}
            />
            {data.start}
          </p>
        </div>
      </div>

      <div className="dashboard-project-item-body">
        <h3>{data.name}</h3>
        <p>Lead by {data.leadBy}</p>

        <div className="dashboard-project-item-completion">
          <p>{data.completion}% completed</p>
          <div className="completion-bar-background">
            <div
              className="completion-bar"
              style={{ width: data.completion + "%" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="dashboard-project-item-footer">
        <button>
          <FontAwesomeIcon icon={faBell} />
          <span>Reminder</span>
        </button>
        <a href={data.link} rel="noreferrer" target="_blank">
          Show More
        </a>
      </div>
    </div>
  );
}
