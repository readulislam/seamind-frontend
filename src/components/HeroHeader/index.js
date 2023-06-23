import * as React from 'react';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Waves from '../../assets/images/Home A/waves.svg';
import Logo from '../../assets/images/Home A/logo-xxl.svg';
import { Background, HeroHeaderLayoutRoot, backgroundStyle, container, overlapColor, wavesStyle } from './style';

const HeroHeader = (props) => {
  const { backgroundImage, children, bgColor, component, opacity, logozIndex } = props;

  return (
    <HeroHeaderLayoutRoot>
      <Box sx={wavesStyle}>
        <img src={Waves} alt="" />
      </Box>
      <Box sx={{ position: 'absolute', right: 0, bottom: -400, zIndex: logozIndex }}>
        <img src={Logo} alt="" />
      </Box>
      <Container maxWidth="xl" sx={container}>
        {/* replace children */}
        {children}
        {/* setup image and black overlap  */}
        <Box sx={overlapColor(bgColor, opacity)} />

        {
          <Background sx={backgroundStyle(backgroundImage, component)} />

          // </Background>
        }
      </Container>
    </HeroHeaderLayoutRoot>
  );
};

HeroHeader.propTypes = {
  children: PropTypes.node,
};

export default HeroHeader;
