import React from "react";
import "./ProjectItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faClock, faBell } from "@fortawesome/free-regular-svg-icons";

export default function ProjectItem({ data }) {
  console.log(data);
  return (
    <div className="project-item">
      <div className="project-item-header">
        <button className="project-item-header-button">
          <FontAwesomeIcon
            className="project-item-header-button-icon"
            icon={faCirclePlay}
          />
        </button>
        <div className="project-item-header-start">
          <p>Start from</p>
          <p>
            <FontAwesomeIcon
              className="project-item-header-start-icon"
              icon={faClock}
            />
            {data.start}
          </p>
        </div>
      </div>

      <div className="project-item-body">
        <h3>{data.name}</h3>
        <p>Lead by {data.leadBy}</p>

        <div className="project-item-completion">
          <p>{data.completion}% completed</p>
          <div className="completion-bar-background">
            <div
              className="completion-bar"
              style={{ width: data.completion + "%" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="project-item-footer">
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
