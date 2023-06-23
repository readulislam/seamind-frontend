import { Box, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Portugal2020 from '../../assets/images/Home A/logo-portugal2020.png';
import Dpmg from '../../assets/images/Home A/logo-dpmg.png';
import Rpem from '../../assets/images/Home A/logo-rpem.png';
import Facebook from '../../assets/images/Home A/icon-facebook.svg';
import Linkedin from '../../assets/images/Home A/icon-linkedin.svg';
import Twitter from '../../assets/images/Home A/icon-twitter.svg';

const FooterView = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ width: 1, marginTop: 'auto' }}>
      <Box sx={{ background: '#FFFFFF' }}>
        <Container maxWidth="xl">
          <Grid justifyContent="center" alignItems="center" container>
            <Grid sx={{ textAlign: 'center' }} item sm={12} md={6} lg={3}>
              <img src={Portugal2020} alt="" />
            </Grid>
            <Grid sx={{ textAlign: 'center' }} item sm={12} md={6} lg={3}>
              <img src={Dpmg} alt="" />
            </Grid>
            <Grid sx={{ textAlign: 'center' }} item sm={12} md={6} lg={3}>
              <img src={Rpem} alt="" />
            </Grid>
            <Grid sx={{ textAlign: 'center' }} item sm={12} md={6} lg={3}>
              <Typography>{t('SocialMedia')}</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, paddingTop: 1 }}>
                <img src={Facebook} alt="" />
                <img src={Twitter} alt="" />
                <img src={Linkedin} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ background: '#0066A4', color: '#FFFFFF' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', gap: 4, paddingY: 4 }}>
            <Typography variant="h6">{t('DataProtection')}</Typography>
            <Typography variant="h6">{t('LegalNotices')}</Typography>
            <Typography variant="h6">{t('UsefulLinks')}</Typography>
            <Typography variant="h6">{t('SiteMap')}</Typography>
            <Typography variant="h6">{t('AboutUs')}</Typography>
            <Typography variant="h6">{t('Contacts')}</Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={{ background: '#00253D', color: '#FFFFFF', paddingY: 2 }}>
        <Container maxWidth="xl">
          <Typography>{t('FooterText')}</Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default FooterView;
