import React from "react"

export default function ProjectItem({data}) {
    console.log(data)
    return( 
        <div>
            {data.name}
        </div>
    )
}