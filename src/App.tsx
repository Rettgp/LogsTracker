import React, { useEffect, useState } from 'react';
import { Container, PaletteMode, Typography } from '@mui/material';
import { alpha } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './components/TopBar';
import DungeonLog from './components/DungeonLog';
import { WarcraftLogParser } from './components/WarcraftLogParser';
import { DungeonInfo } from './components/DungeonInfo';


export default function App() {
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const defaultTheme = createTheme({ 
    palette: { 
      mode
    } 
  });

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  let foo = new WarcraftLogParser();

  function GenerateDungeons() {
    const [data, setData] = useState<DungeonInfo | null>(null);;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      foo.ParseGuildLogs(+"706102").then((dungeon) => {
        setLoading(false);
        setData(dungeon)
      });
    }, []);

    if (loading) {
      return <div>Loading...</div>; // Render a loading indicator
    }

    return <DungeonLog mode={mode} dungeon={data}/>; // Render the actual data
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box
        id="background"
        sx={(theme) => ({
          width: '100%',
          backgroundImage:
            theme.palette.mode === 'light'
              ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
              : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
          backgroundSize: '100% 75%',
          backgroundRepeat: 'no-repeat',
        })}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 10, sm: 12 },
            pb: { xs: 10, sm: 15 },
          }}
        >
          <Typography
              variant="h1"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignSelf: 'center',
                textAlign: 'center',
              }}
            >
              Log Tracker
          </Typography>
        </Container>
      </Box>
      <Box sx={{ bgcolor: 'background.default' }}>
        {GenerateDungeons()}
      </Box>
    </ThemeProvider>
  );
}
