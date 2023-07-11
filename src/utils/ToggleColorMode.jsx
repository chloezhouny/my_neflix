import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider, createTheme, alpha } from '@mui/material/styles';

export const ColorModeContext = createContext();

const ToggleColorMode = ({ children }) => {
  const [mode, setMode] = useState('dark');
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
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
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            backgroundColor: alpha('#000', 0),
            backgroundImage: 'none',
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: alpha('#FFF3EF', 0.9),
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
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: '#fff',
            color: 'black',
            fontSize: '1.2vw',
            fontWeight: '500',
            paddingLeft: '1.2vw',
            paddingRight: '1.2vw'
          },
          arrow: {
            color: '#fff',
          },
        },
      },
    },
  }), [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
