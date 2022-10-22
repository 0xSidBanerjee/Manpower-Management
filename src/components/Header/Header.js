import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faCircleUser,
    faFile,
    faStar,
} from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faPlus } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <div className="header-container">
            <div className="header-user">
                <div className="header-user-name">
                    <h1>Hello User!</h1>
                </div>
                <div className="header-user-options">
                    <FontAwesomeIcon
                        className="header-user-options-icon"
                        icon={faBell}
                    />
                    <FontAwesomeIcon
                        className="header-user-options-icon"
                        icon={faCircleUser}
                    />
                    <FontAwesomeIcon
                        className="header-user-options-icon"
                        icon={faAngleDown}
                    />
                </div>
            </div>

            <div className="header-task">
                <div className="header-task-count">
                    <h3>You've got 10 tasks today</h3>
                </div>

                <div className="header-task-item">
                    <div>
                        <FontAwesomeIcon
                            className="header-task-item-icon"
                            icon={faFile}
                        />
                        <h1>05</h1>
                    </div>
                    <h3>Current tasks</h3>
                </div>

                <div className="header-task-item">
                    <div>
                        <FontAwesomeIcon
                            className="header-task-item-icon"
                            icon={faStar}
                        />
                        <h1>03</h1>
                    </div>
                    <h3>Upcoming tasks</h3>
                </div>

                <div className="header-task-item">
                    <div>
                        <FontAwesomeIcon
                            className="header-task-item-icon"
                            icon={faPlus}
                        />
                        <h1>Create tasks</h1>
                    </div>
                    <h3>Create a new task</h3>
                </div>
            </div>
        </div>
    );
}

export default Header;
