import React from 'react';
import { PaletteMode, Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GreyImg from '../images/grey.png';
import BronzeImg from '../images/bronze.png';
import SilverImg from '../images/silver.png';
import GoldImg from '../images/gold.png';
import SuperGoldImg from '../images/super-gold.png';
import PlatinumImg from '../images/platinum.png';
import DiamondImg from '../images/diamond.png';

interface RankProps {
  mode: PaletteMode;
  parse: number;
}

function RankColor(parse: number): string {
  if (parse <= 24) {
    return "#666666";
  } else if (parse >= 25 && parse <= 49) {
    return "#1eff00";
  } else if (parse >= 50 && parse <= 74) {
    return "#0070ff";
  } else if (parse >= 75 && parse <= 94) {
    return "#a335ee";
  } else if (parse >= 95 && parse <= 98) {
    return "#ff8000";
  } else if (parse === 99) {
    return "#e268a8";
  } else {
    return "#e5cc80";
  }
}

function RankIcon(parse: number) {
  if (parse <= 24) {
    return <img src={GreyImg} width={50} height={50} alt="Logo" />;
  } else if (parse >= 25 && parse <= 49) {
    return <img src={BronzeImg} width={50} height={50} alt="Logo" />;
  } else if (parse >= 50 && parse <= 74) {
    return <img src={SilverImg} width={50} height={50} alt="Logo" />;
  } else if (parse >= 75 && parse <= 94) {
    return <img src={GoldImg} width={50} height={50} alt="Logo" />;
  } else if (parse >= 95 && parse <= 98) {
    return <img src={SuperGoldImg} width={50} height={50} alt="Logo" />;
  } else if (parse === 99) {
    return <img src={PlatinumImg} width={50} height={50} alt="Logo" />;
  } else {
    return <img src={DiamondImg} width={50} height={50} alt="Logo" />;
  }
}


export default function Rank({ mode, parse }: RankProps) {
  return (
    <Box>
        <Stack
            spacing={0}
            sx={{ mt: 2 }}
        >
        {RankIcon(parse)}
        <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              color: RankColor(parse)
            }}
          >
            {parse}
        </Typography>
        </Stack>
    </Box>
  );
}