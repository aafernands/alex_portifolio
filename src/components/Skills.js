import * as React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import { makeStyles } from "@material-ui/styles";
import { Typography, Container, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faAngular,
  faReact,
} from "@fortawesome/free-brands-svg-icons";


const useStyles = makeStyles((theme) => ({
  list: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    fontFamily: "Aldrich, Arial, sans-serif",
  },
  listItem: {
    marginBottom: "10px",
    color: "#333",
  },
  listItemIcon: {
    color: "#4caf50",
  },
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <Container>

    <Grid item xs={12} style={{ textAlign: "center" }}>
      <Grid item sm={12} md={6} lg={6}>
        <Typography variant="h6" component="h2" gutterBottom>
          Skills{" "}
        </Typography>
        <Typography variant="p" component="p" gutterBottom>
          I am enthusiastic about leveraging my technical skills and creativity
          to solve real-world challenges and deliver engaging digital solutions.
          Whether it's crafting elegant front-end designs or implementing
          complex back-end functionalities, I am committed to delivering
          high-quality results that exceed expectations.
        </Typography>


        <List className={classes.list}>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutline />
            </ListItemIcon>
            <strong>Front-end Development: </strong> Proficient in HTML5, CSS3,
            JavaScript, and various front-end frameworks like React.js and
            Bootstrap.
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutline />
            </ListItemIcon>{" "}
            <strong>Back-end Development: </strong>Experienced in Node.js,
            Express, MongoDB, and MySQL for building robust server-side
            applications.{" "}
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutline />
            </ListItemIcon>{" "}
            <strong>Full Stack Proficiency:</strong>
            Skilled in integrating front-end and back-end technologies to
            develop scalable and responsive web applications.{" "}
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutline />
            </ListItemIcon>{" "}
            <strong>Version Control and Deployment:</strong>
            Familiar with Git for version control and deploying applications
            using platforms like GitHub and Heroku.{" "}
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutline />
            </ListItemIcon>{" "}
            <strong> UI/UX Design Principles: </strong>
            Knowledgeable about designing intuitive user interfaces and
            enhancing user experience through responsive design and
            accessibility practices.{" "}
          </ListItem>
        </List>
      </Grid>
    </Grid>

    <Grid container id="home" spacing={3} style={{ padding: "20px" }}>
          <Grid
            container
            spacing={2}
            item
            sm={12}
            md={6}
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Typography variant="h6" component="h2" gutterBottom>
              Languages{" "}
            </Typography> */}
            <FontAwesomeIcon icon={faHtml5} className="icon" />
            <FontAwesomeIcon icon={faJs} className="icon" />
            <FontAwesomeIcon icon={faAngular} className="icon" />
            <FontAwesomeIcon icon={faReact} className="icon" />
            <FontAwesomeIcon icon={faCss3Alt} className="icon" />
          </Grid>
          </Grid>


          </Container>

  );
};
export default Skills;
