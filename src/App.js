import React, { useRef } from "react";
import "./App.css";

import { Typography, Container, Grid } from "@mui/material";
import MyAppBar from "./components/AppBar"; // Import the MyAppBar component
import Greeting from "./components/Greeting"; // Import the Greeting component
import Footer from "./components/Footer"; // Import the Footer component
import ContactForm from "./components/ContactForm"; // Import the ContactForm component
import Skills from "./components/Skills"; // Import the Skills component

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faAngular,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <MyAppBar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      <Container>
        <Grid container id="home" spacing={3} style={{ padding: "20px" }}>
          <Grid item xs={12}>
            <Greeting />
          </Grid>

          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography id="about" variant="h4" component="h2" gutterBottom>
              ABOUT{" "}
            </Typography>
            <br />

            <Typography variant="p" component="p" gutterBottom>
              I am a passionate and dedicated web developer based in New Jersey,
              USA, with a strong foundation in front-end and back-end
              development technologies. With a background in Pharmacy and a
              relentless drive for learning, I transitioned into the dynamic
              world of web development to pursue my passion for creating
              innovative digital experiences.
            </Typography>
          </Grid>

          <Grid item sm={12} md={6} lg={6}>
            <Typography variant="h6" component="h2" gutterBottom>
              Skills{" "}
            </Typography>
            <Typography variant="p" component="p" gutterBottom>
              I am enthusiastic about leveraging my technical skills and
              creativity to solve real-world challenges and deliver engaging
              digital solutions. Whether it's crafting elegant front-end designs
              or implementing complex back-end functionalities, I am committed
              to delivering high-quality results that exceed expectations.
            </Typography>
            <Skills />
            <br />{" "}
          </Grid>

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

          <Grid item xs={12}>
            <Typography id="projects" variant="h4" component="h2" gutterBottom>
              PROJECTS{" "}
            </Typography>
            <Typography
              className="questrial-regular"
              variant="body1"
              component="p"
              gutterBottom
            >
              I'm a Web Developer student based in New Jersey, United States. I
              strive to build immersive and beautiful web applications through
              carefully crafted code and user-centric design. I am enthusiastic
              about leveraging my technical skills and creativity to solve
              real-world challenges and deliver engaging digital solutions.
              Whether it's crafting elegant front-end designs or implementing
              complex back-end functionalities, I am committed to delivering
              high-quality results that exceed expectations. I am enthusiastic
              about leveraging my technical skills and creativity to solve
              real-world challenges and deliver engaging digital solutions.
              Whether it's crafting elegant front-end designs or implementing
              complex back-end functionalities, I am committed to delivering
              high-quality results that exceed expectations. I am enthusiastic
              about leveraging my technical skills and creativity to solve
              real-world challenges and deliver engaging digital solutions.
              Whether it's crafting elegant front-end designs or implementing
              complex back-end functionalities, I am committed to delivering
              high-quality results that exceed expectations.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
