import { Box, Typography } from '@mui/material';
import React from 'react';
import calendarIcon from '../../assets/images/icon-calendar.svg';
import { IndicatorCard, commonFlexStyles } from './style';
import IndicatorIcon from '../../assets/images/INDI.png';

const data = [1, 2, 1, 1, 1, 1];

const IndicatorCards = () => {
  return (
    <Box>
      <Typography
        color={'black'}
        sx={{ display: 'flex', alignItems: 'center', fontSize: '25px', my: 1, fontWeight: 600 }}
      >
        <img width={40} src={IndicatorIcon} alt="" />
        Indicadores
      </Typography>

      {data.map((info) => (
        <>
          <IndicatorCard>
            <Typography color="#0066a4" sx={{ fontWeight: 600, pb: 1 }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            </Typography>
            <Typography color={'#1E1E1E'}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 3 }}>
              <Box sx={{ ...commonFlexStyles() }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <img src={calendarIcon} alt="" />
                  <Typography>Período de referência</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Typography>Inicial </Typography>
                  <Typography color={'#1E1E1E'}>02/01/2023 </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Typography>Final </Typography>
                  <Typography color={'#1E1E1E'}>31/01/2023 </Typography>
                </Box>
              </Box>
              <Box sx={{ ...commonFlexStyles() }}>
                <img src={calendarIcon} alt="" />
                <Typography>Última atualização </Typography>
                <Typography color={'#1E1E1E'}>02/01/2023 </Typography>
              </Box>
              <Box sx={{ ...commonFlexStyles(), boxShadow: '0px 1px 2px #00000029' }}>
                <input type="checkbox" />
                <Typography>Selecionado</Typography>
              </Box>
            </Box>
          </IndicatorCard>
        </>
      ))}
    </Box>
  );
};

export default IndicatorCards;
