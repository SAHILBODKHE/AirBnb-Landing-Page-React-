import React from 'react'
import { ReactDOM } from 'react'
import photo from '../images/swim.jpg'
export default function Cards(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = 'Sold Out'
  } else {
    badgeText = 'Online'
  }
  return (
    <nav className="Cards">
      <div className="c1">
        <div className="badge">{badgeText}</div>
        <img src={props.img} />
        <h1>
          ⭐{props.rating}({props.reviewCount}) * {props.location}
        </h1>

        <h2>{props.title}</h2>
        <h3>From ${props.price}/person</h3>
      </div>
    </nav>
  )
}
