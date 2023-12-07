import React from "react";
import { Grid } from "@mui/material";
import projectsData from "../utils/Projects";
import ProjectCard from "../components/ProjectCard";
import PageTitle from "../components/PageTitle";

const Projects = () => {
  return (
    <div id="Projects">
      <PageTitle title="Projects" />
      <Grid item container justifyContent="center" sx={{ mb: 5 }}>
        {projectsData.length > 0 &&
          projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              link={project.link}
              imageLink={project.imageLink}
              content={project.content}
              githubLink={project.githubLink}
            />
          ))}
      </Grid>
    </div>
  );
};

export default Projects;
