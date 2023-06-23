import { Container } from '@mui/material';
import React from 'react';
import DashboardCountView from './DashboardCountView';

const DashboardCount = () => {
  return (
    <Container sx={{ marginTop: 6, marginBottom: 10 }} maxWidth="xl">
      <DashboardCountView />
    </Container>
  );
};

export default DashboardCount;
