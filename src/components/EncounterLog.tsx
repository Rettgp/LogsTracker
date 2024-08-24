import React from 'react';
import { createSvgIcon, PaletteMode, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Player } from './Player';
import { Equalizer } from '@mui/icons-material';
import { ParseColor } from './Colors';

interface EncounterLogProps {
  mode: PaletteMode;
  name: string;
  parse: number;
  id: number;
  sx: any;
}

const SkullIcon = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
    <path d="M240-80v-170q-39-17-68.5-45.5t-50-64.5q-20.5-36-31-77T80-520q0-158 112-259t288-101q176 0 288 101t112 259q0 42-10.5 83t-31 77q-20.5 36-50 64.5T720-250v170H240Zm80-80h40v-80h80v80h80v-80h80v80h40v-142q38-9 67.5-30t50-50q20.5-29 31.5-64t11-74q0-125-88.5-202.5T480-800q-143 0-231.5 77.5T160-520q0 39 11 74t31.5 64q20.5 29 50.5 50t67 30v142Zm100-200h120l-60-120-60 120Zm-80-80q33 0 56.5-23.5T420-520q0-33-23.5-56.5T340-600q-33 0-56.5 23.5T260-520q0 33 23.5 56.5T340-440Zm280 0q33 0 56.5-23.5T700-520q0-33-23.5-56.5T620-600q-33 0-56.5 23.5T540-520q0 33 23.5 56.5T620-440ZM480-160Z"/>
  </svg>,
  'Skull',
);

function GetBossImage(id: number) {
  const src = `https://assets.rpglogs.com/img/warcraft/bosses/${id}-icon.jpg`
  return <img src={src} width="70px" height="70px"></img>
}

export default function EncounterLog({ mode, name, id, parse, sx }: EncounterLogProps) {
  return (
    <Box sx={sx}>
        <Typography
            variant="subtitle2"
            fontWeight="bold"
            sx={{
            flexDirection: { xs: 'column', md: 'row' },
            alignSelf: 'left',
            textAlign: 'left',
            }}
        >
            {name}
        </Typography>
        <Stack spacing={1} direction="row">
            {GetBossImage(id)}
            <Stack spacing={1}>
                <Chip label={<Typography variant="h6" fontWeight="bold">{parse}</Typography>} icon={<Equalizer/>} 
                sx={{alignSelf: 'center', height: '50%', bgcolor: ParseColor(parse)}}
                ></Chip>
            </Stack> 
        </Stack>
    </Box>
  );
}