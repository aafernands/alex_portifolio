import * as React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    list: {
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      fontFamily: "Aldrich, Arial, sans-serif",
    },
    listItem: {
      marginBottom: '10px',
      color: '#333',
    },
    listItemIcon: {
      color: '#4caf50',
    },
  }));


const Skills = () => {

    const classes = useStyles();

  return (
    
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
          Skilled in integrating front-end and back-end technologies to develop
          scalable and responsive web applications.{" "}
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutline />
          </ListItemIcon>{" "}
          <strong>Version Control and Deployment:</strong>
          Familiar with Git for version control and deploying applications using
          platforms like GitHub and Heroku.{" "}
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutline />
          </ListItemIcon>{" "}
          <strong> UI/UX Design Principles: </strong>
          Knowledgeable about designing intuitive user interfaces and enhancing
          user experience through responsive design and accessibility practices.{" "}
        </ListItem>
      </List>
  );
};
export default Skills;
