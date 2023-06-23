import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import RegisterForm from './RegisterForm';
import HeroHeader from '../../components/HeroHeader';

const Register = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroHeader bgColor="#00253D" logozIndex={-1} />

      <Box sx={{ position: 'relative', transform: 'translate(0%, -70%)' }}>
        <Paper elevation={10} sx={{ padding: 4, width: '30%', mx: 'auto', position: 'relative' }}>
          <Typography pb={4} color="black" variant="h4">
            {t('userRegistration')}
          </Typography>

          <RegisterForm />
        </Paper>
      </Box>
    </>
  );
};

export default Register;
