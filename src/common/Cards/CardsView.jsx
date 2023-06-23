import { useTranslation } from 'react-i18next';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { CardStyles } from './style';

const CardsView = ({ CardsData }) => {
  const { t } = useTranslation();
  return (
    <Grid container direction={'row'} spacing={2}>
      {CardsData.map((data) => (
        <>
          <Grid item sm={6} md={3} lg={2}>
            <Box sx={data.color ? CardStyles(data.color) : CardStyles('#00253D')}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography sx={{ fontSize: 35, fontWeight: 700 }}>{data.id}</Typography>
                <Typography variant="body1">{t(data.title)}</Typography>
              </Box>
              <Box>
                <img width="102px" src={data.img} alt="" />
              </Box>
            </Box>
          </Grid>
        </>
      ))}
    </Grid>
  );
};

export default CardsView;
