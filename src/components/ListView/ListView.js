import React from 'react';
import './list.css';
import ShopItem from './ShopItem';

function ListView({ items }) { 
  let indexItem = 0;

  return (
    <div className='listView'>
      {items.map((item) => (
        <ShopItem item={item} key={indexItem++} />
      ))}
    </div>
  );
}

export default ListView;