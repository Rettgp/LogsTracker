import React from 'react';
import { PaletteMode, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import PlayerTracker from './PlayerTracker'

interface LogProps {
  mode: PaletteMode;
}

export default function Log({ mode }: LogProps) {
  return (
    <Stack
        spacing={1}
        sx={{
        p: 2,
        backgroundColor: 'background.paper',
        flexGrow: 1,
        }}
    >
        <PlayerTracker  mode={mode}/>
        <PlayerTracker  mode={mode}/>
        <PlayerTracker  mode={mode}/>
        <PlayerTracker  mode={mode}/>
        <PlayerTracker  mode={mode}/>
    </Stack>
  );
}