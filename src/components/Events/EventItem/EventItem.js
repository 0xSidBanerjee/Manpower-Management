import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import coverImg from "../../../assets/image/project-item-header-background.png";
import "./EventItem.css";

export default function EventItem({ data }) {
    return (
        <div className="event-item-container">
            <div className="event-item-header">
                <h6>{data.domain}</h6>
                <FontAwesomeIcon
                    className="event-item-ellipsis"
                    icon={faEllipsisVertical}
                />
            </div>
            <div className="event-item-body">
                <img src={coverImg} alt="cover" />
                <h5>{data.name}</h5>
                <div className="event-item-desc">
                    <p>Lead by {data.leadBy}</p>
                    <button>{data.date}</button>
                </div>
            </div>
            <div className="event-item-footer">
                <button>Request to Join</button>
            </div>
        </div>
    );
}
