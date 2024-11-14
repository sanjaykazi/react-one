import React from 'react'

const Card = (props) => {
  return (
    <div>
        <input type='text' onChange={(e) => props.setName(e.target.value)}/>
        <p>
            Name variable inside child Card: {props.name}
        </p>
    </div>
  )
}

export default Card
