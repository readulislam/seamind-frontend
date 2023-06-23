import React from 'react';
import { Container } from '@mui/material';
import GoalSubCardView from './GoalSubCardView';

const GoalSubCard = () => {
  return (
    <Container sx={{ marginTop: 6, marginBottom: 1 }} maxWidth="xl">
      <GoalSubCardView />
    </Container>
  );
};

export default GoalSubCard;
