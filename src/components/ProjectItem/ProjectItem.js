import React from "react";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import coverImg from "../../assets/image/project-item-header-background.png";
import "./ProjectItem.css"

export const ProjectItem = ({ data }) => {
     return (
          <div className="project-item-container">
               <div className="project-item-header">
                    <h6>{data.domain}</h6>
                    <FontAwesomeIcon className="event-item-ellipsis" icon={faEllipsisVertical} />
               </div>
               <div className="project-item-body">
                    <img src={coverImg} alt="cover" />
                    <h5>{data.name}</h5>
                    <div>
                         <p>Lead by {data.leadBy}</p>
                         <button>{data.date}</button>
                    </div>
               </div>
               <div className="project-item-footer">
                    <span>
                         <FontAwesomeIcon icon={faCircleCheck} className="icon"/>
                         {data.activeMembers}/{data.totalMembers}
                         </span>

               </div>
          </div>
     );
};
