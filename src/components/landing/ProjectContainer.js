import React from "react"
import ProjectItem from "./ProjectItem"

const projectArray=[
    {
        key:0,
        name:"Copywriting Content",
        leadBy:"Kiara",
        completion:80,
        start:"3:00 am",
        description:""
    },
    {
        key:1,
        name:"Copywriting Content",
        leadBy:"Kiara",
        completion:80,
        start:"3:00 am",
        description:""
    },
    {
        key:2,
        name:"Copywriting Content",
        leadBy:"Kiara",
        completion:80,
        start:"3:00 am",
        description:""
    },
    {
        key:3,
        name:"Copywriting Content",
        leadBy:"Kiara",
        completion:80,
        start:"3:00 am",
        description:""
    }
]

export default function ProjectContainer() {
    return(
        <div>
            {projectArray.map(item=> <ProjectItem key={item.key} data={item}/>)}
        </div>
    )
}
