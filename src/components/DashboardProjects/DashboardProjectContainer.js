import React from "react";
// import "./DashboardProjectContainer.css";
import "./DahboardProjectContainer.css"
import DashboardProjectItem from "./DashboardProjectItem/DashboardProjectItem";

const projectArray = [
    {
        key: 0,
        name: "Copywriting Content",
        leadBy: "Kiara",
        completion: 60,
        start: "3:00 am",
        description: "",
        link: "",
    },
    {
        key: 1,
        name: "App Designing",
        leadBy: "David",
        completion: 40,
        start: "3:00 am",
        description: "",
        link: "",
    },
    {
        key: 2,
        name: "Copywriting Content",
        leadBy: "Kiara",
        completion: 60,
        start: "3:00 am",
        description: "",
        link: "",
    },
    {
        key: 3,
        name: "App Designing",
        leadBy: "David",
        completion: 40,
        start: "3:00 am",
        description: "",
        link: "",
    },
    {
        key: 4,
        name: "App Designing",
        leadBy: "David",
        completion: 40,
        start: "3:00 am",
        description: "",
        link: "",
    },
    {
        key: 5,
        name: "App Designing",
        leadBy: "David",
        completion: 40,
        start: "3:00 am",
        description: "",
        link: "",
    },
];

export default function ProjectContainer() {
    return (
        <>
            <h2 className="dashboard-project-header">Ongoing dashboard-Projects:</h2>
            <div className="dashboard-project-container">
                {projectArray.map((item) => (
                    <DashboardProjectItem key={item.key} data={item} />
                ))}
            </div>
        </>
    );
}
