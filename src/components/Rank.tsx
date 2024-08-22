import React from 'react';
import { PaletteMode, Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Player } from './Player';

interface RankProps {
  mode: PaletteMode;
  player: Player;
}


function RankIcon(player: Player) {
  return <img src={player.ParseIcon()} width={50} height={50} alt="Logo" style={{background: 'radial-gradient(circle closest-side, '+player.ParseColor()+', transparent)'}}/>;
}

export default function Rank({ mode, player }: RankProps) {
  return (
    <Box>
        <Stack
            spacing={0}
            sx={{ mt: 2 }}
        >
        {RankIcon(player)}
        <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              color: player.ParseColor()
            }}
          >
            {player.parse}
        </Typography>
        </Stack>
    </Box>
  );
}