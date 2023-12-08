import React from 'react';
import { Link } from 'react-router-dom';
import { MdGrade } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";


import './OverviewCard.css';


const OverviewCard = (props) => {


  return (
    <div className='overview-card box-shadow'>

      {props.image ? <img src={props.image} alt="" className={props.imgRatio}/> : null}
      

      <div className='text-content'>
        <div className='row'>
          <h1>{props.title}</h1>
          {props.grade ? 
            <span><MdGrade className='grade-icon' /><h2>{props.grade}</h2></span> 
            : null}
        </div>

        <div className='row'>
          <h2>{props.subtitle}</h2>
        </div>

        {props.subtitle2 ? 
          <div className='row'><h2>{props.subtitle2}</h2></div> 
          : null}

        <div className='row'>
          <h3>{props.dates}</h3>
          {props.url && <Link to={props.url} className='link icon' aria-label={`Link to Degree`}>
            See Details <FaArrowRightLong className='arrow' />
          </Link>}
        </div>

      </div>

    </div>
  )
}

export default OverviewCard;