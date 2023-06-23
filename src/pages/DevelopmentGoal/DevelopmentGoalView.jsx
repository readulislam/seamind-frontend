import React from 'react';
import { Typography } from '@mui/material';
import PolicyLayoutView from '../../common/PolicyLayout/PolicyLayoutView';
import { DevelopmentCards, InterventionCards } from '../../utils/mockData';
import iconRight from '../../assets/images/icon-right.svg';
import PathIcon from '../../assets/images/icon-agenda.svg';

const DevelopmentGoalView = () => {
  const NextTags = () => {
    return (
      <>
        <Typography>Agenda 2030</Typography>
      </>
    );
  };
  return (
    <>
      <PolicyLayoutView
        IndicatorHeaderTitle="Indicadores "
        IndicatorSubTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
        CardsData={DevelopmentCards}
        cardHeaderTitle={'Objetivos do Desenvolvimento Sustentável'}
        headerIcon={PathIcon}
        headerBgColor="#00253D"
        logozIndex={-1}
        NextTags={NextTags}
        headerTitle={'Agenda 2030'}
        headerQuote={
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
        }
      />
    </>
  );
};
export default DevelopmentGoalView;
