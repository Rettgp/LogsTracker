import React from 'react';
import { PaletteMode, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import PlayerTracker from './PlayerTracker'
import { Player } from './Player';
import { Role } from './Player';

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
        <PlayerTracker  mode={mode} player={new Player("Player 1", Role.Tank)}/>
        <PlayerTracker  mode={mode} player={new Player("Player 2", Role.Healer)}/>
        <PlayerTracker  mode={mode} player={new Player("Player 3", Role.Dps)}/>
        <PlayerTracker  mode={mode} player={new Player("Player 4", Role.Dps)}/>
        <PlayerTracker  mode={mode} player={new Player("Player 5", Role.Dps)}/>
    </Stack>
  );
}