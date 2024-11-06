import React from 'react'
import sanjay from '../assets/profile.jpeg'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'> {props.name} </p>
      <img id='user-img' alt='user-photo' src={props.image} ></img>
      <p id='user-desc'> {props.desc} </p>
    </div>
  )
}

export default UserCard
