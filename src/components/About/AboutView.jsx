import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Waves from '../../assets/images/Home A/waves.svg';

const AboutLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  //   height: '20vh',
  [theme.breakpoints.up('sm')]: {
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  // objectFit:'fill',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

const AboutView = (props) => {
  const { backgroundImage, children } = props;

  return (
    <AboutLayoutRoot>
      <Container
        maxWidth="xl"
        sx={{
          mt: 20,
          mb: 14,

          // display: 'flex',
          // flexDirection: 'column',
          // alignItems: 'center',
          // width: '100%',
        }}
      >
        {/* replace children */}
        {children}
        {/* setup image and black overlap  */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            // backgroundColor: 'common.black',
            backgroundColor: '#0065A4',
            opacity: 0.8,
            zIndex: -1,
          }}
        />
        <Background
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            // backgroundColor: '#7fc7d9', // Average color of the background image.
            backgroundPosition: 'center',
            width: '100%',
          }}
        />
      </Container>
    </AboutLayoutRoot>
  );
};

AboutView.propTypes = {
  children: PropTypes.node,
};

export default AboutView;
