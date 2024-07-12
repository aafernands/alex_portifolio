// import React from "react";
// import { Container, Grid, Box, TextField, Button, Typography } from "@mui/material";

// const ContactForm = () => {
//   return (
//     <Container>
//       <Grid id="contact" container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
//         <Grid item xs={12} md={8} lg={6}>
//           <Box
//             component="form"
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 2,
//               padding: 3,
//               border: "1px solid lightgray",
//               borderRadius: 2,
//               boxShadow: 3,
//               backgroundColor: "white",
//             }}
//           >
//             <Typography variant="h4" component="h1" gutterBottom align="center">
//               CONTACT ME
//             </Typography>
//             <TextField
//               label="Name"
//               variant="outlined"
//               fullWidth
//               required
//             />
//             <TextField
//               label="Email"
//               variant="outlined"
//               fullWidth
//               required
//             />
//             <TextField
//               label="Message"
//               variant="outlined"
//               fullWidth
//               required
//               multiline
//               rows={4}
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               type="submit"
//               fullWidth
//             >
//               Send
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ContactForm;


import React, { useState } from "react";
import { Container, Grid, Box, TextField, Button, Typography } from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xkgwgjro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      console.error("Form submission error:", response.statusText);
    }
  };

  if (submitted) {
    return (
      <Container>
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
          <Typography variant="h6" component="h2" gutterBottom align="center">
            Thank you for your message. We will get back to you soon.
          </Typography>
        </Grid>
      </Container>
    );
  }

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
              backgroundColor: "white"
            }}
            onSubmit={handleSubmit}
          >
            <Typography variant="h4" component="h1" gutterBottom align="center">
              CONTACT ME
            </Typography>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              required
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Message"
              name="message"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
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
