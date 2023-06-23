import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { dashboardCountEle } from '../../utils/mockData';

const DashboardCountView = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h3" sx={{ paddingBottom: 5 }}>
        {t('SeaI​nNumbers')}
      </Typography>
      <Grid justifyContent="center" alignItems="end" container>
        {dashboardCountEle.map((element) => (
          <>
            <Grid
              key={element.id}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: '' }}
              item
              xs={12}
              sm={4}
              md={3}
            >
              <img width={100} src={element.image} alt="" />
              <Typography color={'#0065A4'} sx={{ marginTop: 4 }} variant="h2">
                {t(element.total)}
              </Typography>
              <Typography color={'#0065A4'} variant="h4">
                {t(element.title)}
              </Typography>
              <Typography color={'#0065A4'} variant="">
                {t(element.description)}
              </Typography>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};

export default DashboardCountView;
