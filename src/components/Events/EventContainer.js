import React from "react"
import "./EventContainer.css"
import EventItem from "./EventItem/EventItem"

const EventArray=[
    {
        key:0,
        name:"Copywriting SVGTextContentElement",
        leadBy:"Kiara",
        date:"Aug 20,2021",
        description:"",
    },
    {
        key:1,
        name:"Copywriting SVGTextContentElement",
        leadBy:"Kiara",
        date:"Aug 20,2021",
        description:"",
    },
    {
        key:2,
        name:"Copywriting SVGTextContentElement",
        leadBy:"Kiara",
        date:"Aug 20,2021",
        description:"",

    }
]

export default function EventContainer() {
    return(
        <>
            <h2>Upcoming Events:</h2>
            <div className="Event-container">
                {EventArray.map(item=> <EventItem key={item.key} data={item}/>)}
            </div>
        </>
    )
}


