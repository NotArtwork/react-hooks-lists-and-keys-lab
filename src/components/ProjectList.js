import React from "react";
import ProjectItem from "./ProjectItem";

let a = 0

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list" >
        {projects.map((project, index) => {
          return (
            <ProjectItem name={project.name} about={project.about} technologies={project.technologies} key={a++}/>
          )})}
          </div>
    </div>
  );
}

export default ProjectList;
