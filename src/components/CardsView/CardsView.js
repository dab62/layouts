import React from 'react';
import './cards.css';
import ShopCard from './ShopCard';

function CardsView({ cards }) { 
  let indexCard = 0;

  return (
    <div className='cardsView'>
      {cards.map((card) => (
        <ShopCard card={card} key={indexCard++} />
      ))}
    </div>
  );
}

export default CardsView;