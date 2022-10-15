import amber from '@mui/material/colors/amber';
import deepOrange from '@mui/material/colors/deepOrange';
import grey from '@mui/material/colors/grey';
import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: {
          main: '#5BC0BE',
          secondary: '#BAC7BE',
          error: '#ef5350',
          Warning: '#ff9800',
          info: '#03a9f4',
          success: '#4caf50',
        },
        bodyBG: '#96aeb1',
        logoBG: '#ffffff',
        divider: amber[200],
        text: {
          primary: '#ffffff',
          secondary: grey[800],
        },
      }
      : {
        primary: {
          main: '#0B132B',
          secondary: '#3a506b',
          error: '#c62828',
          Warning: '#e65100',
          info: '#01579b',
          success: '#1b5e20',
        },
        bodyBG: '#292929',
        logoBG: '#7fc37e',
        divider: deepOrange[700],
        background: {
          default: deepOrange[900],
          paper: deepOrange[900],
        },
        text: {
          primary: '#ffffff',
          secondary: grey[500],
        },
      }),
  },
});