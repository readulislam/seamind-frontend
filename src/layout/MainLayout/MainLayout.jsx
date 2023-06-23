import Box from '@mui/material/Box';
import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from './Navbar';
import ToasterContainer from '../../utils/ToasterContainer';

const MainLayoutView = () => {
  return (
    <Box component="main" sx={{ p: 0, width: '100%' }}>
      <Navbar />

      <Outlet />

      <Footer />
      <ToasterContainer />
    </Box>
  );
};

export default MainLayoutView;
