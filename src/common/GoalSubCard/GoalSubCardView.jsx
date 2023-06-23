import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

const GoalSubCardView = () => {
  return (
    <Paper elevation={4} sx={{ padding: 3, position: 'relative' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        <Typography sx={{ fontSize: '32px', fontWeight: 700, color: '#C6C6C6' }}>OE1.</Typography>
        <Typography sx={{ fontSize: '32px', fontWeight: 700, color: '#9FCC3C' }}>1</Typography>
      </Box>

      <Typography color={'#1E1E1E'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sunt hic! Excepturi porro nostrum fugit
        officia non perspiciatis laborum iusto.
      </Typography>

      <Box
        sx={{
          height: '50px',
          background: '#9FCC3C',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '15px',
          borderRadius: '10px 0px 10px 0px',
        }}
      />
    </Paper>
  );
};

export default GoalSubCardView;
