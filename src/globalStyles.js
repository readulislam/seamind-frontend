import { Button, Typography, styled } from '@mui/material';

export const CustomTypography = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: 600,
  color: theme.palette.primary.main,
}));
export const CustomButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.light,
  color: theme.palette.common.white,
}));

export const commonHeading = {
  fontSize: '36px',
  fontWeight: 600,
  color: 'black',
};
