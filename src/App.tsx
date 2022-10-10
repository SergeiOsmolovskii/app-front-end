import React, { useMemo, useState } from 'react';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { AsideNav } from './components/asideNav';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box/Box';

import { getDesignTokens } from './services/themeChange';

function App() {

  const [mode, setMode] = useState<PaletteMode>('dark');

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode: PaletteMode) =>
        prevMode === 'light' ? 'dark' : 'light',
      );
    },
  }),
    [],
  );

  

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Header currentTheme={theme} mode={colorMode} />
      <Box component="main" sx={{backgroundColor: 'bodyBG'}}>
        <AsideNav />
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
