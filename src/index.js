import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import App from './components/App';
import store from './app/store';

const theme = createTheme({
  // palette: {
  //   primary: {
  //     light: '#FFF3EF',
  //     main: '#FFF3EF',
  //     dark: '#FFF3EF',
  //     contrastText: '#485863',
  //   },
  //   secondary: {
  //     light: '#141414',
  //     main: '#141414',
  //     dark: '#141414',
  //     contrastText: '#e50914',
  //   }
  // },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: alpha('#FFF3EF', 0.5),
          borderRadius: '2px',
          boxShadow: 'none',
          border: '1px solid black',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          top: '50px',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#000',
          top: '50px',
          width: '250px',
        },
      },
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
