import React from 'react';
import { PaletteMode, Typography, Stack, Card } from '@mui/material';
import Box from '@mui/material/Box';

interface PlayerTrackerProps {
  mode: PaletteMode;
}

export default function PlayerTracker({ mode }: PlayerTrackerProps) {
  return (
    <Box>
      <Stack
          direction="row"
          spacing={2}
          sx={{
          p: 1,
          backgroundColor: 'background.paper',
          flexGrow: 1,
          }}
      >
        <Card sx={{p: 3, width: '100%'}}>
          <Typography
              variant="h4"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignSelf: 'center',
                textAlign: 'center',
              }}
            >
              Player 1
          </Typography>
        </Card>
      </Stack>
    </Box>
  );
}