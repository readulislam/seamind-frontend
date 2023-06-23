import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import headerIcon from '../../assets/images/icon-parceiros-lg.png';
import DashboardCount from '../../common/DashboardCount';
import SearchBarView from '../../common/SearchBar';
import HeroHeader from '../../components/HeroHeader';
import IndicatorsView from '../../common/Indicators/IndicatorsView';
import partnerLogo1 from '../../assets/images/logo-ipma.png';

const PartnerView = () => {
  return (
    <>
      <HeroHeader bgColor="#00253D" logozIndex={-1}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Box>
            <Typography pt={2} variant="h3">
              Instituto Português do Mar e da Atmosfera, I. P
            </Typography>
            <img src={headerIcon} alt="" />
          </Box>
          <Box>
            <img width={'100%'} src={partnerLogo1} alt="" />
            <Typography pt={2} variant="">
              Instituto Português do Mar e da Atmosfera, I. P
            </Typography>
          </Box>
        </Box>
      </HeroHeader>
      <DashboardCount />
      <Container maxWidth="xl">
        <IndicatorsView IndicatorHeaderTitle={'Indicadores da entidade'} />
      </Container>
    </>
  );
};

export default PartnerView;
