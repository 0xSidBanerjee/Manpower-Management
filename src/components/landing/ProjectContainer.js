import React from "react"
import "./ProjectContainer.css"
import ProjectItem from "./ProjectItem"

const projectArray=[
    {
        key:0,
        name:"Copywriting Content",
        leadBy:"Kiara",
        completion:60,
        start:"3:00 am",
        description:"",
        link:""
    },
    {
        key:1,
        name:"App Designing",
        leadBy:"David",
        completion:40,
        start:"3:00 am",
        description:""
    },
    {
        key:2,
        name:"Copywriting Content",
        leadBy:"Kiara",
        completion:60,
        start:"3:00 am",
        description:""
    },
    {
        key:3,
        name:"App Designing",
        leadBy:"David",
        completion:40,
        start:"3:00 am",
        description:""
    },
    {
        key:4,
        name:"App Designing",
        leadBy:"David",
        completion:40,
        start:"3:00 am",
        description:""
    },
    {
        key:5,
        name:"App Designing",
        leadBy:"David",
        completion:40,
        start:"3:00 am",
        description:""
    }
]

export default function ProjectContainer() {
    return(
        <>
            <h2>Ongoing Projects:</h2>
            <div className="project-container">
                {projectArray.map(item=> <ProjectItem key={item.key} data={item}/>)}
            </div>
        </>
    )
}
