import React from 'react';
import { Typography } from '@mui/material';
import { t } from 'i18next';
import PolicyLayoutView from '../../common/PolicyLayout/PolicyLayoutView';
import { InterventionCards } from '../../utils/mockData';
import iconRight from '../../assets/images/icon-right.svg';
import PathIcon from '../../assets/images/Group 326.svg';

const InterventionAreaView = () => {
  const NextTags = () => {
    return (
      <>
        <Typography>{t('NationalStrategyForTheSea2021-2030')}</Typography>
      </>
    );
  };
  return (
    <>
      <PolicyLayoutView
        IndicatorHeaderTitle="Indicadores gerais"
        IndicatorSubTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
        CardsData={InterventionCards}
        cardHeaderTitle={'priorityInterventionAreas'}
        headerIcon={PathIcon}
        headerBgColor="#00253D"
        logozIndex={-1}
        NextTags={NextTags}
        headerTitle={'priorityInterventionAreas'}
        headerQuote={
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
        }
      />
    </>
  );
};
export default InterventionAreaView;
