import { InputAdornment } from '@mui/material';
import React from 'react';

const CustomInputIcon = ({ position, imageIcon }) => {
  return (
    <>
      <InputAdornment position={position}>
        <img width={'80%'} src={imageIcon} alt="" />
      </InputAdornment>
    </>
  );
};

export default CustomInputIcon;
