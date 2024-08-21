import React from 'react';
import { PaletteMode, Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface RankProps {
  mode: PaletteMode;
  parse: number;
}

export default function Rank({ mode, parse }: RankProps) {
  return (
    <Box>
        <Stack
            spacing={0}
            sx={{ mt: 2 }}
        >
        <Avatar>TD</Avatar>
        <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            85
        </Typography>
        </Stack>
    </Box>
  );
}