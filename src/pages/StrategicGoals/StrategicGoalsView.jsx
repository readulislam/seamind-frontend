import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import iconRight from '../../assets/images/icon-right.svg';

import PathIcon from '../../assets/images/Path 827.svg';
import PolicyLayoutView from '../../common/PolicyLayout/PolicyLayoutView';
import { VisãoCards } from '../../utils/mockData';

const StrategicGoalsView = () => {
  const { t } = useTranslation();

  const NextTags = () => {
    return (
      <>
        <Typography>{t('NationalStrategyForTheSea2021-2030')}</Typography>
        <img src={iconRight} alt="" />
        <Typography>{t('StrategicObjectives')}</Typography>
      </>
    );
  };
  return (
    <>
      <PolicyLayoutView
        IndicatorHeaderTitle="indicators"
        IndicatorSubTitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
        CardsData={VisãoCards}
        cardHeaderTitle={'vision'}
        headerIcon={PathIcon}
        headerBgColor="#00253D"
        logozIndex={-1}
        NextTags={NextTags}
        headerTitle={'StrategicObjectives'}
        headerQuote={
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
        }
      />
    </>
  );
};

export default StrategicGoalsView;
