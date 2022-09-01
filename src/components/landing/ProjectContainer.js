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
        description:"",
        link:""
    },
    {
        key:2,
        name:"Copywriting Content",
        leadBy:"Kiara",
        completion:60,
        start:"3:00 am",
        description:"",
        link:""
    },
    {
        key:3,
        name:"App Designing",
        leadBy:"David",
        completion:40,
        start:"3:00 am",
        description:"",
        link:""
    },
    {
        key:4,
        name:"App Designing",
        leadBy:"David",
        completion:40,
        start:"3:00 am",
        description:"",
        link:""
    },
    {
        key:5,
        name:"App Designing",
        leadBy:"David",
        completion:40,
        start:"3:00 am",
        description:"",
        link:""
    }
]

export default function ProjectContainer() {
    const name=projectArray.map(abc)
    return(
        <>
            <h2>Ongoing Projects:</h2>
            <div className="project-container">
                {name}
            </div>
        </>
    )
}

function abc(obj) {
    return(<ProjectItem key={obj.key} data={obj}/>)
}

// callback function
// arrow function 
// map filter reduce
// props
// key 

// npm install 
