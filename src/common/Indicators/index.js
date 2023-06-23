import React from 'react';
import IndicatorsView from './IndicatorsView';

const Indicators = ({ IndicatorHeaderTitle, IndicatorSubTitle }) => {
  return (
    <>
      <IndicatorsView IndicatorHeaderTitle={IndicatorHeaderTitle} IndicatorSubTitle={IndicatorSubTitle} />
    </>
  );
};

export default Indicators;
