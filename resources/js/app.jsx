import './bootstrap';
import '../sass/app.scss'

import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Home from './Pages/Home';
import About from './Pages/About';
import Ads from './Pages/Ads';
import Franchise from './Pages/Franchise';
import Partnership from './Pages/Partnership';
import Entrance from './Pages/Entrance';
import Feedback from './Pages/Feedback';
import Map from './Pages/Map';
import Donat from './Pages/Donat';
import Error404 from './Pages/Error404';
import Header from './Components/Header';
import Footer from './Components/Footer';

const newTheme = createTheme({
  palette: {
    primary: {
      main: '#00bd9d',
    },
  },
});

ReactDOM.createRoot(document.getElementById('app')).render(
  <BrowserRouter>
  <ThemeProvider theme={newTheme}>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/ads' element={<Ads />} />
      <Route path='/franchise' element={<Franchise />} />
      <Route path='/patrnership' element={<Partnership />} />
      <Route path='/entrance' element={<Entrance />} />
      <Route path='/feedback' element={<Feedback />} />
      <Route path='/map' element={<Map />} />
      <Route path='/donat' element={<Donat />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    <Footer />
  </ThemeProvider>
  </BrowserRouter>
);