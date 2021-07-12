import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      lighter:'#EBEBEB',
      light:'#BDBDBD',
      main: '#778899',
      contrastText:'#000000'
    },
    secondary: {
      main: '#FFFFFF',
      contrastText:'#778899'
    },
    info:{
      lighter:'#bbdefb',
      light:'#64b5f6',
      main:'#2196f3',
      dark:'#1976d2',
      darker:'#0d47a1',
      contrastText:'#000000'
    },
    gray:{
      lighter:'#f5f5f5',
      light:'#e0e0e0',
      main:'#9e9e9e',
      dark:'#616161',
      darker:'#212121',
      contrastText:'#000000'
    },
  },
  MuiContainer:{
    maxWidth:"xl",
  }
});


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
