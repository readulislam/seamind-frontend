import { TabContext, TabPanel } from '@mui/lab';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroHeader from '../../components/HeroHeader';
// import backgroundImage from '../../assets/images/Home A/img.png';
import CustomTabList, { commonShadow } from '../../common/CustomTabList';
import DashboardCount from '../../common/DashboardCount';
import AboutView from '../../components/About/AboutView';
import Blogs from '../../components/Blogs';
import { editorTabData, representarType } from '../../utils/mockData';

const backgroundImage = 'https://i.ibb.co/dkXFBfh/img.png';
const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

const Home = () => {
  const [value, setValue] = useState('1');
  const { t, i18n } = useTranslation();

  return (
    <>
      <HeroHeader logozIndex={-1} component="home" bgColor={'rgba(0,102,164,0.700)'} backgroundImage={backgroundImage}>
        <Box maxWidth={600}>
          <Typography mb={3} variant="h1">
            {/* {t('Policy')} */}
            {t('ThePlatformUniqueOnTheSea')}
          </Typography>
          <Typography mb={3} sx={{ fontSize: 20 }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
          </Typography>
          <Typography sx={{ textDecoration: 'underline' }}>{t('ToKnowMore')}</Typography>
        </Box>
      </HeroHeader>
      <DashboardCount />
      <Blogs />i
      <Box>
        <Typography variant="h5" sx={{ textDecoration: 'underline', textAlign: 'center', marginBottom: 12 }}>
          {t('MorePublications')}
        </Typography>
        <AboutView backgroundImage="https://i.ibb.co/5GB7gcR/Screenshot-from-2023-04-04-17-32-41.png">
          <Typography variant="h2" color={'white'} pb={8}>
            {t('DidYouKnowWhat?')}
          </Typography>
          <Typography variant="h6" sx={{ fontFamily: 'Roboto Slab', fontSize: '32px !important', fontWeight: 'light' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla
          </Typography>
        </AboutView>
      </Box>
    </>
  );
};

export default Home;
