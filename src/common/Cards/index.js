import React from 'react';
import CardsView from './CardsView';

const Cards = ({ CardsData }) => {
  return (
    <div>
      <CardsView CardsData={CardsData} />
    </div>
  );
};

export default Cards;
