import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import GitHubIcon from "@mui/icons-material/GitHub";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const items = [
  {
    icon: <CodeIcon />,
    title: "Front-end Development: ",
    description:
      "Proficient in HTML5, CSS3, JavaScript, and various front-end frameworks like React.js and Bootstrap.",
  },
  {
    icon: <StorageIcon />,
    title: "Back-end Development:",
    description:
      "Experienced in Node.js, Express, MongoDB, and MySQL for building robust server-side applications.",
  },
  {
    icon: <IntegrationInstructionsIcon />,
    title: "Full Stack Proficiency:",
    description:
      "Skilled in integrating front-end and back-end technologies to develop scalable and responsive web applications.",
  },
  {
    icon: <GitHubIcon />,
    title: "Version Control and Deployment:",
    description:
      "Familiar with Git for version control and deploying applications using platforms like GitHub and Heroku.",
  },
  {
    icon: <DesignServicesIcon />,
    title: "UI/UX Design Principles:",
    description:
      "Knowledgeable about designing intuitive user interfaces and enhancing user experience through responsive design and accessibility practices.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  borderColor: "grey.800",
                  background: "transparent",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: "50%",
                    fontSize: "8rem",
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

// import * as React from "react";
// import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
// import { CheckCircleOutline } from "@mui/icons-material";
// import { makeStyles } from "@mui/styles";
// import { Typography, Container, Grid } from "@mui/material";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHtml5,
//   faCss3Alt,
//   faJs,
//   faAngular,
//   faReact,
// } from "@fortawesome/free-brands-svg-icons";

// const useStyles = makeStyles((theme) => ({
//   list: {
//     padding: "20px",
//     borderRadius: "8px",
//     fontFamily: "Aldrich, Arial, sans-serif",
//   },
//   listItem: {
//     marginBottom: "10px",
//     color: "#333",
//   },
//   listItemIcon: {
//     color: "#4caf50",
//   },
// }));

// const Skills = () => {
//   const classes = useStyles();

//   return (
//     <Container>
//       <Grid item xs={12} style={{ textAlign: "center" }}>
//         <Grid item sm={12} md={6} lg={6}>
//           <Typography
//             style={{ padding: "20px" }}
//             variant="h3"
//             component="h3"
//             gutterBottom
//           >
//             Skills{" "}
//           </Typography>
//           <Typography
//             style={{ textAlign: "left" }}
//             variant="p"
//             component="p"
//             gutterBottom
//           >
//             I am enthusiastic about leveraging my technical skills and
//             creativity to solve real-world challenges and deliver engaging
//             digital solutions. Whether it's crafting elegant front-end designs
//             or implementing complex back-end functionalities, I am committed to
//             delivering high-quality results that exceed expectations.
//           </Typography>

//           <List className={classes.list}>
//             <ListItem>
//               <ListItemIcon>
//                 <CheckCircleOutline />
//               </ListItemIcon>
//               <strong>Front-end Development: </strong> Proficient in HTML5,
//               CSS3, JavaScript, and various front-end frameworks like React.js
//               and Bootstrap.
//             </ListItem>
//             <ListItem>
//               <ListItemIcon>
//                 <CheckCircleOutline />
//               </ListItemIcon>{" "}
//               <strong>Back-end Development: </strong>Experienced in Node.js,
//               Express, MongoDB, and MySQL for building robust server-side
//               applications.{" "}
//             </ListItem>
//             <ListItem>
//               <ListItemIcon>
//                 <CheckCircleOutline />
//               </ListItemIcon>{" "}
//               <strong>Full Stack Proficiency:</strong>
//               Skilled in integrating front-end and back-end technologies to
//               develop scalable and responsive web applications.{" "}
//             </ListItem>
//             <ListItem>
//               <ListItemIcon>
//                 <CheckCircleOutline />
//               </ListItemIcon>{" "}
//               <strong>Version Control and Deployment:</strong>
//               Familiar with Git for version control and deploying applications
//               using platforms like GitHub and Heroku.{" "}
//             </ListItem>
//             <ListItem>
//               <ListItemIcon>
//                 <CheckCircleOutline />
//               </ListItemIcon>{" "}
//               <strong> UI/UX Design Principles: </strong>
//               Knowledgeable about designing intuitive user interfaces and
//               enhancing user experience through responsive design and
//               accessibility practices.{" "}
//             </ListItem>
//           </List>
//         </Grid>
//       </Grid>

//       <Grid container id="home" spacing={3} style={{ padding: "20px" }}>
//         <Grid
//           container
//           spacing={2}
//           item
//           sm={12}
//           md={6}
//           lg={6}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           {/* <Typography variant="h6" component="h2" gutterBottom>
//               Languages{" "}
//             </Typography> */}
//           <FontAwesomeIcon icon={faHtml5} className="icon" />
//           <FontAwesomeIcon icon={faJs} className="icon" />
//           <FontAwesomeIcon icon={faAngular} className="icon" />
//           <FontAwesomeIcon icon={faReact} className="icon" />
//           <FontAwesomeIcon icon={faCss3Alt} className="icon" />
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };
// export default Skills;
