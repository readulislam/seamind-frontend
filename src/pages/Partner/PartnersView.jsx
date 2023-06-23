import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import headerIcon from '../../assets/images/icon-parceiros-lg.png';
import SearchBarView from '../../common/SearchBar';
import HeroHeader from '../../components/HeroHeader';
import { PartnerCardDatas } from '../../utils/mockData';

const PartnersView = () => {
  const { t } = useTranslation();
  const [partnerDetails, setPartnerDetails] = useState({});
  return (
    <>
      <HeroHeader bgColor="#00253D" logozIndex={-1}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Box>
            <img src={headerIcon} alt="" />
            <Typography pt={2} variant="h3">
              {t('Partners')}
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
        <SearchBarView />

        <Grid my={10} container spacing={2}>
          {PartnerCardDatas.map((data) => (
            <>
              <Grid item sm={12} md={6} lg={4}>
                <Box
                  onClick={() => setPartnerDetails(data)}
                  sx={{
                    width: '100%',
                    border: '1px solid #EBEBEB',
                    padding: 5,
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src={data.img} alt="" />
                    <Button
                      disableElevation
                      size="medium"
                      sx={{ color: '#003E65' }}
                      startIcon={<FactCheckRoundedIcon />}
                    >
                      {t('Consult')}
                    </Button>
                  </Box>
                  <Typography color={'#00253D'} fontWeight={600} pt={2}>
                    {t(data.partnerName)}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography color={'#0066A4'} fontWeight={600}>
                      {data.selectedIndicator}
                    </Typography>
                    <Typography color={'#1E1E1E'} fontWeight={600}>
                      /{data.indicators}
                    </Typography>
                    <Typography color={'#1E1E1E'} fontWeight={200}>
                      {' '}
                      {t('selectedIndicators')}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default PartnersView;
