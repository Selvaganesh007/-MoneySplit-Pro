import React from 'react';
import './GroupCard.scss';

const GroupCard = () => {
  return (
    <div className='groupCard'>
      <div className='groupCard_header'>
        <h3>Group Name</h3>
      </div>
      <div className='groupCard_body'>
        <div className='groupCard_detail'>No of group Members: 5</div>
        <div className='groupCard_owned'>You are owned: 700</div>
        <div className='groupCard_owe'>You owe: 45</div>
      </div>
    </div>
  )
}

export default GroupCard;