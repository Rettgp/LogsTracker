import React from 'react';
import { createSvgIcon, PaletteMode } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import ShieldIcon from '@mui/icons-material/Shield';
import HealIcon from '@mui/icons-material/LocalHospital';
import Rank from './Rank';
import { indigo, green } from '@mui/material/colors';
import { Player, Role } from './Player';
import { Encounter } from './Encounter';
import EncounterLog from './EncounterLog';

interface PlayerTrackerProps {
  mode: PaletteMode;
  player: Player;
  encounters: Array<Encounter>;
}

const SwordIcon = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#b71c1c"><path d="M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM334-583l24-23 23-24-23 24-24 23Zm-56 57L80-724v-160h160l198 198-57 56-174-174h-47v47l174 174-56 57Zm92 199 430-430v-47h-47L323-374l47 47Zm0 0-24-23-23-24 23 24 24 23Z"/></svg>,
  'Sword',
);

function RoleIcon(role: Role) {
  switch (role) {
    case Role.Tank:
      return <ShieldIcon sx={{color: indigo[500], alignSelf: 'center'}}/>; 
    case Role.Healer:
      return <HealIcon sx={{color: green[500], alignSelf: 'center'}}/>; 
    case Role.Dps:
      return <SwordIcon sx={{alignSelf: 'center'}}/>; 
    default:
      return <SwordIcon sx={{alignSelf: 'center'}}/>; 
  }
}

function GenerateEncounters(mode: PaletteMode, player: Player, encounters: Array<Encounter>) {
  if (encounters === null) {
    return;
  }
  return encounters.map((element, index) => 
    <EncounterLog key={index} mode={mode} id={element.id} name={element.name} parse={player.parses.get(element.id) ?? 0} sx={{ height: '100%', width: '20%' }}></EncounterLog>
  );
}

export default function PlayerTracker({ mode, player, encounters }: PlayerTrackerProps) {
  return (
    <Box>
      <Card sx={{p: 2, width: '100%'}}>
        <Stack
            direction="row"
            spacing={3}
            sx={{ flexGrow: 1 }}
        >
            <Rank mode={mode} player={player}/>
            <Typography
                sx={{
                  typography: { ld: 'h6', md: 'subtitle1', sm: 'body1', xs: 'body2' },
                  alignSelf: 'center',
                  textAlign: 'center',
                  width: '10%',
                  minWidth: '10%',
                }}
              >
                {player.name}
            </Typography>
            {RoleIcon(player.role)}
            <Divider orientation="vertical" variant="middle" flexItem />
            <Stack direction="row" spacing={1} sx={{ flexGrow: 1 }}>
                {GenerateEncounters(mode, player, encounters)}
            </Stack>
        </Stack>
      </Card>
    </Box>
  );
}