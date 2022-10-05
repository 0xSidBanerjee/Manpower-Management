import React from "react"
import "./EventContainer.css"
import EventItem from "./EventItem/EventItem"

const EventArray=[
    {
        key:0,
        domain:"content",
        name:"Copywriting Content",
        leadBy:"Kiara",
        date:"Aug 20,2021",
    },
]

export default function EventContainer() {
    return(
        <>
            <h2 className="event-header">Upcoming Events:</h2>
            <div className="event-container">
                {EventArray.map(item=> (<EventItem key={item.key} data={item}/>))}
            </div>
        </>
    )
}


