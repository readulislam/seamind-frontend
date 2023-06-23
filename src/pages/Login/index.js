import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Paper, Typography } from '@mui/material';
import LoginForm from './LoginForm';
import HeroHeader from '../../components/HeroHeader';

const Login = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroHeader bgColor="#00253D" logozIndex={-1} />

      <Box sx={{ position: 'relative', transform: 'translate(0%, -70%)' }}>
        <Paper elevation={10} sx={{ padding: 4, width: '30%', mx: 'auto', position: 'relative' }}>
          <Typography pb={4} color="black" variant="h4">
            {t('userLogin')}
          </Typography>

          <LoginForm />
        </Paper>
      </Box>
    </>
  );
};

export default Login;
