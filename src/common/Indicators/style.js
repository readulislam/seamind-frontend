import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const IndicatorCard = styled(Box)(({ theme }) => ({
  padding: '20px',
  border: '1px solid',
  borderColor: '#EBEBEB',
  borderRadius: '8px',
  marginBottom: '20px',
}));

export const commonFlexStyles = () => {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    border: '1px solid',
    borderColor: '#EBEBEB',
    p: 1,
    borderRadius: '5px',
  };
};
