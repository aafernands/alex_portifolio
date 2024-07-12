import React from "react";
import { Container, Grid, Box, TextField, Button, Typography } from "@mui/material";

const ContactForm = () => {
  return (
    <Container>
      <Grid id="contact" container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
        <Grid item xs={12} md={8} lg={6}>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: 3,
              border: "1px solid lightgray",
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: "white",
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom align="center">
              CONTACT ME
            </Typography>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactForm;
