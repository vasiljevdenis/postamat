import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";

const About = () => {
  return (
    <Box pt={5} pb={5} pl={5} pr={5}>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          О нас
        </Typography>
        <img src="https://cdn.stocksnap.io/img-thumbs/960w/palm-leaves_KMOJIUMD7C.jpg" style={{ width: '100%', maxWidth: '1200px' }} alt="About" />
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'left' }} pt={3} pb={3}>
        <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      </Grid>
    </Box>
  )
};

export default About;