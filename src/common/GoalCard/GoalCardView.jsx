import { Box, Button, Stack, Typography, styled } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { t } from 'i18next';
import IcobOe1 from '../../assets/images/icon-oe1.svg';

export const CardActionButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  color: theme.palette.common.white,
  borderRadius: '0px 9px 0 0px',
}));

const GoalCardView = ({ props }) => {
  const {
    mainTitle,
    headerTitle,
    minCardTitle,
    minCardImg,
    serialNo,
    description,
    buttonColor,
    leftBackgroundColor,
    rightBackgroundColor,
    buttonStartIcon: StartIcon,
  } = props;
  console.log(props);
  return (
    <Stack position={'relative'} direction={'row'} width={'100%'}>
      <Box sx={{ bgcolor: leftBackgroundColor, padding: 7, width: '35%', borderRadius: '10px 0 0 10px' }}>
        <Box
          sx={{
            border: '1px solid white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '250px',
            mx: 'auto',
            padding: 2,
          }}
          // sx={data.color ? CardStyles(data.color) : CardStyles('#00253D')}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'white' }}>
            <Typography sx={{ fontSize: '64px', fontWeight: 800 }}>{serialNo}</Typography>
            <Typography sx={{ fontSize: '20px', fontWeight: 600, textAlign: 'left' }}>{t(minCardTitle)}</Typography>
          </Box>
          <Box>
            <img width="102px" src={minCardImg} alt="" />
          </Box>
        </Box>
      </Box>
      <Stack
        spacing={4}
        sx={{ bgcolor: rightBackgroundColor, padding: 5, width: '65%', color: 'white', borderRadius: '0 10px 10px 0' }}
      >
        <Typography sx={{ fontSize: '24px', fontWeight: 500 }}>
          {t(headerTitle)} {serialNo}
        </Typography>
        <Typography sx={{ fontSize: '34px', fontWeight: 600, lineHeight: 1.3 }}>{t(mainTitle)}</Typography>
        <Typography sx={{ fontSize: '18px', lineHeight: 1.3 }}>{t(description)}</Typography>
      </Stack>

      <CardActionButton
        sx={{ background: buttonColor, '&:hover': { background: buttonColor } }}
        startIcon={<StartIcon />}
      >
        {t('consultGoals')}
      </CardActionButton>
    </Stack>
  );
};

export default GoalCardView;
