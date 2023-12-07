import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";

const ProjectCard = (props) => {
  const { name, link, imageLink, content, githubLink } = props;
  return (
    <Card sx={{ width: 345, m: 2 }}>
      <CardActionArea
        onClick={() => {
          window.open(link, "_blank", "noreferrer");
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={imageLink}
          alt={name}
          sx={{ objectFit: "contain", m: 1 }}
        />
        <CardContent sx={{ height: 100 }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            window.open(githubLink, "_blank", "noreferrer");
          }}
        >
          View on Github
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
