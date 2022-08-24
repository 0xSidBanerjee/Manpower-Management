import React from "react"

const projectArray=[
    {
        name:"Copywriting Content",
        leadBy:"Kiara",
        completion:80,
        start:"3:00 am",
        description:""
    },
    {
        name:"Copywriting Content",
        leadBy:"Kiara",
        completion:80,
        start:"3:00 am",
        description:""
    },
    {
        name:"Copywriting Content",
        leadBy:"Kiara",
        completion:80,
        start:"3:00 am",
        description:""
    },
    {
        name:"Copywriting Content",
        leadBy:"Kiara",
        completion:80,
        start:"3:00 am",
        description:""
    }
]

export default function ProjectContainer() {
    {projectArray.map(item=> {
        return(
            <ProjectItem key={projectArray.indexOf(item)} data={item}/>
        )
    })}
}