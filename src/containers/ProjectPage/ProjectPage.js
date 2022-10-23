import React from "react";
import "./ProjectPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { ProjectItem } from "../../components/ProjectItem/ProjectItem";

export const ProjectPage = () => {
  const newProject=[
    {
      key:0,
      domain:"Design",
      name:"Create styleguide foundation",
      details:"Create content for peaceland App",
      date:"Aug 20,2021",
      totalMembers:8,
      activeMembers:0,
    },
    {
      key:0,
      domain:"Design",
      name:"Create styleguide foundation",
      details:"Create content for peaceland App",
      date:"Aug 20,2021",
      totalMembers:8,
      activeMembers:0,
    },
    {
      key:0,
      domain:"Design",
      name:"Create styleguide foundation",
      details:"Create content for peaceland App",
      date:"Aug 20,2021",
      totalMembers:8,
      activeMembers:0,
    },
    {
      key:0,
      domain:"Design",
      name:"Create styleguide foundation",
      details:"Create content for peaceland App",
      date:"Aug 20,2021",
      totalMembers:8,
      activeMembers:0,
    },
    {
      key:0,
      domain:"Design",
      name:"Create styleguide foundation",
      details:"Create content for peaceland App",
      date:"Aug 20,2021",
      totalMembers:8,
      activeMembers:0,
    },
    {
      key:0,
      domain:"Design",
      name:"Create styleguide foundation",
      details:"Create content for peaceland App",
      date:"Aug 20,2021",
      totalMembers:8,
      activeMembers:0,
    },
    {
      key:0,
      domain:"Design",
      name:"Create styleguide foundation",
      details:"Create content for peaceland App",
      date:"Aug 20,2021",
      totalMembers:8,
      activeMembers:0,
    },
    {
      key:0,
      domain:"Design",
      name:"Create styleguide foundation",
      details:"Create content for peaceland App",
      date:"Aug 20,2021",
      totalMembers:8,
      activeMembers:0,
    },
    {
      key:0,
      domain:"Design",
      name:"Create styleguide foundation",
      details:"Create content for peaceland App",
      date:"Aug 20,2021",
      totalMembers:8,
      activeMembers:0,
    },
  ];
     return (
          <div className="project-container">

               <div className="project-header">
                    <div className="project-header-heading">
                         <h1>Projects</h1>
                    </div>
                    <div className="project-header-user-options">
                         <FontAwesomeIcon
                              className="icons header-user-options-icon"
                              icon={faBell}
                         />
                         <FontAwesomeIcon
                              className="icons header-user-options-icon"
                              icon={faCircleUser}
                         />
                         <FontAwesomeIcon
                              className="icons header-user-options-icon"
                              icon={faAngleDown}
                         />
                    </div>
                    <div className="project-header-dropdown">
                         <h3>
                              This Week
                              <FontAwesomeIcon
                                   className="icons header-user-options-icon"
                                   icon={faAngleDown}
                              />
                         </h3>
                    </div>
               </div>

               <div className="project-body">

                    <div className="project-body-item">
                      <h3>New projects</h3>
                      <div className="project-body-item-list">

                        {newProject.map(item=>(
                          <ProjectItem key={item.key} data={item}/>
                          ))}
                      </div>
                    </div>

                    <div className="project-body-item">
                    <h3>Ongoing projects</h3>
                      <div className="project-body-item-list">
                        {newProject.map(item=>(
                          <ProjectItem key={item.key} data={item}/>
                        ))}
                      </div>
                    </div>

                    <div className="project-body-item">
                    <h3>Completed projects</h3>
                      <div className="project-body-item-list">
                        {newProject.map(item=>(
                          <ProjectItem key={item.key} data={item}/>
                        ))}
                      </div>
                    </div>
               </div>
          </div>
     );
};
