import React from "react";
import { Grid } from "@mui/material";
import { Icon } from "@iconify/react";
import skillsData from "../utils/Skills";
import PageTitle from "../components/PageTitle";
import Body2Typography from "../components/Body2Typography";

const Skills = () => {
  return (
    <div id="Skills">
      <PageTitle title="Skills" />
      <Grid item container justifyContent="center" sx={{ mb: 5 }}>
        {skillsData.length > 0 &&
          skillsData.map((skill, index) => (
            <Grid
              key={index}
              item
              container
              justifyContent="center"
              sx={{ width: "100px", height: "100px", m: 1 }}
            >
              <Grid
                item
                container
                justifyContent="center"
                direction="column"
                alignItems="center"
              >
                <Grid item>
                  <Icon icon={skill.icon} width="40px" height="40px" />
                </Grid>
                <Grid item>
                  <Body2Typography>{skill.name}</Body2Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Skills;
