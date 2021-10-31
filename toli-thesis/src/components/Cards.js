import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import battulga from '../pic/battulga.jpg';
function Cards() {
  return (
    <div className={"border border-dark bg-dark text-white"}>
      <h1>Эх хэлний мэдлэгээ нэмэгдүүлье!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' >
          <CardItem
              src={battulga}
              text='Монгол Улсын Ерөнхийлөгчийн Монгол Хэлний Бодлого, үйл ажиллагааны хөтөлбөр'
              label='Ерөнхийлөгчийн үг'
              path='https://president.mn/16905/'
            />
            <CardItem
              src={battulga}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={battulga}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
            
          </ul>
          <ul className='cards__items'>
          <CardItem 
              src={battulga}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={battulga}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;