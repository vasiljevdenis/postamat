import './bootstrap';
import '../sass/app.scss'

import ReactDOM from 'react-dom/client';        
import Home from './Pages/Home';
import Header from './Components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00bd9d',
    },
  },
});

ReactDOM.createRoot(document.getElementById('app')).render(     
    <ThemeProvider theme={theme}>
    <Header />
    <Home />        
    </ThemeProvider>
);