import React from "react";
import { Grid, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

const Home = (props) => {
  const { mode } = props;
  return (
    <div
      id="Home"
      style={{
        backgroundImage:
          mode === "light"
            ? "url(./MyWebsite/images/sun.jpg)"
            : "url(./MyWebsite/images/night.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw",
        height: `calc(100vh - 55px)`,
        opacity: "0.8",
      }}
    >
      <Grid
        container
        alignItems="center"
        sx={{ width: "100%", height: "100%" }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="h3"
              align="center"
              sx={{
                fontWeight: "bold",
                fontFamily: "monospace",
                color: "inherit",
              }}
            >
              Yu-Jui Chang
            </Typography>
          </Grid>
          <Grid>
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Software Developer",
                1000,
                "Full-Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1.5em",
                display: "inline-block",
                fontFamily: "monospace",
                color: "inherit",
              }}
              repeat={Infinity}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
