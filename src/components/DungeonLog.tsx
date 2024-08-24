import React from 'react';
import { PaletteMode, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import PlayerTracker from './PlayerTracker'
import { Player } from './Player';
import { Role } from './Player';
import { DungeonInfo } from './DungeonInfo';

interface DungeonLogProps {
  mode: PaletteMode;
  dungeon: any;
}

function GeneratePlayers(mode: PaletteMode, dungeon: DungeonInfo) {
  if (dungeon === null) {
    return;
  }
  return dungeon.GetPlayersInRankingOrder().map((element, index) => 
    <PlayerTracker mode={mode} player={element} encounters={dungeon.encounters} key={index}/>
  );
}

export default function DungeonLog({ mode, dungeon }: DungeonLogProps) {
  return (
    <Stack
      spacing={1}
      sx={{
        p: 2,
        backgroundColor: 'background.paper',
        flexGrow: 1,
      }}
    >
      {GeneratePlayers(mode, dungeon)}
    </Stack>
  );
}