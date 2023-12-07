import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';


const Card = (props) => {

  return (
    <div className='card' style={{backgroundImage: `url(${props.picture})`}}>
        <div className="card-title"><h1>{props.title}</h1></div>
        <Link to={props.url} className='link' aria-label={`Link to experience overview`}>
            <button className='btn'>See {props.category}</button>
        </Link>
    </div>
  )
}

export default Card;