import * as React from "react";
import { Alert, Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Snackbar, TextField, TextareaAutosize, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link as RouterLink } from 'react-router-dom';
import ReactInputMask from "react-input-mask";
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SubjectIcon from '@mui/icons-material/Subject';
import styled from "@emotion/styled";
import { SmartCaptcha } from "@yandex/smart-captcha";
import { useCallback } from "react";

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

  const [name, setName] = useState('');

  const changeName = (e) => {
    setName(e.target.value);
  }

  const [phone, setPhone] = useState('');

  const changePhone = (e) => {
    setPhone(e.target.value);
  }

  const [email, setEmail] = useState('');

  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const [subject, setSubject] = useState('');

  const changeSubject = (e) => {
    setSubject(e.target.value);
  }

  const [text, setText] = useState('');

  const changeText = (e) => {
    setText(e.target.value);
  }

  const green = {
    100: '#c8e6c9',
    200: '#a5d6a7',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    900: '#00bd9d',
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 215px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${green[400]};
    }
  
    &:focus {
      border-color: ${green[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? green[500] : green[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

  const [token, setToken] = useState('');
  const [status, setStatus] = useState('hidden');

  const handleChallengeVisible = useCallback(() => setStatus('visible'), []);
  const handleChallengeHidden = useCallback(() => setStatus('hidden'), []);
  const handleNetworkError = useCallback(() => setStatus('network-error'), []);
  const handleSuccess = useCallback((token) => {
    setStatus('success');
    setToken(token);
  }, []);
  const handleTokenExpired = useCallback(() => {
    setStatus('token-expired');
    setToken('');
  }, []);

  const [snackbar, setSnackbar] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
  });

  const openSnackbar = () => {
    setSnackbar({ ...snackbar, open: true });
  };
  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const sendForm = () => {
    if (name && phone && subject) {

    } else {
      openSnackbar();
    }
  }

  return state ? (
    <Box pt={5} pb={5} pl={5} pr={5}>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          {state.title}
        </Typography>
        <img src={state.image} style={{ width: '100%', maxWidth: '1200px' }} alt={state.title} />
      </Grid>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', py: 2 }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Ваше имя" variant="standard" value={name} onChange={changeName} required />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', py: 2 }}>
          <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <ReactInputMask mask="+7 (999) 999-99-99" value={phone} onChange={changePhone}>
            <TextField id="input-with-sx" label="Номер телефона" variant="standard" required />
          </ReactInputMask>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', py: 2 }}>
          <AlternateEmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Email" value={email} onChange={changeEmail} variant="standard" />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', py: 2 }}>
          <SubjectIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <FormControl variant="standard" sx={{ my: 1, minWidth: 207 }}>
            <InputLabel id="demo-multiple-name-label">Тема обращения *</InputLabel>
            <Select
              required
              labelId="demo-multiple-name-label"
              id="demo-simple-select-standard"
              label="Тема обращения"
              value={subject}
              onChange={changeSubject}
            >
              <MenuItem value={"Реклама на постаматах"}>Реклама на постаматах</MenuItem>
              <MenuItem value={"Франшиза"}>Франшиза</MenuItem>
              <MenuItem value={"Сотрудничество"}>Сотрудничество</MenuItem>
              <MenuItem value={"Постамат в подьезд"}>Постамат в подьезд</MenuItem>
              <MenuItem value={"Ячейка не открылась"}>Ячейка не открылась</MenuItem>
              <MenuItem value={"Обратная связь"}>Обратная связь</MenuItem>
              <MenuItem value={"Постаматы на карте"}>Постаматы на карте</MenuItem>
              <MenuItem value={"Поддержать развитие проекта"}>Поддержать развитие проекта</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', py: 2 }}>
          <StyledTextarea
            aria-label="minimum height"
            minRows={3}
            placeholder="Текст сообщения"
            value={text}
            onChange={changeText}
            onFocus={e => e.target.selectionStart = e.target.value.length}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <FormControlLabel sx={{ maxWidth: 275 }} control={<Checkbox required />} label="Я даю согласие на обработку своих персональных данных" />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <SmartCaptcha
            sitekey="ysc1_zcHjsGtrzDFWYhz4ZkjoxTfAvZrGuzqcubQF7ewB6f7c94c7"
            onChallengeVisible={handleChallengeVisible}
            onChallengeHidden={handleChallengeHidden}
            onNetworkError={handleNetworkError}
            onSuccess={handleSuccess}
            onTokenExpired={handleTokenExpired}
          />
        </Box>
      </Box>
      <Grid item xs={12} style={{ textAlign: 'left' }} pt={3} pb={3}>
        <Typography variant="body1" gutterBottom>
          {state.text}
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }} pt={3} pb={3}>
        <Button component={RouterLink} to={'/feedback'} variant="contained" onClick={sendForm} disabled={status === "success" ? false : true}>Отправить заявку</Button>
      </Grid>
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={closeSnackbar}>
        <Alert onClose={closeSnackbar} severity="error" sx={{ width: '100%' }}>
          Заполните все обязательные поля!
        </Alert>
      </Snackbar>
    </Box>
  ) : (
    <>
    </>
  )
};

export default Feedback;