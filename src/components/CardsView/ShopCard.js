import React from 'react';
import './cards.css';

function ShopCard({card, key}) {
 // console.log('ShopCard ');
  return (
    <div className='shopCard'>
      <h2 className='heading'>{card.name}</h2>
      <p className='coloritem'>{card.color}</p>
      <img src={card.img} alt='' />
      <div className='bodyCart'>
        <span className='bodyCart_price'>${card.price}</span>
        <button className='buttonCart'>Add to Cart</button>
      </div>
    </div>
  );
}

export default ShopCard;