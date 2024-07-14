import React from "react";
import ServicesCard from "../components/ServicesCard.js";
import webDev from "../images/cards/webDev.jpg";
import webDesign from "../images/cards/webDesign.jpg";
import seo from "../images/cards/seo.jpg";
import ui from "../images/cards/ui.jpg";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
    ServicesCard: {
    marging: "20px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "",
    boxShadow: "2.5px 5px 4px #fff",
    color: "white",
  },
  root: {
    backgroundColor: "red",
  },
}));

function Services(props) {
  const classes = useStyles();

  return (
    <Container>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography id="service" variant="h4" component="h2" gutterBottom>
          SERVICE OFFERS{" "}
        </Typography>
        <br />

        <Typography variant="p" component="p" gutterBottom>
          At FNDS Labs, we are dedicated to delivering exceptional web
          development and design solutions tailored to meet your unique needs.
          Our comprehensive range of services ensures that every aspect of your
          online presence is optimized for success. Explore our offerings below
          and discover how we can elevate your digital experience.
        </Typography>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid
            style={{
              padding: 30,
              backgroundColor: "transparent",
              alignContent: "flex-end",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
            container
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item md={4}>
              <ServicesCard
                className={classes.ServicesCard}
                image={webDev}
                title="WP DEVELOPMENT"
                description="We provide top-notch WordPress development services to bring your vision to life. From custom themes and plugins to seamless integrations and maintenance, we ensure your website is functional, scalable, and easy to manage."
              />
            </Grid>
            <Grid item md={4}>
              <ServicesCard
                className={classes.ServicesCard}
                image={webDesign}
                title="WEB DESIGN"
                description="Our web design services combine aesthetics with functionality. We craft visually stunning websites that are fully responsive and optimized for performance, ensuring a seamless experience across all devices."
              />
            </Grid>
            <Grid item md={4}>
              <ServicesCard
                className={classes.ServicesCard}
                image={seo}
                title="SEO OPTIMIZATION"
                description="Maximize your online presence with our SEO optimization services. We use the latest strategies to improve your website’s search engine ranking, driving organic traffic and increasing visibility to help you reach your target audience."
              />
            </Grid>
            <Grid item md={4}>
              <ServicesCard
                className={classes.ServicesCard}
                image={ui}
                title="UI/UX DESIGN"
                description="Our UI/UX design services focus on creating engaging and intuitive interfaces. We prioritize user experience to ensure your website or application is not only visually appealing but also user-friendly, enhancing satisfaction and loyalty."
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Services;
