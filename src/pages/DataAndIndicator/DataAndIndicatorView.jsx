import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import headerIcon from '../../assets/images/icon-dadosindicadores-lg.svg';
import iconRight from '../../assets/images/icon-right.svg';
import Indicators from '../../common/Indicators';
import HeroHeader from '../../components/HeroHeader';

const DataAndIndicatorView = () => {
  return (
    <>
      <HeroHeader bgColor="#00253D" logozIndex={-1}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Box>
            <img src={headerIcon} alt="" />
            <Typography pt={2} variant="h3">
              Dados e Indicadores
            </Typography>
          </Box>
          <Typography sx={{ fontSize: 24, maxWidth: 800 }}>
            {' '}
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
          </Typography>
        </Box>
      </HeroHeader>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, paddingY: 5 }}>
          <Typography>Início</Typography>
          <img src={iconRight} alt="" />
          <Typography>Dados e Indicadores</Typography>
          {/* <img src={iconRight} alt="" /> */}
        </Box>

        <Indicators />
      </Container>
    </>
  );
};

export default DataAndIndicatorView;
