import amber from '@mui/material/colors/amber';
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
        secondary: {
          main: grey[800],
        },
        bodyBG: '#96aeb1',
        logoBG: '#ffffff',
        divider: amber[200],
        background: {
          default: '#4c4a4a',
          paper: '#d3d3d3',
        },
        text: {
          primary: '#ffffff',
          secondary: grey[800],
        },
      }
      : {
        primary: {
          main: '#0B132B',
          secondary: '#dddddd',
          error: '#c62828',
          Warning: '#e65100',
          info: '#01579b',
          success: '#1b5e20',
        },
        secondary: {
          main: grey[100],
        },
        bodyBG: '#292929',
        logoBG: '#7fc37e',
        divider: '#ddaadd',
        background: {
          default: '#4c4a4a',
          paper: '#4c4a4a',
        },
        text: {
          primary: '#ffffff',
          secondary: grey[100],
        },
      }),
  },
});