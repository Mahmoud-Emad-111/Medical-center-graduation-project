import React from 'react'
import { Link } from 'react-router-dom'

export default function DoctorCart(props) {
    
  return (
    <div className='DoctorCart'>
        <img src={props.image} alt="" />
        <div className='detalis'>
        <div className="top">
        <h3>{props.name}</h3>
        <span>{props.email}</span>
        </div>
        <Link to={`/${props.Chat}/${props.id}`}>Chat</Link>
        </div>
    </div>
  )
}
