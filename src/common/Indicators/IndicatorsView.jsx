import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { CustomTypography } from '../../globalStyles';

import SearchBarView from '../SearchBar';
import IndicatorCards from './IndicatorCards';
import IndicatorSidebar from './IndicatorSidebar';

const IndicatorsView = ({ IndicatorHeaderTitle, IndicatorSubTitle }) => {
  return (
    <Box my={6}>
      <CustomTypography>{IndicatorHeaderTitle}</CustomTypography>
      <Typography py={1} color={''}>
        {IndicatorSubTitle}
      </Typography>

      <SearchBarView />
      <Grid my={8} container spacing={0}>
        <Grid xs={12} md={4}>
          <IndicatorSidebar />
        </Grid>

        <Grid xs={12} md={8}>
          <IndicatorCards />
        </Grid>
      </Grid>
    </Box>
  );
};

export default IndicatorsView;
