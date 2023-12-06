import React from "react";
import { Grid, Typography, Link, Stack } from "@mui/material";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import { Box } from "@mui/material";
import TimelineChip from "./TimelineChip";
import LinkIcon from "@mui/icons-material/Link";
import TimelineCard from "./TimelineCard";

const EducationItem = (props) => {
  const {
    time,
    title,
    organization,
    organizationLink,
    contents,
    interns,
    skills,
  } = props;
  return (
    <TimelineItem>
      <TimelineOppositeContent
        color="inherit"
        sx={{ mt: 1, display: { xs: "none", md: "block" } }}
        variant="body2"
      >
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>
          <SchoolIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <TimelineCard
          sx={{
            textAlign: "left",
          }}
        >
          <Typography component="div" variant="h6" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Link href={organizationLink} underline="none" target="_blank">
            <Stack direction="row" sx={{ alignItems: "center", color: "blue" }}>
              <LinkIcon sx={{ mr: "3px" }} />
              <Typography
                component="div"
                variant="body2"
                sx={{ fontWeight: "bold" }}
              >
                {organization}
              </Typography>
            </Stack>
          </Link>
          <Box sx={{ mb: 1, display: { xs: "block", md: "none" } }}>
            <Typography component="div" variant="body2">
              {time}
            </Typography>
          </Box>
          {contents?.length > 0 &&
            contents.map((content, index) => (
              <React.Fragment key={index}>
                <Typography component="div" variant="body2">
                  <b>{content.name}</b>
                  {content.else}
                </Typography>
                <Link href={content.link} underline="none" target="_blank">
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center", color: "blue" }}
                  >
                    <LinkIcon sx={{ mr: "3px" }} />
                    <Typography component="div" variant="body2">
                      {content.doi}
                    </Typography>
                  </Stack>
                </Link>
              </React.Fragment>
            ))}
          {interns?.length > 0 &&
            interns.map((intern, index) => (
              <React.Fragment key={index}>
                <Typography component="div" variant="body2" sx={{ mt: 1 }}>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <b>{intern.title}</b>
                    </Grid>
                    <Grid item>{intern.time}</Grid>
                  </Grid>
                </Typography>
                <Link
                  href={intern.organizationLink}
                  underline="none"
                  target="_blank"
                >
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center", color: "blue" }}
                  >
                    <LinkIcon sx={{ mr: "3px" }} />
                    <Typography component="div" variant="body2">
                      {intern.organization}
                    </Typography>
                  </Stack>
                </Link>
                {intern.contents.length > 0 &&
                  intern.contents.map((content, index) => (
                    <Typography component="div" variant="body2" key={index}>
                      {content}
                    </Typography>
                  ))}
              </React.Fragment>
            ))}
          <Box sx={{ p: 1 }}>
            {skills.length > 0 &&
              skills.map((skill, index) => (
                <TimelineChip label={skill} key={index} />
              ))}
          </Box>
        </TimelineCard>
      </TimelineContent>
    </TimelineItem>
  );
};

export default EducationItem;
