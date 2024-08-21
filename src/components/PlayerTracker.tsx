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
import { Player } from './Player';
import { Role } from './Player';

interface PlayerTrackerProps {
  mode: PaletteMode;
  player: Player;
}

const SkullIcon = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
    <path d="M240-80v-170q-39-17-68.5-45.5t-50-64.5q-20.5-36-31-77T80-520q0-158 112-259t288-101q176 0 288 101t112 259q0 42-10.5 83t-31 77q-20.5 36-50 64.5T720-250v170H240Zm80-80h40v-80h80v80h80v-80h80v80h40v-142q38-9 67.5-30t50-50q20.5-29 31.5-64t11-74q0-125-88.5-202.5T480-800q-143 0-231.5 77.5T160-520q0 39 11 74t31.5 64q20.5 29 50.5 50t67 30v142Zm100-200h120l-60-120-60 120Zm-80-80q33 0 56.5-23.5T420-520q0-33-23.5-56.5T340-600q-33 0-56.5 23.5T260-520q0 33 23.5 56.5T340-440Zm280 0q33 0 56.5-23.5T700-520q0-33-23.5-56.5T620-600q-33 0-56.5 23.5T540-520q0 33 23.5 56.5T620-440ZM480-160Z"/>
  </svg>,
  'Skull',
);

const SwordIcon = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM334-583l24-23 23-24-23 24-24 23Zm-56 57L80-724v-160h160l198 198-57 56-174-174h-47v47l174 174-56 57Zm92 199 430-430v-47h-47L323-374l47 47Zm0 0-24-23-23-24 23 24 24 23Z"/></svg>,
  'Sword',
);

function RoleIcon(role: Role) {
  switch (role) {
    case Role.Tank:
      return <ShieldIcon sx={{alignSelf: 'center'}}/>; 
    case Role.Healer:
      return <HealIcon sx={{alignSelf: 'center'}}/>; 
    case Role.Dps:
      return <SwordIcon sx={{alignSelf: 'center'}}/>; 
    default:
      return <SwordIcon sx={{alignSelf: 'center'}}/>; 
  }
}

export default function PlayerTracker({ mode, player }: PlayerTrackerProps) {
  return (
    <Box>
      <Card sx={{p: 2, width: '100%'}}>
        <Stack
            direction="row"
            spacing={3}
            sx={{ flexGrow: 1 }}
        >
            <Rank mode={mode} parse={96}/>
            <Typography
                variant="h4"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignSelf: 'center',
                  textAlign: 'center',
                }}
              >
                {player.name}
            </Typography>
            {RoleIcon(player.role)}
            <Divider orientation="vertical" variant="middle" flexItem />
            <Stack
                direction="row"
                spacing={2}
                sx={{ flexGrow: 1 }}
            >
              <Chip label={<Typography variant="h6" fontWeight="bold">15</Typography>} color="error" icon={<SkullIcon/>} 
                sx={{alignSelf: 'center', height: '50%'}}
              ></Chip>
            </Stack>
        </Stack>
      </Card>
    </Box>
  );
}