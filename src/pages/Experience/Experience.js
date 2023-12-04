import React from "react";
import { Grid, Typography, Link, Stack } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkIcon from "@mui/icons-material/Work";
import { Box, Paper } from "@mui/material";
import TimelineChip from "../../components/TimelineChip";
import SchoolIcon from "@mui/icons-material/School";
import LinkIcon from "@mui/icons-material/Link";

const Experience = () => {
  return (
    <div id="Experience">
      <Grid
        container
        alignItems="center"
        sx={{ width: "100%", height: "100%" }}
      >
        <Grid item container justifyContent="center" xs={12}>
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
              Experience
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent
                  color="inherit"
                  sx={{ mt: 1 }}
                  variant="body2"
                >
                  07.2021 - present
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      padding: "20px",
                      borderRadius: "10px",
                      marginBottom: "15px",
                      //   bgcolor: "#faf7d6",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Full-Stack Developer
                    </Typography>
                    <Link
                      href="https://www.sany.org"
                      underline="none"
                      target="_blank"
                    >
                      <Stack direction="row" sx={{ alignItems: "center" }}>
                        <LinkIcon sx={{ mr: "3px" }} />
                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                          Science Academies of New York Charter School
                        </Typography>
                      </Stack>
                    </Link>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      • Contributed to develop a scalable school system based on
                      different requirements with roles including admin,
                      teacher, parent, and student, reducing at least 60% manual
                      work.
                      <br />
                      &nbsp;- Built large-scale web applications in React using
                      various state management practices and open-source React
                      component libraries, including Redux, React Hooks, and
                      Material-UI.
                      <br />
                      &nbsp;- Developed RESTful API services by Node, Express,
                      MySQL, MongoDB, and AWS.
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      • Collaborated remotely with an agile team of 8, using
                      version control systems and project management tools such
                      as Git, Bitbucket, SourceTree, Slack, and Jira.
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      • Successfully managed and mentored a team of 3 interns.
                      Led the development and testing phases in our daily work.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      • Independently designed and accomplished scalable
                      Automated End-To-End Testing from scratch with Cypress,
                      improving the speed of SDLC(Software Development Life
                      Cycle) by 20% or more.
                    </Typography>
                    <Box sx={{ p: 1 }}>
                      <TimelineChip label="React" />
                      <TimelineChip label="Redux" />
                      <TimelineChip label="React Hooks" />
                      <TimelineChip label="Material UI" />
                      <TimelineChip label="RESTful API" />
                      <TimelineChip label="Node" />
                      <TimelineChip label="Express" />
                      <TimelineChip label="MySQL" />
                      <TimelineChip label="MongoDB" />
                      <TimelineChip label="AWS" />
                      <TimelineChip label="Cypress" />
                    </Box>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  color="inherit"
                  sx={{ mt: 1 }}
                  variant="body2"
                >
                  02.2019 - 02.2020
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      padding: "20px",
                      borderRadius: "10px",
                      marginBottom: "15px",
                      textAlign: "left",
                      //   bgcolor: "#faf7d6",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Full-Stack Developer
                    </Typography>
                    <Link
                      href="https://www.enfotech.com/"
                      underline="none"
                      target="_blank"
                    >
                      <Stack direction="row" sx={{ alignItems: "center" }}>
                        <LinkIcon sx={{ mr: "3px" }} />
                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                          enfotech and Consulting Inc.
                        </Typography>
                      </Stack>
                    </Link>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      • Worked with project managers to re-architect a
                      multi-page web app into a single-page one by React, Node,
                      Express, and MySQL using RESTful API standard, boosting
                      yearly avenue by more than 30%.
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      • Used React to build mobile applications, which are lite
                      versions of the products with mobile-only features,
                      boosting revenue by 3%.
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      • Contributed to documentation and coaching others to fit
                      into new projects.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      • Maintained original products by ASP.NET, C#, MySQL, and
                      SQL Server.
                      <br />
                      &nbsp;- Fixed bugs, reducing the number of customer
                      complaints by 25%.
                      <br />
                      &nbsp;- Created new features with a cross-functional team
                      based on the original structure, boosting revenue by 10%.
                    </Typography>
                    <Box sx={{ p: 1 }}>
                      <TimelineChip label="React" />
                      <TimelineChip label="RESTful API" />
                      <TimelineChip label="Node" />
                      <TimelineChip label="Express" />
                      <TimelineChip label="MySQL" />
                      <TimelineChip label="C#" />
                      <TimelineChip label=".NET" />
                    </Box>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  color="inherit"
                  sx={{ mt: 1 }}
                  variant="body2"
                >
                  2015 - 2017
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <SchoolIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      padding: "20px",
                      borderRadius: "10px",
                      marginBottom: "15px",
                      //   bgcolor: "#faf7d6",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      MS in Computer Science
                    </Typography>
                    <Link
                      href="https://www.ntu.edu.tw"
                      underline="none"
                      target="_blank"
                    >
                      <Stack direction="row" sx={{ alignItems: "center" }}>
                        <LinkIcon sx={{ mr: "3px" }} />
                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                          National Taiwan University
                        </Typography>
                      </Stack>
                    </Link>
                    <Typography variant="body2" color="text.secondary">
                      <b>Y. Chang</b> and J. Wu, "Multi-user Searchable
                      Encryption Scheme with Constant-Size Keys," in 2017 IEEE
                      7th International Symposium on Cloud and Service Computing
                      (SC2), Kanazawa, Japan, 2017 pp. 98-103. doi:
                      10.1109/SC2.2017.22
                    </Typography>
                    <Link
                      href="https://www.computer.org/csdl/proceedings-article/sc2/2017/5862a098/12OmNrJiCZ4"
                      underline="none"
                      target="_blank"
                    >
                      <Stack direction="row" sx={{ alignItems: "center" }}>
                        <LinkIcon sx={{ mr: "3px" }} />
                        <Typography variant="body2">
                          doi: 10.1109/SC2.2017.22
                        </Typography>
                      </Stack>
                    </Link>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  color="inherit"
                  sx={{ mt: 1 }}
                  variant="body2"
                >
                  2011 - 2015
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <SchoolIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      padding: "20px",
                      borderRadius: "10px",
                      marginBottom: "15px",
                      textAlign: "left",
                      //   bgcolor: "#faf7d6",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      BS in Computer Science
                    </Typography>
                    <Link
                      href="https://www.ncu.edu.tw/"
                      underline="none"
                      target="_blank"
                    >
                      <Stack direction="row" sx={{ alignItems: "center" }}>
                        <LinkIcon sx={{ mr: "3px" }} />
                        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                          National Central University
                        </Typography>
                      </Stack>
                    </Link>
                    <Typography variant="body2" color="text.secondary">
                      <Grid container justifyContent="space-between">
                        <Grid item>
                          <b>Software Developer Intern</b>
                        </Grid>
                        <Grid item>07.2013 - 06.2014</Grid>
                      </Grid>
                    </Typography>
                    <Link
                      href="https://www.landseedhospital.com.tw"
                      underline="none"
                      target="_blank"
                    >
                      <Stack direction="row" sx={{ alignItems: "center" }}>
                        <LinkIcon sx={{ mr: "3px" }} />
                        <Typography variant="body2">
                          Landseed Hospital
                        </Typography>
                      </Stack>
                    </Link>
                    <Typography variant="body2" color="text.secondary">
                      • Used Java and Android to develop a rehabilitation app
                      for patients to do some daily exercises by following the
                      instructions suggested by our doctors.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      • Used JavaScript, HTML, CSS, PHP, and MySQL to build a
                      system for our doctors to handle patients' data.
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Experience;
