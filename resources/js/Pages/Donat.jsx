import * as React from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTheme } from "@emotion/react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, textAlign: 'center' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Donat = () => {

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = useState({
    id: 1,
    image: "",
    page: "donat",
    text: "",
    title: ""
  });

  useEffect(() => {
    axios.get(`/api/page/donat`)
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

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return state ? (
    <Box pt={5} pb={5} pl={5} pr={5}>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Typography sx={{ typography: { xs: 'h5', sm: 'h4', lg: 'h2' } }} gutterBottom>
          {state.title}
        </Typography>
        <img src={state.image} style={{ width: '100%', maxWidth: '1200px' }} alt={state.title} />
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'left' }} pt={3} pb={3}>
        <Typography variant="body1" gutterBottom>
          {state.text}
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }} pt={3} pb={3}>
        <Button onClick={handleClickOpen} variant="contained">Поддержать развитие проекта</Button>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }} pt={3} pb={3}>
        <Button component={RouterLink} to={'/feedback'} variant="contained">Отправить заявку</Button>
      </Grid>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Поддержать развитие проекта"}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{
                '& .MuiTabs-flexContainer': {
                  flexWrap: 'wrap',
                },
              }}>
                <Tab label="50 руб" {...a11yProps(0)} />
                <Tab label="100 руб" {...a11yProps(1)} />
                <Tab label="200 руб" {...a11yProps(2)} />
                <Tab label="300 руб" {...a11yProps(3)} />
                <Tab label="400 руб" {...a11yProps(4)} />
                <Tab label="500 руб" {...a11yProps(5)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <img src="/storage/images/64b69270d03fa.png" alt="50 руб" style={{ width: '100%', maxWidth: '300px' }} />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button onClick={(e) => {
                  e.preventDefault();
                  window.open('https://всёпро100.рф/', '_blank');
                }} variant="contained"
                >
                  {'Поддержать'}</Button>
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <img src="/storage/images/64b69270d03fa.png" alt="100 руб" style={{ width: '100%', maxWidth: '300px' }} />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button onClick={(e) => {
                  e.preventDefault();
                  window.open('https://всёпро100.рф/', '_blank');
                }} variant="contained"
                >
                  {'Поддержать'}</Button>
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <img src="/storage/images/64b69270d03fa.png" alt="200 руб" style={{ width: '100%', maxWidth: '300px' }} />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button onClick={(e) => {
                  e.preventDefault();
                  window.open('https://всёпро100.рф/', '_blank');
                }} variant="contained"
                >
                  {'Поддержать'}</Button>
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <img src="/storage/images/64b69270d03fa.png" alt="300 руб" style={{ width: '100%', maxWidth: '300px' }} />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button onClick={(e) => {
                  e.preventDefault();
                  window.open('https://всёпро100.рф/', '_blank');
                }} variant="contained"
                >
                  {'Поддержать'}</Button>
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <img src="/storage/images/64b69270d03fa.png" alt="400 руб" style={{ width: '100%', maxWidth: '300px' }} />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button onClick={(e) => {
                  e.preventDefault();
                  window.open('https://всёпро100.рф/', '_blank');
                }} variant="contained"
                >
                  {'Поддержать'}</Button>
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <img src="/storage/images/64b69270d03fa.png" alt="500 руб" style={{ width: '100%', maxWidth: '300px' }} />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button onClick={(e) => {
                  e.preventDefault();
                  window.open('https://всёпро100.рф/', '_blank');
                }} variant="contained"
                >
                  {'Поддержать'}</Button>
              </Grid>
            </CustomTabPanel>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Отмена
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  ) : (
    <>
    </>
  )
};

export default Donat;