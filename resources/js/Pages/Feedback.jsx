import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link as RouterLink } from 'react-router-dom';

const Feedback = () => {
  const [state, setState] = useState({
    id: 1,
    image: "",
    page: "feedback",
    text: "",
    title: ""
  });

  useEffect(() => {
    axios.get(`/api/page/feedback`)
        .then(res => {
          console.log(res);
          let json = res.data[0];
          setState((oldState) => ({ ...oldState, title: json.title, text: json.text, image: json.image }));
        })
        .catch(err => {
        })
        .finally(() => {            
        });
}, []);
  return state ? (
    <Box pt={5} pb={5} pl={5} pr={5}>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          { state.title }
        </Typography>
        <img src={ state.image } style={{ width: '100%', maxWidth: '1200px' }} alt={ state.title } />
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'left' }} pt={3} pb={3}>
        <Typography variant="body1" gutterBottom>
        { state.text }
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }} pt={3} pb={3}>
        <Button component={RouterLink} to={'/feedback'} variant="contained">Отправить заявку</Button>
      </Grid>
    </Box>
  ) : (
    <>
    </>
  )
};

export default Feedback;