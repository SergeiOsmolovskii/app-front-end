import React, { useMemo, useState } from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { AsideNav } from './components/asideNav';
import { getDesignTokens } from './services/themeChange';
import { MainPage } from './pages/mainPage';
import { AboutPage } from './pages/aboutPage';
import { HelpPage } from './pages/helpPage';
import { NotFoundPage } from './pages/404Page';
import { SettingsPage } from './pages/settingsPage';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box/Box';



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
        
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path='/help' element={<HelpPage/>} />
          <Route path='/settings' element={<SettingsPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      
      </Box>
      <Footer />


    </ThemeProvider>


  );
}

export default App;
