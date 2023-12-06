import React from "react";
import { Grid, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import skillsData from "../../utils/Skills";

const Skills = () => {
  return (
    <div id="Skills">
      <Grid
        container
        alignItems="center"
        sx={{ width: "100%", height: "100%" }}
      >
        <Grid item container xs={12}>
          <Grid item container justifyContent="center" xs={12}>
            <Typography
              variant="h4"
              align="center"
              sx={{
                my: 5,
                fontWeight: "bold",
                fontFamily: "monospace",
                color: "inherit",
              }}
            >
              Skills
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" sx={{ mb: 5 }}>
            {skillsData.length > 0 &&
              skillsData.map((skill, index) => (
                <Grid
                  key={index}
                  item
                  container
                  justifyContent="center"
                  sx={{ width: "100px", m: 1 }}
                >
                  <Grid
                    item
                    container
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                  >
                    <Grid item>
                      <Icon icon={skill.icon} width="40px" />
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">{skill.name}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
