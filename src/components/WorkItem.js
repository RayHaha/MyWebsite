import React from "react";
import { Typography, Link, Stack, Box } from "@mui/material";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkIcon from "@mui/icons-material/Work";
import TimelineChip from "./TimelineChip";
import LinkIcon from "@mui/icons-material/Link";
import TimelineCard from "./TimelineCard";

const WorkItem = (props) => {
  const { time, title, organization, organizationLink, contents, skills } =
    props;
  return (
    <TimelineItem>
      <TimelineOppositeContent color="inherit" sx={{ mt: 1 }} variant="body2">
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>
          <WorkIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <TimelineCard
          sx={{
            textAlign: "left",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Link href={organizationLink} underline="none" target="_blank">
            <Stack direction="row" sx={{ alignItems: "center", color: "blue" }}>
              <LinkIcon sx={{ mr: "3px" }} />
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {organization}
              </Typography>
            </Stack>
          </Link>
          {contents?.length > 0 &&
            contents.map((content) =>
              content.hasDetails ? (
                <>
                  <Typography variant="body2">{content.description}</Typography>
                  {content.details.length > 0 &&
                    content.details.map((detail, index) => (
                      <Typography
                        variant="body2"
                        sx={{
                          ml: 1,
                          mb: index === content.details.length - 1 ? 1 : 0,
                        }}
                      >
                        {detail}
                      </Typography>
                    ))}
                </>
              ) : (
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {content.description}
                </Typography>
              )
            )}
          <Box sx={{ p: 1 }}>
            {skills.length > 0 &&
              skills.map((skill) => <TimelineChip label={skill} />)}
          </Box>
        </TimelineCard>
      </TimelineContent>
    </TimelineItem>
  );
};

export default WorkItem;
