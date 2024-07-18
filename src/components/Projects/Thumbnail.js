import React from "react"; // Import the Component component from React
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: "60px",
    backgroundColor: "red",
    // boxShadow: "2.5px 5px 4px #000",
  },
  media: {
    height: 200,
    justifyContent: "center",
  },
  button: {
    fontSize: 14,
    padding: 35,
	backgroundColor: "transparent",
	justifyContent: "center"
  },
  cardArea: {
	backgroundColor: "transparent",
  }
});
function Thumbnail(props) {
  const classes = useStyles();
  return (
    <Container>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.cardArea}>
            <Typography
              // style={{ color: "gray" }}
              gutterBottom
              variant="h6"
              component="h2"
            >
              {props.title}
            </Typography>
            <Typography variant="body2" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.button}>
          <Button
            href={props.linkGithub}
            variant="contained"
            size="small"
            color="primary"
          >
            View Details
          </Button>

          {/* <Button
						variant="contained"
						href={props.linkLive}
						size="small"
						color="primary"
						style={{ fontSize: 12, padding: 18 }}
					>
						Live Demo
					</Button> */}
        </CardActions>
      </Card>
    </Container>
  );
}

export default Thumbnail;
