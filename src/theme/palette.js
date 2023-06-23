import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS
export const GREY = {
  0: '#EBEBEB',
  100: '#EBEBEB',
  200: '#7E7E7E',
  300: '#0000001F',
  400: '#00000029',
  500: '#C6C6C6',
  600: '#1E1E1E',
  700: '#00000059',
  800: '#8D8D8D',
  900: '#7E7E7E',
};

const PRIMARY = {
  lighter: '#0066A4',
  darker: '#00253D',
  contrastText: '#fff',
  main: '#00253D',
  light: '#0066A4',
  dark: '#00253D',
};

const SECONDARY = {
  lighter: '#003E65',
  light: '#003E65',
  main: '#003E65',
  dark: '#1939B7',
  darker: '#091A7A',
  contrastText: '#fff',
};

const INFO = {
  lighter: '#E5EFF6',
  light: '#0066A41A',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: GREY[800],
};

const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff',
};

const palette = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: '#fff',
    default: '#fff',
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
