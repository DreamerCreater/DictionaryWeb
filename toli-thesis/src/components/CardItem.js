import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item  bg-dark text-white'>
        <Link className='cards__item__link bg-dark text-white' to={props.path}>
          <figure className='cards__item__pic-wrap bg-dark text-white' data-category={props.label}>
            <img
              className='cards__item__img bg-dark text-white'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info bg-dark text-white'>
            <h5 className='cards__item__text bg-dark text-white'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;