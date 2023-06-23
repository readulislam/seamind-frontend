import { useTranslation } from 'react-i18next';

import { SearchOutlined } from '@mui/icons-material';
import { Box, FormControl, Input, InputAdornment, Paper, Typography } from '@mui/material';
import React from 'react';
import iconInfo from '../../assets/images/icon-info.svg';
import { CustomButton } from '../../globalStyles';

const SearchBarView = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box py={2}>
        <Paper
          elevation={8}
          sx={{ py: 1.5, px: 2, my: 2, border: '1px solid #00000014', display: 'flex', alignItems: 'center' }}
        >
          <FormControl sx={{ width: '100%' }} variant="standard">
            <Input
              placeholder={t('enterKeywordToSearch')}
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <SearchOutlined />
                </InputAdornment>
              }
            />
          </FormControl>
          <CustomButton>{t('Search')}</CustomButton>
        </Paper>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <img src={iconInfo} alt="" />
          <Typography>24 {t('results')}</Typography>
          <Typography sx={{ textDecoration: 'underline', color: '#0066A4' }}>24 {t('clearAllFilters')}</Typography>
        </Box>
      </Box>
    </>
  );
};
// 24 results 24 Clear all filters
//  24 resultados 24

export default SearchBarView;
