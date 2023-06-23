import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// main layout
export const HeroHeaderLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  //   height: '20vh',
  [theme.breakpoints.up('sm')]: {
    minHeight: 800,
    maxHeight: 1300,
  },
}));

// images background setup
export const Background = styled(Box)({
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  // objectFit:'fill',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
  backgroundPosition: 'center',
  width: '100%',
});

// mainContainer
export const container = {
  mt: 20,
  mb: 14,
};

// wavesStyle
export const wavesStyle = { position: 'absolute', bottom: -25, width: '100%' };

// setup background image
export const backgroundStyle = (backgroundImage, component) => {
  return {
    backgroundImage: `url(${backgroundImage})`,
    // backgroundColor: '#7fc7d9', // Average color of the background image.

    position: `${component === 'home' ? 'absolute' : 'relative'}`,
  };
};

// image overlap and without image it can replace fixed color with opacity
export const overlapColor = (bgColor, opacity) => {
  return {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    // backgroundColor: 'common.black',
    backgroundColor: bgColor,
    opacity,
    zIndex: -1,
  };
};
